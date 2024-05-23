
# Express TypeScript MongoDB Application

## Objective

This project aims to develop an Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for effective data management. It includes functionality for product and order management in an e-commerce system, along with validation using Joi/Zod.

### Functionality
The application provides endpoints for managing products and orders in an e-commerce system:

Product Management: Allows creating, retrieving, updating, and deleting products. Supports searching for products based on a search term.
Order Management: Supports creating new orders and retrieving existing orders. Updates inventory quantity and in-stock status based on ordered quantity.

### Technologies Used
- Express.js: Web application framework for Node.js.
- TypeScript: Superset of JavaScript with static typing.
- MongoDB: NoSQL database for storing product and order data.
- Mongoose: MongoDB object modeling for Node.js.
- Joi: Library for validation.

## Running the Application Locally

### Requirments

Ensure you have the following installed on your system:

- **Node.js**: You can download and install it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Install MongoDB locally or set up a MongoDB database on a cloud service like MongoDB Atlas.

### Clone the Repository

Clone the project repository to your local machine:

```bash
git clone <repository-url>

```
Replace <repository-url> with the URL of the repository.

### Navigate to the Project Directory
Open a terminal/command prompt and navigate to the project directory:

```bash
cd express-ts-mongodb

```
### Install Dependencies
Install the project dependencies using npm:
```bash
npm install
```
### Set Environment Variables
Create a .env file in the root directory of the project. Add the MongoDB connection URI as an environment variable:
```bash
MONGODB_URI=mongodb://localhost:27017/mydatabase
```
Replace `mongodb://localhost:27017/mydatabase` with your actual MongoDB connection URI.

### Start the Server
Run the following command to start the server:

```bash
npm start
```
### Access the API
Once the server is running, you can access the API endpoints using tools like Postman or by making HTTP requests from your frontend application.

The server will start on port 5000 by default.
You can access the API at http://localhost:5000.