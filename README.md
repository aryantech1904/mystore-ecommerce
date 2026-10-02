# 🛒 MyStore - Full Stack E-Commerce Website

MyStore is a full-stack e-commerce web application built to provide a simple and user-friendly online shopping experience. Users can browse products, view product details, register/login, add products to the cart, manage quantities, and securely log out.

## 🚀 Features

* 🏠 Responsive Home Page
* 🛍️ Products Listing
* 🔍 Product Search & Filtering
* 📦 Product Details Page
* 🛒 Add to Cart
* ➕➖ Increase/Decrease Cart Quantity
* 💾 Cart Data stored using LocalStorage
* 👤 User Registration & Login
* 🔐 Password Hashing using bcrypt
* 🔑 JWT-based Authentication
* 🚪 Secure Logout
* 📱 Responsive Navigation
* 🗄️ MongoDB Database Integration
* ⚡ REST API using Node.js & Express.js

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

### Tools

* VS Code
* Git
* GitHub
* npm

## 📁 Project Structure

```text
E-Commerce-Store/
│
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   ├── seedProducts.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aryantech1904/mystore-ecommerce.git
cd mystore-ecommerce
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Start the Backend

```bash
npm start
```

### 4. Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 5. Start the Frontend

```bash
npm run dev
```

The application will then be available through the local Vite development URL shown in the terminal.

## 🔐 Security

Sensitive environment variables such as MongoDB credentials and JWT secrets are stored in `.env` files and excluded from GitHub using `.gitignore`.

## 📌 Future Improvements

* Online Payment Integration
* Admin Dashboard
* Order Management
* Product Reviews & Ratings
* Wishlist
* Order History
* Deployment with a live backend and frontend

## 👨‍💻 Author

**Aryan Raj Srivastava**

Full Stack Developer

## 📄 License

This project is created for learning, development, and portfolio purposes.
