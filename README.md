# MIRRAR

Product Management System API with Product and Variant CRUD Operations (Node.js + Postman)
## Overview

This API provides Create, Read, Update, and Delete (CRUD) operations for both products and their associated variants in a Node.js application. It's designed for testing and integration with Postman.

## Technologies Used

Node.js
Express.js
MongoDB Atlas (or your preferred database)
Mongoose (for interacting with MongoDB)
Postman (for testing API endpoints)
## Setup Instructions

Prerequisites:

Node.js and npm installed
MongoDB instance running in local or cloud(mongodb atlas)
Postman installed

Project Setup (manual setup):

Create a new Node.js project directory.
Initialize npm dependencies: npm insatll
This will install all the dependencies


Database Configuration:

Configure Mongoose connection to your MongoDB instance. Chnage to your connection string in the server.js file.
Defined schemas for both Product and Variant models.

## API Development:

Implement endpoints for CRUD operations on Products and Variants:
/product GET all products
/create POST method to create product
/edit?name="productName" PATCH update the existing document
/delete DELETE specific product

/product?name="productname" GET the details of a specific product by product name
/variant?name="variantname" GET the details of a specific product by variant name


## Testing with Postman:

The postman collection is in file product restAPI product.postman_collection
Create a Postman collection with requests for each endpoint.
Define request bodies and headers following the API specifications.
Test and verify responses for successful and error scenarios.
