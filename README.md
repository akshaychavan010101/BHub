# Project Documentation: React JS Login and Product Management App

This is the documentation for the React JS Login and Product Management App. The application provides user authentication using JWT token and allows users to manage products through RESTful APIs. It utilizes React-Redux, Typescript, Node, Express, and MongoDB as its tech stack.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [API Endpoints](#api-endpoints)
4. [Frontend Deployment](#frontend-deployment)
5. [Backend Deployment](#backend-deployment)

## 1. Introduction

The main goal of this project is to create a web application that allows users to authenticate, add, edit, and view products. The application follows a client-server architecture, where the frontend is developed using React JS and the backend is developed using Node.js with Express and MongoDB as the database.

The frontend provides a user-friendly interface for logging in, adding/editing products, and viewing the list of products with support for search, sorting, and pagination. The backend serves as the central data repository and handles user authentication and product management via RESTful APIs.


## Demo credentials:
_email : akshay@gmail.com_
_password : 123_


## 2. Prerequisites

Before running this application, make sure you have the following prerequisites installed on your system:

- Node.js (v14 or higher)
- MongoDB (installed and running)
- 
## 3. API Endpoints

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

## 4. Frontend Deployment

The frontend of the application is deployed and can be accessed using the following link:

[https://bhub-five.vercel.app/](https://bhub-five.vercel.app/)

## 5. Backend Deployment

The backend of the application is deployed and can be accessed using the following link:

[https://bhub.onrender.com/](https://bhub.onrender.com/)

Please note that the provided links might not be valid indefinitely, as the deployments are subject to change. Make sure to check for the latest deployment links.

---
