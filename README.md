# 📝 Notes API (Docker + Node.js + MongoDB)

This is a simple REST API for managing notes, built with Node.js and Express, and using MongoDB for persistent storage — all running in Docker.

---

## 📦 Features

- Add notes (POST /notes)
- View all notes (GET /notes)
- Stores data in MongoDB (no data loss after restart)
- Easily run everything using Docker Compose

---

## 🛠 Tech Stack

- Node.js (Express)
- MongoDB (via Docker container)
- Docker & Docker Compose

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Docker Desktop installed
- Git (optional, for version control)

---

### 🧪 Run the API

1. Clone this repo:

```bash
git clone https://github.com/YOUR_USERNAME/notes-api-docker.git
cd notes-api-docker

## START EVERTHING AT - 
docker-compose up --build

## ACCESS THE API AT - 
http://localhost:3000/notes

API ENDPOINTS
- GET /notes
  * Returns all saved notes
- POST /notes
  * Add a note. Send JSON like:

{
  "title": "Sample Note",
  "content": "This is a note stored in MongoDB"
}

## STOPPING THE ENDPOINTS
- To stop all containers:
  * docker-compose down

TESTS
You can use these tools for testing the Endpoints: 
** Postman **
** curl from Command Line **

