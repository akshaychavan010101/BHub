# BHub

# Project Documentation: React JS Login and Product Management App

This is the documentation for the React JS Login and Product Management App. The application provides user authentication using JWT token and allows users to manage products through RESTful APIs. It utilizes React-Redux, Typescript, Node, Express, and MongoDB as its tech stack.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
5. [Frontend Deployment](#frontend-deployment)
6. [Backend Deployment](#backend-deployment)

## 1. Introduction

The main goal of this project is to create a web application that allows users to authenticate, add, edit, and view products. The application follows a client-server architecture, where the frontend is developed using React JS and the backend is developed using Node.js with Express and MongoDB as the database.

The frontend provides a user-friendly interface for logging in, adding/editing products, and viewing the list of products with support for search, sorting, and pagination. The backend serves as the central data repository and handles user authentication and product management via RESTful APIs.

## 2. Prerequisites

Before running this application, make sure you have the following prerequisites installed on your system:

- Node.js (v14 or higher)
- MongoDB (installed and running)

## 3. Installation

Follow the steps below to set up the project:

1. Clone the repository from GitHub:

```
git clone <repository-url>
cd reactjs-login-product-app
```

2. Install the frontend and backend dependencies:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Configure Environment Variables:

   - Create a `.env` file in the `backend` directory and configure the following variables:

     ```plaintext
     # MongoDB Connection String
     MONGODB_URI=mongodb://localhost:27017/mydatabase
     
     # JWT Secret Key
     JWT_SECRET=mysecretkey
     
     # JWT Token Expiry (in seconds)
     JWT_EXPIRATION=3600
     ```

   - Modify the `MONGODB_URI` with your MongoDB connection string and set the `JWT_SECRET` as a secure secret key for JWT token generation.

## 4. API Endpoints

The application provides the following API endpoints:

1. User Login Endpoint:

   - `POST /users/login`

     This endpoint handles user login and authentication. It requires a JSON payload containing the user's email and password. It returns a JWT token upon successful authentication.

2. Product Management Endpoints:

   - `GET /products/get-all`

     This endpoint retrieves all products available in the database.

   - `GET /products/paginate`

     This endpoint supports pagination for the product list. It requires query parameters: `page` (page number) and `limit` (number of products per page).

   - `GET /products/search/sort`

     This endpoint supports searching and sorting of products based on different criteria. It requires query parameters: `search` (search query), `sort` (sort order), and `sortBy` (sort field).

   - `POST /products/add`

     This endpoint allows users to add new products to the database. It requires a JSON payload containing product details (image, name, price, description, and quantity).

   - `PATCH /products/edit`

     This endpoint allows users to edit existing product details. It requires a JSON payload containing the updated product details.

## 5. Frontend Deployment

The frontend of the application is deployed and can be accessed using the following link:

[https://bhub-five.vercel.app/](https://bhub-five.vercel.app/)

## 6. Backend Deployment

The backend of the application is deployed and can be accessed using the following link:

[https://bhub.onrender.com/](https://bhub.onrender.com/)

Please note that the provided links might not be valid indefinitely, as the deployments are subject to change. Make sure to check for the latest deployment links.

---
Congratulations! You now have the documentation for the React JS Login and Product Management App. Have fun exploring and using the application! If you encounter any issues or have any questions, feel free to refer to this documentation or contact the project maintainers. Happy coding!
