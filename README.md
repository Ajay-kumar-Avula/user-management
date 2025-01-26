# User Management Project
This project is a simple user management system built with React. It allows you to fetch, display, add, update, and delete user data using an API.

## Project setup & Instructions

   # Getting Started with Create React App

        npx create-react-app user-management
        cd usermanagement
 
   # Install Dependencies & Run the project
        npm install
        npm start

This will start the development server and open the application in your default web browser.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### Project structure 

user-management/
  --public
  --src/
    --components/
      --AddEditUser/
        -index.js
      --Home/
        -index.js
      --UserForm/
        -index.js
      --UserList/
        -index.js
      --api.js/
     --app.js/
   -.gitignore
   --package.json
   --README.md

# Components
  App.js: The main wrapper component that holds all child components. Manages the state for the user list and handles adding, updating, and deleting users.

  UserForm.js: Handles adding and editing user details. Includes fields for ID, First Name, Last Name, Email, and Department.

 UserList.js: Displays the list of users fetched from the API in a table format. Provides options to delete users.

 UserDisplay.js: Renders the details of the added or updated user.

 Home.js: The main page that displays the UserList component.

 AddEditUser.js: The page for adding or editing user details using the UserForm component.

 api/index.js: Contains the functions for making API requests to fetch, add, update, and delete users.    

# Challenges Faced
  Handling Asynchronous Operations: Managing asynchronous API calls and ensuring the state is updated correctly was a key challenge.

  Data Validation: Ensuring that the user inputs are validated correctly before making API requests.

  Error Handling: Implementing robust error handling to manage API errors and provide feedback to the user.

## Conclusion
  This project provides a simple yet functional user-management system using React. It can be extended and improved in many ways to enhance its capabilities and usability.

## Deployment 
   This project is deployed using Netlify directly from the GitHub repository.

