🛒 MERN E-Commerce App

A full-stack E-Commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux Toolkit for efficient state management.
This project includes secure authentication, product management, cart and checkout flow, PayPal payment integration, and a powerful admin dashboard — providing a full online shopping experience.

🚀 Features

🧑‍💼 User Authentication (JWT-based login/register)

🛍️ Product Management (add, edit, delete products)

📦 Shopping Cart & Checkout

💳 PayPal Payment Integration

📊 Admin Dashboard (manage users, orders, products)

🔍 Search & Filter Products

🧠 State Management with Redux Toolkit

🌐 API Integration via Axios

⚡ Frontend: React + Vite

🗄️ Backend: Node.js + Express + MongoDB

🧰 Tech Stack
Frontend

⚛️ React (Vite)

🧠 Redux Toolkit

🎨 Tailwind CSS (or your chosen CSS framework)

🔌 Axios

🔐 React Router DOM

Backend

🟢 Node.js + Express.js

🍃 MongoDB + Mongoose

🔒 JWT Authentication

🔑 bcryptjs

💵 PayPal REST API

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/joshu1024/mern-ecommerce.git
cd mern-ecommerce

2️⃣ Install dependencies
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

3️⃣ Configure environment variables

Create a .env file in server/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PORT=5000

4️⃣ Run development servers
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev


App runs on http://localhost:5173

⚙️ Deployment
🚀 Deploy Backend on Render

Go to Render.com

Click “New +” → “Web Service”

Connect your GitHub repository

Choose the server/ folder as the root (if Render asks)

Set the Build Command:

npm install


and Start Command:

npm start


Add environment variables from your .env file (MONGO_URI, JWT_SECRET, etc.)

Deploy 🎉
Render will give you a live backend URL like:
https://mern-ecommerce-server.onrender.com

🌐 Deploy Frontend on Netlify (or Vercel)
🅰️ Using Netlify

Go to Netlify

Click “Add New Site → Import from GitHub”

Select your repo

Set the build command:

npm run build


and publish directory:

client/dist


Add an environment variable for the backend:

VITE_API_BASE_URL=https://mern-ecommerce-server.onrender.com


Deploy 🚀
Your site will go live at something like:
https://mern-ecommerce.netlify.app

🅱️ Using Vercel

Go to Vercel

Click “Add New Project”

Import your GitHub repo

Choose client/ as your root directory

Add:

VITE_API_BASE_URL=https://mern-ecommerce-server.onrender.com


Deploy 🎉

📂 Folder Structure
E-Commerce/
│
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── app/         # Redux store setup
│   │   ├── features/    # Redux slices (cart, product, user, etc.)
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── public/
│   └── vite.config.js
│
├── server/              # Express + MongoDB backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md

🧑‍💻 Author

Joshua Kipamet Olting’idi
💼 LinkedIn

🐦 @JoeKipamet71036

⭐ Acknowledgements

MERN Stack Community

Redux Toolkit Team

PayPal Developer Docs

Vite + React Ecosystem

Render & Netlify Docs
