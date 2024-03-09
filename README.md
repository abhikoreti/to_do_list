# To-Do List Application

This is a simple To-Do List application built using React for the frontend and Node.js with Express.js for the backend. The application allows users to add, edit, delete, and mark tasks as complete. Tasks persist in a MongoDB database, ensuring data persistence even after server restarts.

## Features

- View tasks
- Add new tasks
- Mark tasks as complete
- Edit existing tasks
- Delete tasks

## Technologies Used

- Frontend:
  - React
  - Axios for HTTP requests

- Backend:
  - Node.js
  - Express.js
  - MongoDB with Mongoose

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/to-do-list.git
```

2. Navigate to the project directory:

```
cd to-do-list
```

3. Install dependencies for both frontend and backend:

```
cd frontend
npm install

cd ../backend
npm install
```

4. Set up MongoDB:
   - Install MongoDB if you haven't already.
   - Create a MongoDB database named `todo_list_db`.

5. Start the backend server:

```
cd backend
npm start
```

6. Start the frontend development server:

```
cd frontend
npm start
```

7. Open your web browser and go to `http://localhost:3000` to view the application.

## API Endpoints

- GET `/api/tasks`: Get all tasks
- POST `/api/tasks`: Create a new task
- PUT `/api/tasks/:id`: Update a task (mark as complete)
- DELETE `/api/tasks/:id`: Delete a task
