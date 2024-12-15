
---

# **Festiva**

Festiva is a full-stack application for [your application’s purpose, e.g., event management, e-commerce, etc.]. This repository contains both the **frontend** and **backend** components. Follow the steps below to set up, install dependencies, configure, and run the application.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Repository Structure](#repository-structure)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [Available Scripts](#available-scripts)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

---

## **Prerequisites**
Before setting up the project, ensure you have the following installed on your machine:
- **Node.js** (version >= 16) and **npm** (Node Package Manager) or **Yarn**:
  - [Download Node.js](https://nodejs.org/)
- **Git** (for cloning the repository):
  - [Download Git](https://git-scm.com/)
- **PostgreSQL** (for the backend database):
  - [Install PostgreSQL](https://www.postgresql.org/download/)

---

## **Repository Structure**
```plaintext
.
├── backend/          # Backend application (Express.js, PostgreSQL)
├── frontend/         # Frontend application (React or your chosen framework)
├── .gitignore        # Ignored files
├── README.md         # This file
└── package.json      # Workspace package (optional, for monorepos)
```

---

## **Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/siezer-5997/Festiva.git
cd Festiva
```

### **2. Frontend Setup**
```bash
cd frontend
npm install
```

### **3. Backend Setup**
```bash
cd ../backend
npm install
```

---

## **Environment Variables**

### **Frontend**
In the `frontend` directory, create a `.env` file with the following:
```plaintext
REACT_APP_API_URL=http://localhost:5000/api
```

### **Backend**
In the `backend` directory, create a `.env` file with the following (replace `<values>` with actual values):
```plaintext
PORT=5000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/festiva
JWT_SECRET_KEY=<your_secret_key>
```

---

## **Running the Application**

### **1. Start the Backend**
```bash
cd backend
npm run dev
```
This will start the backend server on `http://localhost:5000`.

### **2. Start the Frontend**
In a new terminal:
```bash
cd frontend
npm start
```
This will start the frontend development server on `http://localhost:3000`.

---

## **Available Scripts**

### **Frontend Scripts**
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

### **Backend Scripts**
1. **Start Development Server**:
   ```bash
   npm run dev
   ```
2. **Run Tests**:
   ```bash
   npm test
   ```
3. **Linting**:
   ```bash
   npm run lint
   ```

---

## **Testing**

### **Frontend**
Run tests in the `frontend` directory:
```bash
cd frontend
npm test
```

### **Backend**
Run tests in the `backend` directory:
```bash
cd backend
npm test
```

---

## **Troubleshooting**

1. **Frontend Issues**:
   - **Missing `.env` file**: Ensure your `.env` file is correctly configured.
   - **Port in Use**: Change the port in `package.json`:
     ```json
     "start": "PORT=4000 react-scripts start"
     ```

2. **Backend Issues**:
   - **Database Connection Fails**:
     - Ensure PostgreSQL is running.
     - Double-check your `DATABASE_URL` in the `.env` file.

3. **General**:
   - Clear caches:
     ```bash
     npm cache clean --force
     ```
   - Reinstall dependencies:
     ```bash
     rm -rf node_modules
     npm install
     ```

---

## **API Endpoints**

### **Base URL**
```plaintext
http://localhost:5000/api
```

### **Available Endpoints**
| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| GET    | `/events`        | Fetch all events               |
| POST   | `/events`        | Create a new event             |
| GET    | `/events/:id`    | Fetch a specific event by ID   |
| PUT    | `/events/:id`    | Update an event by ID          |
| DELETE | `/events/:id`    | Delete an event by ID          |

---

## **Contributing**
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a pull request.

---

Feel free to reach out for any assistance or feedback! 🚀

--- 

