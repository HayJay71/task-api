# 🧠 Task API – Node.js + Express + MongoDB

This is a simple RESTful Task API built with **Node.js**, **Express**, and **MongoDB Atlas**.  
It supports basic CRUD operations and follows a clean MVC folder structure.

---

## 🚀 Features

- Create, Read, Update, and Delete tasks
- MongoDB Atlas integration
- Modular codebase using **MVC architecture**
- Built for deployment on **AWS EC2**
- PM2 process manager for production stability

---

## 📁 Folder Structure

```
my-backend-api/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
│   └── Visitor.js
├── routes/
│   └── taskRoutes.js
│   └── visitors.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Setup & Run

### 1. Clone the repo

```bash
git clone https://github.com/HayJay71/my-backend-api.git
cd my-backend-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your environment variables

Create a `.env` file:

```
MONGO_URI=your-mongodb-atlas-uri
PORT=3000
```

### 4. Start the server

```bash
node server.js
```

OR in production:

```bash
pm2 start server.js --name task-api
```

---

## 📬 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/tasks`         | Get all tasks       |
| POST   | `/api/tasks`         | Create a task       |
| PUT    | `/api/tasks/:id`     | Update a task       |
| DELETE | `/api/tasks/:id`     | Delete a task       |

---

## 🌍 Live Demo

_Deployed on AWS EC2_  
`http://your-ec2-ip:3000/api/tasks`

---

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- PM2 (for process management)
- AWS EC2 (for deployment)

---

## 🤝 Author

**Joshua Ajayi**  
[@HayJay71](https://github.com/HayJay71)

---

## 📄 License

MIT – feel free to fork and use!
