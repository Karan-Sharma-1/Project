# Task Manager Full-Stack Application

This project is a simple Task Manager application with basic functionalities like adding tasks, editing tasks, marking tasks as completed, and deleting tasks. The project is divided into two parts: the frontend, built with React, and the backend, built with Express and MongoDB.

## Frontend (React)
Setup -

In bash/terminal -

run create-react-app frontend

Navigate to the Frontend Directory:

bash/terminal

cd frontend

Install Dependencies:

bash/terminal

    npm install

Running the Frontend

To start the React development server:

bash/terminal

npm start

The frontend will be accessible at http://localhost:3000/ in your browser.

## Backend (Express and MongoDB)
Setup

Make backend directory.

    Navigate to the Backend Directory:

    bash/terminal

cd backend

Install Dependencies:

bash/terminal

    npm install mongoose express

    Install MongoDB:

    Ensure you have MongoDB installed and running on your machine. If not, you can download and install it from https://www.mongodb.com/try/download/community.
        Create a new MongoDB database named (your-preferred-name) in my case its (db.js).

Configure Environment Variables

Create a .env file in the task-manager-backend directory and add the following:

.env

MONGODB_URI=mongodb://localhost:3001/db.js
PORT=3001

Running the Backend

To start the Express server:

bash/terminal

node server.js

The backend will be running on http://localhost:3001/.
Connecting Frontend and Backend

By default, the frontend is configured to make API requests to http://localhost:3001/. If you need to change the backend URL, update the Axios requests in src/App.js.
Application Usage

    Add a Task:
        Enter a task in the "New Task" input field.
        Click the "Add Task" button.

    Edit a Task:
        Click the "Edit" button next to the task.
        Enter the updated task in the prompt.
        Click "OK" to update the task.

    Mark a Task as Completed:
        Click the "Complete" button next to the task.

    Delete a Task:
        Click the "Delete" button next to the task.

Additional Notes

    The MongoDB connection string is set in the .env file (MONGODB_URI). Ensure it matches your MongoDB configuration.
    The backend server logs incoming requests with a simple middleware. You can modify or extend this middleware as needed.

## Update CSS file -
In css file you can make changes according to your preference to change the look of your full stack application.


** This documentation provides detailed instructions for setting up, configuring, and running the project locally. **
