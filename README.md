🛒 MERN E-Commerce App with Admin Dashboard

A full-stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux Toolkit for efficient global state management.

This project delivers a complete online shopping experience — including secure authentication, product management, cart and checkout flow, PayPal payment integration, and an advanced Admin Dashboard for managing users, orders, and products in real-time.

🚀 Features
🛍️ User Features

🔐 JWT-based Authentication (Login, Register, Logout)

🛒 Add to Cart / Remove from Cart

🛍️ Product Filtering, Sorting & Search

💳 PayPal Payment Integration

📦 Order Tracking

👤 Profile Management

🧑‍💼 Admin Dashboard

Manage your e-commerce system efficiently with real-time control:

📦 Product Management

Add, Edit, and Delete products

Manage stock and product images

👥 User Management

View all registered users

Change user roles (Admin / Customer)

Delete users

🧾 Order Management

View all orders

Update order status

📊 Analytics Dashboard

Interactive charts and graphs for orders, revenue, and users (powered by MongoDB data)

🧠 Tech Stack
Frontend

⚛️ React (Vite)

🧠 Redux Toolkit (State Management)

🎨 Tailwind CSS

🔌 Axios

🔐 React Router DOM

📈 Recharts (Admin analytics)

Backend

🟢 Node.js + Express.js

🍃 MongoDB + Mongoose

🔒 JWT Authentication + bcryptjs

💵 PayPal REST API Integration

☁️ Multer (for image uploads)

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/joshu1024/mern-ecommerce.git
cd mern-ecommerce

2️⃣ Install Dependencies
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

3️⃣ Configure Environment Variables

Create a .env file inside the server/ directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PORT=5000

4️⃣ Run Development Servers
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev


App runs on: http://localhost:5173

☁️ Deployment Guide
🚀 Deploy Backend on Render

Go to Render.com

Click “New +” → “Web Service”

Connect your GitHub repository

Set Root Directory → server

Build Command:

npm install


Start Command:

npm start


Add environment variables from .env

Deploy 🎉
Render URL example:

https://mern-ecommerce-server.onrender.com

🌐 Deploy Frontend on Vercel / Netlify
🅰️ Vercel

Go to Vercel

Import GitHub repo

Root directory → client

Add environment variable:

VITE_API_BASE_URL=https://mern-ecommerce-server.onrender.com


Deploy 🎉
Example:
https://mern-ecommerce.vercel.app

🅱️ Netlify

Import repo from GitHub

Build command: npm run build

Publish directory: client/dist

Add:

VITE_API_BASE_URL=https://mern-ecommerce-server.onrender.com


Deploy 🚀

📂 Folder Structure
mern-ecommerce/
│
├── client/                   # React + Vite frontend
│   ├── src/
│   │   ├── app/              # Redux store setup
│   │   ├── features/         # Redux slices (cart, product, user, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Home, Product, Cart, Checkout, Admin pages
│   │   └── assets/
│   ├── public/
│   └── vite.config.js
│
├── server/                   # Express + MongoDB backend
│   ├── config/               # Database connection
│   ├── controllers/          # Route controllers
│   ├── middleware/           # Auth & error handlers
│   ├── models/               # Mongoose schemas
│   ├── routes/               # Express route definitions
│   ├── utils/                # Helper functions
│   └── server.js
│
└── README.md

📊 Admin Dashboard Preview

The admin panel provides:

Overview cards (Total Users, Orders, Products)

Order & revenue charts

Table views for all collections (Users, Orders, Products)

Edit/Delete buttons with modal confirmations

🎥 Live Demo & Screenshots
🌐 Live Demo

🛍️ Frontend (Vercel) → [https://mern-ecommerce.vercel.app](https://mern-ecommerce-26w1-git-main-joes-projects-50075601.vercel.app/)

⚙️ Backend (Render) → [https://mern-ecommerce-server.onrender.com](https://mern-ecommerce-4ahr.onrender.com/)

🏠 Home Page

Showcases featured products with a responsive slider, category filters, and quick “Add to Cart” buttons.
🖼️ Screenshot:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/62a3d7b7-7f30-4cbc-af02-d1978ccd48fb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b8bca4bc-a492-4ab7-bab2-fac4d07066b4" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6bd1987d-273c-4894-8904-f1059dee75d5" />



👟 Product Details

Displays detailed product info, multiple images, and an “Add to Cart” button with quantity selector.
🖼️ Screenshot:


🛒 Shopping Cart & Checkout

Secure checkout with dynamic cart totals, order summary, and PayPal payment integration.
🖼️ Screenshot:


🔐 User Authentication

JWT-based login and registration with validation and protected routes.
🖼️ Screenshot:


🧑‍💼 Admin Dashboard

A fully functional admin panel that gives control over products, users, and orders — complete with charts and tables.
🖼️ Screenshot:


📊 Analytics

Real-time visualizations for sales, users, and revenue using Recharts and MongoDB aggregation.
🖼️ Screenshot:


⚙️ Tech Architecture

Backend on Render + Frontend on Vercel, communicating via RESTful APIs and JWT authentication.
🖼️ Screenshot:


🧑‍💻 Author

Joshua Kipamet Olting’idi
💼 LinkedIn

🐦 Twitter @JoeKipamet71036

💻 GitHub @joshu1024

⭐ Acknowledgements

MERN Stack Community

Redux Toolkit Team

PayPal Developer Docs

Vite + React Ecosystem

Render & Vercel Docs

💡 If you found this project helpful, please give it a ⭐ on GitHub! It helps others discover it.
