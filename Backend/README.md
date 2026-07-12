# 🚀 SkillPath AI Backend

Backend API for **SkillPath AI**, an AI-powered personalized learning platform.

## ✨ Features

- User Authentication (JWT)
- User Profile Management
- AI Chat Integration (Groq API)
- Personalized Learning Roadmaps
- Progress Tracking
- Project Management
- Resource Management
- Admin APIs
- Secure Authentication
- MongoDB Database

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Groq API
- Cloudinary
- Express Validator
- Helmet
- Morgan

---

## 📁 Folder Structure

```
Backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── data/
├── .env.example
├── package.json
└── server.js
```

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file using `.env.example`.

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
CLIENT_URL=http://localhost:5173
```

---

## 📡 API

```
POST   /api/auth
GET    /api/users
GET    /api/roadmaps
POST   /api/chat
GET    /api/projects
GET    /api/resources
```

---

## 👨‍💻 Developer

**Ayush Tiwari**