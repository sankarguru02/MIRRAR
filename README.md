# MIRRAR

Product Management System API with Product and Variant CRUD Operations (Node.js + Postman)
## Overview

This API provides Create, Read, Update, and Delete (CRUD) operations for both products and their associated variants in a Node.js application. It's designed for testing and integration with Postman.

## Technologies Used

Node.js
Express.js
MongoDB (or your preferred database)
Mongoose (for interacting with MongoDB)
Postman (for testing API endpoints)
## Setup Instructions

Prerequisites:

Node.js and npm installed
MongoDB instance running (or equivalent for your database)
Postman installed
Clone the repository (if available):

Bash
git clone https://github.com/<your-username>/product-variant-api.git
Use code with caution. Learn more
Project Setup (manual setup):

Create a new Node.js project directory.
Initialize npm dependencies: npm init -y.
Install required packages: npm install express mongoose.
Database Configuration:

Configure Mongoose connection to your MongoDB instance.
Define schemas for both Product and Variant models.
API Development:

Implement endpoints for CRUD operations on Products and Variants:
/products: GET all, POST create, PUT update, DELETE specific product.
/products/:id/variants: GET all variants for a product, POST create new variant, PUT update variant, DELETE specific variant.
Handle data validation, error handling, and appropriate responses.
Testing with Postman:

Create a Postman collection with requests for each endpoint.
Define request bodies and headers following the API specifications.
Test and verify responses for successful and error scenarios.
