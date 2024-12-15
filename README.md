
---

# **Festiva - E-commerce Platform**

Festiva is a full-stack **E-commerce platform** that combines a **React.js frontend** with a **Flask-based backend**. It features user authentication, dynamic product trends, demand prediction, and more.

---

## **Table of Contents**

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Repository Structure](#repository-structure)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Running the Application](#running-the-application)
7. [Available Scripts](#available-scripts)
8. [Testing](#testing)
9. [API Documentation](#api-documentation)
10. [Troubleshooting](#troubleshooting)
11. [Contributing](#contributing)
12. [License](#license)

---

## **Features**

- **User Authentication**: Secure JWT-based authentication for signup and login.
- **Dynamic Product Trends**: Fetch and display trending products based on categories.
- **Demand Prediction**: Machine learning integration for demand prediction.
- **Product Filtering**: Filter products by categories dynamically.
- **Responsive UI**: Fully responsive frontend built with React.
- **Backend API**: Flask-based backend with PostgreSQL integration.
- **Secure Data Management**: User data and product details are stored securely.

---

## **Prerequisites**

Ensure you have the following installed on your system:

- **Node.js** (v16+) and **npm** or **Yarn**: [Install Node.js](https://nodejs.org/)
- **Python** (v3.8+): [Install Python](https://www.python.org/)
- **PostgreSQL**: [Install PostgreSQL](https://www.postgresql.org/)
- **Git**: [Install Git](https://git-scm.com/)

---

## **Repository Structure**

```plaintext
Festiva/
├── festiva-frontend/       # React.js Frontend
│   ├── public/             # Static assets
│   ├── src/                # React components & pages
│   ├── .env                # Frontend environment variables
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend instructions
│
├── festiva-backend/        # Flask Backend
│   ├── migrations/         # Database migration files
│   ├── static/             # Static files
│   ├── templates/          # HTML templates (if needed)
│   ├── .env                # Backend environment variables
│   ├── app.py              # Main Flask app
│   ├── models.py           # Database models
│   ├── requirements.txt    # Backend dependencies
│   └── README.md           # Backend instructions
│
├── .gitignore              # Ignored files and folders
├── .gitattributes          # Git LFS configurations
└── README.md               # This file
```

---

## **Installation**

### **1. Clone the Repository**

```bash
git clone https://github.com/siezer-5997/Festiva.git
cd Festiva
```

---

### **2. Frontend Installation**

Navigate to the `festiva-frontend` folder and install dependencies:

```bash
cd festiva-frontend
npm install
```

---

### **3. Backend Installation**

Navigate to the `festiva-backend` folder and set up a virtual environment:

```bash
cd ../festiva-backend
python -m venv venv         # Create a virtual environment
source venv/Scripts/activate  # Activate virtual environment (Windows)
# For Mac/Linux: source venv/bin/activate

pip install --upgrade pip   # Upgrade pip
pip install -r requirements.txt  # Install backend dependencies
```

---

## **Environment Variables**

### **Frontend (.env)**

Create a `.env` file in `festiva-frontend`:

```plaintext
REACT_APP_API_URL=http://localhost:5000
```

### **Backend (.env)**

Create a `.env` file in `festiva-backend`:

```plaintext
FLASK_APP=app.py
FLASK_ENV=development
PORT=5000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/festiva
JWT_SECRET_KEY=your_jwt_secret_key
```

Replace `<username>` and `<password>` with your PostgreSQL credentials.

---

## **Running the Application**

### **1. Start the Backend**

Start the Flask server:

```bash
cd festiva-backend
source venv/Scripts/activate  # Activate virtual environment (venv\Scripts\activate for Windows)
flask db upgrade              # Run database migrations
flask run                     # Start the Flask server
```

Backend will be available at `http://localhost:5000`.

---

### **2. Start the Frontend**

In a new terminal, start the React app:

```bash
cd festiva-frontend
npm start
```

Frontend will be available at `http://localhost:3000`.

---

## **Available Scripts**

### **Frontend**

- **Start Development Server**:
  ```bash
  npm start
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```

---

### **Backend**

- **Start Development Server**:
  ```bash
  flask run
  ```
  - or use this if flask doesn't work, I use python:
  ```bash
  python app.py
  ```
- **Database Migrations**:
  ```bash
  flask db migrate -m "migration message"
  flask db upgrade
  ```

---

## **API Documentation**

### **Base URL**: `http://localhost:5000`

| Method | Endpoint                 | Description                       |
|--------|--------------------------|-----------------------------------|
| POST   | `/signup`                | User signup                       |
| POST   | `/login`                 | User login                        |
| GET    | `/products`              | Fetch all products                |
| GET    | `/products/category/:id` | Fetch products by category        |
| GET    | `/recommendations`       | Fetch recommended products        |
| GET    | `/fetch-trends`          | fetch products trending           |
| POST   | `/predict`               | Predict product demand            |

---

## **Testing**

### **Frontend**

Run tests in `festiva-frontend`:

```bash
cd festiva-frontend
npm test
```

---

### **Backend**

Run backend tests using `unittest`:

```bash
cd festiva-backend
venv\Scripts\activate
python app.py
```

---

## **Troubleshooting**

1. **Backend Not Starting**:
   - Ensure the virtual environment is activated.
   - Check `.env` file configuration.

2. **Database Errors**:
   - Ensure PostgreSQL is running.
   - Verify the `DATABASE_URL` in the `.env` file.

3. **Port in Use**:
   - Change the ports in `.env` or `package.json`.

---

## **Slide presentation of the Project available in Google Slides with details about features of the Application**
- **Presentation**: [Google Slides](https://docs.google.com/presentation/d/12vVh56SaAUUCMAENFo-s62uDE-NZ9hYJKscGxFcVCqw/edit?usp=sharing)

## **Contributing**

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push and open a pull request:
   ```bash
   git push origin feature/your-feature
   ```

---

## **License**

This project is licensed under the **MIT License**.

---

## **Contact**

For any issues, suggestions, or feedback, please reach out:

- **Siem Zeresenay**: [siemzeresenay937@gmail.com](mailto:siemzeresenay937@gmail.com)

---

**Enjoy Festiva 🚀!**