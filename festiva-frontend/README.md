
---

# **Frontend Project**

This project is the frontend of [your application name], built using [framework/library name, e.g., React, Vue.js, Angular]. Follow the steps below to set up, install dependencies, and run the application.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Running the Application](#running-the-application)
5. [Available Scripts](#available-scripts)
6. [Troubleshooting](#troubleshooting)

---

## **Prerequisites**
Before you begin, ensure you have the following installed on your machine:
- **Node.js** (version >= 16) and **npm** (Node Package Manager) or **Yarn**.
  - [Download Node.js](https://nodejs.org/)
- **Git** (for cloning the repository).
  - [Download Git](https://git-scm.com/)

---

## **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/siezer-5997/Festiva.git
   cd Festiva
   ```

2. **Install Dependencies**:
   Run the following command to install all the required dependencies:
   ```bash
   npm install
   ```
   Or, if you prefer Yarn:
   ```bash
   yarn install
   ```

---

## **Environment Variables**
This project uses environment variables for configuration of postgre SQL database. Create a `.env` file in the root directory and add the following (replace `<values>` with your actual values):

```plaintext
DATABASE_URL=<backend_database_url> (looks like: postgresql://username:password@localhost:5432/festiva)
JWT_SECRET_KEY=<your_key>
```

> Ensure sensitive information like API keys is not shared publicly.

---

## **Running the Application**

1. **Start the Development Server**:
   ```bash
   npm start
   ```
   Or with Yarn:
   ```bash
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Available Scripts**

Here are some useful scripts defined in the project:

1. **Start Development Server**:
   ```bash
   npm start
   ```
2. **Build for Production**:
   ```bash
   npm run build
   ```
3. **Run Tests**:
   ```bash
   npm test
   ```

---

## **Troubleshooting**

1. **Common Errors**:
   - **`npm install` fails**: Ensure you have the correct Node.js version installed.
   - **Missing `.env` file**: Double-check your `.env` file and its variables.
   - **Port in Use**: If the default port is already in use, start the app on a different port:
     ```bash
     PORT=4000 npm start
     ```

2. **Clearing Cache**:
   If you encounter unexpected issues, clear your npm/Yarn cache:
   ```bash
   npm cache clean --force
   ```
   Or:
   ```bash
   yarn cache clean
   ```

---

Feel free to reach out if you encounter any issues or have feedback!

--- 
