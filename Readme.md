# Learn Hub

A MERN stack e-learning platform where users can register as students or teachers, create and enroll in courses, and track their learning progress.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Common Issues](#common-issues)
- [License](#license)

---

## Features

- User registration and login (JWT authentication)
- Role-based dashboards for students, teachers, and admin
- Teachers can create, view, and delete courses
- Students can enroll in courses and track progress
- Admin can manage all courses
- Secure password hashing and protected routes

---

## Tech Stack

- **Frontend:** React, React Router, Axios, MDB React UI Kit, Bootstrap
- **Backend:** Node.js, Express.js, Mongoose, JWT, bcryptjs
- **Database:** MongoDB

---

## Folder Structure

```
Learn Hub/
│
├── backend/
│   ├── controllers/
│   ├── routers/
│   ├── schemas/
│   ├── config/
│   ├── middlewares/
│   ├── .env
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── user/
│   │   │   │   ├── student/
│   │   │   │   └── teacher/
│   │   │   └── admin/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd "Learn Hub"
```

### 2. Backend Setup

```sh
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:

  ```
  PORT=5000
  MONGO_URL=mongodb://localhost:27017/learnhub
  JWT_SECRET=your_jwt_secret
  ```

- Start MongoDB locally (make sure `mongod` is running).
- Start the backend server:

  ```sh
  npm start
  ```

### 3. Frontend Setup

```sh
cd ../frontend
npm install
npm run dev
```

- Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

**Backend (`backend/.env`):**

```
PORT=5000
MONGO_URL=mongodb://localhost:27017/learnhub
JWT_SECRET=your_jwt_secret
```

---

## API Endpoints

### User

- `POST /api/user/register` – Register a new user
- `POST /api/user/login` – Login and receive JWT token

### Courses

- `GET /api/user/getallcourses` – Get all courses
- `POST /api/user/postcourse` – Create a new course (teacher)
- `DELETE /api/user/deletecourse/:courseid` – Delete a course (teacher)
- `POST /api/user/enrolledcourse/:courseid` – Enroll in a course (student)
- `POST /api/user/sendcoursecontent/:courseid` – Get course content (student)
- `POST /api/user/completesection` – Mark section as complete (student)
- `POST /api/user/sendallcoursesuser` – Get all courses a user is enrolled in

---

## Usage

- **Register/Login:** Users can register as student or teacher and login.
- **Dashboard:** Shows available/enrolled courses.
- **Course Management:** Teachers can add, view, and delete courses.
- **Enrollment:** Students can enroll in courses and track progress.

---

## Common Issues

- **500 Internal Server Error:** Check `.env` variables and MongoDB connection.
- **JWT Errors:** Ensure `JWT_SECRET` is set in `.env`.
- **CORS Issues:** Backend uses `cors()` middleware.
- **Blank Page:** Check browser console for React errors.

---

## License

MIT