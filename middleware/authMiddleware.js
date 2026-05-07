import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js"; // your Prisma client

const protectRoute = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const blacklisted = await prisma.tokenBlacklist.findUnique({
      where: { token },
    });
    if (blacklisted) {
      return res.status(401).json({ error: "Token has been invalidated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        userName: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ error: "Authorization failed" });
  }
};

export default protectRoute;
