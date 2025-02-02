# Kanban Board

## 📜 License
This project is protected under the MIT license.

## 📌 Description
This application allows users to create and manage a **Kanban board** with secure authentication. The board consists of three columns: **To Do, In Process, and Done**. Users can securely log in and interact with tickets created by other users.

## 📑 Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [Contribute](#contribute)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## 🛠️ Installation
To set up the project, clone the repository and install dependencies:

```sh
git clone <your-repo-url>
cd kanban-board
npm i && npm run seed && npm run build
```

## 🚀 Usage

## 📷 Screenshot
_![Screenshot 2025-02-01 220635](https://github.com/user-attachments/assets/b23dc351-7c77-4ec4-bd35-1a9530a7ddc9)
._
This application requires authentication. Currently, users can only be added manually by modifying the `user-seeds.ts` file and running:

```sh
npm run seed
```

To start the application, use:
```sh
npm start
```
Log in using one of the credentials from `user-seeds.ts`.

## ✨ Features
- **Secure Login** – Only authorized users can access the Kanban board.
- **Manage Tickets** – Users can add, edit, and delete tickets.
- **Authentication with JWT** – Ensures secure access control.
- **Session Expiry** – Automatic logout after inactivity.

## 🔧 Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** PostgreSQL
- **Deployment:** Render

## 🏆 Credits
### Packages Used:
- bcrypt
- dotenv
- express
- jsonwebtoken
- pg
- sequelize
- typescript
- jwt-decode
- react
- react-dom
- react-router-dom

### Dev Dependencies:
- Concurrently
- Nodemon
- Wait-on
- Vite
- ESLint

## 🤝 Contribute
Contributions are welcome! Fork the repository and submit a pull request for improvements.

## 🧪 Tests
To run tests, use:
```sh
npm test
```

## 📬 Contact
For questions or suggestions, reach out via GitHub.

Happy coding! 🚀


