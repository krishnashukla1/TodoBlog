const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
==========================================REGISTER===========================================
POST----http://localhost:5000/api/auth/register
{
  "email": "testuser@example.com",
  "password": "test123"
}

{
    "msg": "User registered successfully. Please log in."
}


==========================================LOGIN===========================================
post--- http://localhost:5000/api/auth/login

{
  "email": "testuser1@example.com",
  "password": "test1234"
}

{
    "msg": "User log in successfully. Please add data",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwMjIyYzlhNjk4OTAzOTEwZjdiNzRjIn0sImlhdCI6MTc0NDk3MDcwMSwiZXhwIjoxNzQ1NTc1NTAxfQ.aom61PtS_xbY5ASJlFjIgu4Xk03EwSh0qF-UK05LSaU"
}

==========================================CREATE POST===========================================
POST---http://localhost:5000/api/tasks

IN REQUEST BODY SECTION

{
  "title": "Test task",
  "description": "Testing token",
  "datetime": "2025-04-19T10:00:00Z",
  "deadline": "2025-04-20T10:00:00Z",
  "priority": "High"
}


IN HEADER SECTION
Authorization       Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwMjIyYzlhNjk4OTAzOTEwZjdiNzRjIn0sImlhdCI6MTc0NDk3MDcwMSwiZXhwIjoxNzQ1NTc1NTAxfQ.aom61PtS_xbY5ASJlFjIgu4Xk03EwSh0qF-UK05LSaU

IN RESPONSE BODY SECTION

{
    "userId": "680222c9a698903910f7b74c",
    "title": "Test task",
    "description": "Testing token",
    "deadline": "2025-04-20T10:00:00.000Z",
    "priority": "High",
    "isCompleted": false,
    "_id": "680223e021f334fd5fa8443f",
    "__v": 0
}
==========================================GET POST===========================================
GET--- http://localhost:5000/api/tasks

IN HEADER SECTION
Authorization       Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwMjIyYzlhNjk4OTAzOTEwZjdiNzRjIn0sImlhdCI6MTc0NDk3MDcwMSwiZXhwIjoxNzQ1NTc1NTAxfQ.aom61PtS_xbY5ASJlFjIgu4Xk03EwSh0qF-UK05LSaU

IN RESPONSE BODY SECTION

[
    {
        "_id": "680223e021f334fd5fa8443f",
        "userId": "680222c9a698903910f7b74c",
        "title": "Test task",
        "description": "Testing token",
        "deadline": "2025-04-20T10:00:00.000Z",
        "priority": "High",
        "isCompleted": false,
        "__v": 0
    }
]

==========================================UPDATE POST===========================================
PUT----http://localhost:5000/api/tasks/680223e021f334fd5fa8443f

IN REQUEST BODY SECTION

{
  "title": "Updated Task Title",
  "priority": "Medium",
  "isCompleted": true
}

IN HEADER SECTION
Authorization       Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwMjIyYzlhNjk4OTAzOTEwZjdiNzRjIn0sImlhdCI6MTc0NDk3MDcwMSwiZXhwIjoxNzQ1NTc1NTAxfQ.aom61PtS_xbY5ASJlFjIgu4Xk03EwSh0qF-UK05LSaU

IN RESPONSE BODY SECTION

{
    "_id": "680223e021f334fd5fa8443f",
    "userId": "680222c9a698903910f7b74c",
    "title": "Updated Task Title",
    "description": "Testing token",
    "deadline": "2025-04-20T10:00:00.000Z",
    "priority": "Medium",
    "isCompleted": true,
    "__v": 0
}
*/