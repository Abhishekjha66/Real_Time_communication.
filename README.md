# Real-Time Chat Application

A real-time communication application built with **Node.js, Express.js, and Socket.IO**. This project demonstrates event-driven communication between connected clients using WebSockets.

## Features

- **Real-Time Messaging:** Broadcast chat messages to all connected clients.
- **User Join Notifications:** Notify other connected users when someone joins.
- **User Leave Notifications:** Notify users when someone disconnects.
- **Typing Indicators:** Broadcast typing events to other connected clients.
- **Connection Handling:** Handle client connections and disconnections using Socket.IO.

## Tech Stack

- **Runtime:** Node.js
- **Backend:** Express.js
- **Real-Time Communication:** Socket.IO
- **Core Modules:** HTTP, Path

## Project Structure

```text
Real_Time_communication/
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── Public/                 # Client-side files (required)
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Abhishekjha66/Real_Time_communication.git
```

### 2. Navigate to the project directory

```bash
cd Real_Time_communication
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

## Socket.IO Events

| Event | Purpose |
|---|---|
| `connection` | Handles a new client connection |
| `new user` | Registers a connected user's name |
| `user joined` | Notifies other users when someone joins |
| `chat message` | Broadcasts chat messages |
| `typing` | Broadcasts typing activity |
| `user left` | Notifies other users when someone disconnects |
| `disconnect` | Handles client disconnection |

## How It Works

1. The Express server serves static client files from the `Public` directory.
2. Socket.IO establishes real-time connections between clients and the server.
3. When a user joins, the server broadcasts a notification.
4. Chat messages are broadcast to all connected clients.
5. Typing and disconnection events are shared with other users.

## Internship Project

Developed as part of my **Web Development Internship at CodeAlpha**.

## Author

**Abhishek Jha**

- GitHub: [AbhishekJha66](https://github.com/Abhishekjha66)
- Portfolio: [abhishekjha66.github.io/PORTFOLIO](https://abhishekjha66.github.io/PORTFOLIO/)
- LinkedIn: [Abhishek Jha](https://www.linkedin.com/in/abhishek-jha-tech66/)
