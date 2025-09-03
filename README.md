# 📖 QuoteApp

A simple **dockerized web application** that lets users fetch random quotes from a database or add their own.  
The project demonstrates a clean **frontend + backend** architecture with Docker-based deployment — perfect for quick demos or as a lightweight starter project.

---

## 🔥 Features

- Fetch a **random quote** from the database.  
- Add your **own quotes** with instant availability.  
- **Fully containerized** using Docker & Docker Compose.  
- Lightweight **SQLite database** for easy persistence.  
- Minimalist UI styled with **TailwindCSS**.  

---

## 🛠️ Tech Stack

- **Frontend**: HTML, JavaScript, TailwindCSS  
- **Backend**: Node.js (Express)  
- **Database**: SQLite  
- **Containerization**: Docker, Docker Compose  

---

## 📂 Repository Structure

```bash
quoteapp/
├── backend/             # Backend service (Node.js + SQLite)
│   ├── dockerfile
│   ├── index.js
│   ├── quotes.db
│   └── package.json
├── frontend/            # Frontend service (HTML + JS + TailwindCSS)
│   ├── dockerfile
│   ├── index.html
│   └── index.js
├── compose.yml          # Docker Compose config
```

---

## ⚡ Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed  
- [Docker Compose](https://docs.docker.com/compose/install/) installed  

### Run Locally

Clone the repository and start the containers:

```bash
git clone https://github.com/yourusername/quoteapp.git
cd quoteapp
sudo docker compose up -d
```

Visit the app at **<http://localhost>** 🎉

---

## 📦 Deployment

You can deploy this app on any server with Docker installed.  

Example:

```bash
scp -r quoteapp/ user@yourserver:/opt/
ssh user@yourserver
cd /opt/quoteapp
sudo docker compose up -d
```

---

## 📬 Contact

- 📧 Email: [suleko.dev@gmail.com](mailto:suleko.dev@gmail.com)  
- 💬 Telegram: [@sevilyakk](https://t.me/sevilyakk)  
- 👨‍💻 GitHub: [Sevilya1207](https://github.com/Sevilya1207)  

## 🌐 Portfolio

👉 **[https://me.zeroserv.top](https://me.zeroserv.top)** (custom domain)  
🔗 Mirror: [https://sevilya1207.github.io](https://sevilya1207.github.io)

---
