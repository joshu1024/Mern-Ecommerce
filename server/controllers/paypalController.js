import dotenv from "dotenv";
dotenv.config();

const PAYPAL_API =
  process.env.NODE_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function generateAccessToken() {
  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
    throw new Error("PayPal credentials are not configured");
  }

  const auth = Buffer.from(
    `AVhcnD3RpwZcOKS-AA8jpS_FuzRgVnj25RtZ-eNtafl8mpNFhpru97SCVE5xJ05wD6PpDIkR1neYNVO6:EA2LKo2rmfGn2GfhO3HuykdD_p0Kikpisf3wwWflrDwafxxO4WMyBMfR58V2hZ5B-kDa7FC-9CRo4XFU`,
  ).toString("base64");

  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || "Failed to generate token");
  }
  return data.access_token;
}

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body.amount;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ error: "Valid amount is required" });
    }

    const accessToken = await generateAccessToken();

    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "USD", value: Number(amount).toString() },
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(500)
        .json({ error: "Failed to create Paypal order", details: data });
    }
    res.status(201).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create order", details: err.message });
  }
};

export const captureOrder = async (req, res) => {
  try {
    const { orderID } = req.body;
    if (!orderID) {
      return res.status(400).json({ error: "orderID is required" });
    }
    const accessToken = await generateAccessToken();
    const response = await fetch(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const data = await response.json();
    if (!response.ok) {
      return res.status(500).json({ error: "Paypal capture failed", data });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to capture order");
  }
};
