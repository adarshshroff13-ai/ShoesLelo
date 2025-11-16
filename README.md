# 🥿 E-Commerce Shoes Website

A full-stack web application built using **Vite + React** on the
frontend and **Node.js + Express + MongoDB** on the backend.\
This project allows users to browse shoes, manage their cart, and place
orders. The backend follows an MVC architecture for clean and scalable
code.

------------------------------------------------------------------------

## 📁 Project Structure

    project/
    │── client/                 # Frontend (Vite + React)
    │   ├── public/
    │   ├── src/
    │   ├── index.html
    │   ├── package.json
    │   ├── tailwind.config.js
    │   └── vite.config.js
    │
    │── server/                 # Backend (Node + Express)
    │   ├── controllers/        # Controller logic
    │   ├── models/             # MongoDB models
    │   ├── routes/             # API routes
    │   ├── index.js            # Express app entry
    │   ├── package.json
    │
    └── README.md

------------------------------------------------------------------------

# 🌟 Features

## 🔹 User Features

-   Browse shoe products\
-   View product details\
-   Add to cart\
-   Remove items\
-   Responsive UI with TailwindCSS

## 🔹 Backend Features

-   RESTful API\
-   Controllers for business logic\
-   MongoDB Models\
-   Routes separated for clean structure\
-   Ready for authentication & admin expansion

------------------------------------------------------------------------

# ⚙️ Tech Stack

### **Frontend**

-   React (Vite)
-   Tailwind CSS
-   JavaScript (ES6+)

### **Backend**

-   Node.js
-   Express.js
-   MongoDB + Mongoose

------------------------------------------------------------------------

# 🚀 Setup Instructions

## 📌 1. Clone the repository

``` bash
git clone <your-repo-url>
cd project
```

------------------------------------------------------------------------

# 🖥 Frontend Setup (client/)

### 2. Install dependencies

``` bash
cd client
npm install
```

### 3. Run the frontend

``` bash
npm run dev
```

Frontend will start on:\
👉 **http://localhost:5173**

------------------------------------------------------------------------

# 🛠 Backend Setup (server/)

### 4. Install backend dependencies

``` bash
cd server
npm install
```

### 5. Add `.env` file inside **server/**

    MONGO_URI=<your-mongodb-connection>
    PORT=5000
    JWT_SECRET=<your-secret>

### 6. Start backend server

``` bash
npm start
```

Backend runs on:\
👉 **http://localhost:5000**

------------------------------------------------------------------------

# 🔌 API Structure

### **Routes Folder**

-   `/routes/productRoutes.js`
-   `/routes/userRoutes.js`
-   `/routes/cartRoutes.js`

### **Controller Folder**

Contains logic for handling requests:

    controllers/
     ├── productController.js
     ├── userController.js
     ├── cartController.js

### **Models Folder**

Contains MongoDB schemas:

    models/
     ├── Product.js
     ├── User.js
     ├── Cart.js

------------------------------------------------------------------------

# 🧩 How It Works

### 🔹 Frontend

-   Built with Vite for fast performance\
-   UI uses TailwindCSS\
-   Fetches data from the Express API\
-   Manages cart in local state or Redux

### 🔹 Backend

-   Express handles API routes\
-   Controllers process business logic\
-   Models define MongoDB collections\
-   API consumed by React frontend

------------------------------------------------------------------------

# 📦 Build for Production

### Build frontend

``` bash
cd client
npm run build
```

A `dist/` folder will be generated for deployment.

### Backend deployment options

-   Render
-   Railway
-   AWS / DigitalOcean

------------------------------------------------------------------------

# 📘 Future Enhancements

-   User authentication (JWT)
-   Admin panel
-   Payment integration
-   Order management\
-   Search + Filtering + Sorting\
-   Image upload with Cloudinary

------------------------------------------------------------------------

# 👨‍💻 Author

-   **Your Name**

------------------------------------------------------------------------

# 🎉 Enjoy Coding!
