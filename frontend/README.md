# Learn Hub Frontend

This is the frontend for the Learn Hub e-learning platform, built with React and Vite.

---

## Features

- User registration and login
- Role-based dashboards for students, teachers, and admin
- Browse, enroll, and manage courses
- Responsive UI with MDB React UI Kit and Bootstrap
- API integration with backend using Axios

---

## Tech Stack

- **Framework:** React (with Vite)
- **UI:** MDB React UI Kit, Bootstrap
- **Routing:** React Router
- **HTTP Client:** Axios

---

## Folder Structure

```
frontend/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── user/
│   │   │   ├── student/
│   │   │   └── teacher/
│   │   └── admin/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
├── public/
└── README.md
```

---

## Setup Instructions

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Open your browser at:**  
   [http://localhost:5173](http://localhost:5173)

---

## Configuration

- The frontend expects the backend API to be running at `http://localhost:5000`.
- You can change the API base URL in `src/components/common/AxiosInstance.jsx` if needed.

---

## Usage

- Register or log in as a student or teacher.
- Students can browse and enroll in courses.
- Teachers can create and manage their courses.
- Admin can manage all users and courses (if implemented).

---

## Common Issues

- **Blank Page:** Check the browser console for errors.
- **API Errors:** Make sure the backend is running and accessible at the correct URL.
- **CORS Issues:** Ensure the backend has CORS enabled.

---

## License

MIT