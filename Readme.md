# React Blog App 📝

> This is my project-based learning journey. Welcome!

A modern, full-stack blogging application built to deep dive into React, State Management, and Backend-as-a-Service integration. This application allows users to create accounts, write blog posts, manage their content, and read articles from other users. 

## ✨ Features

- **User Authentication**: Secure Sign up, Login, and Logout functionality.
- **Post Management**: Full CRUD operations (Create, Read, Update, Delete) for blog posts.
- **State Management**: Centralized application state using Redux Toolkit (managing Auth state and Post state).
- **Rich Integration**: Backend services powered by Appwrite (Database, Authentication, and Storage).
- **Modern UI**: Built with React and optimized with Vite.

## 🛠️ Technology Stack

- **Frontend Main Library**: [React.js](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & React-Redux
- **Backend-as-a-Service**: [Appwrite](https://appwrite.io/)
- **Linting/Code Quality**: ESLint

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd React-Blog-App
```

### 2. Install dependencies
Navigate to the frontend folder and install the necessary packages.
```bash
cd client/Mega-Project
npm install
```

### 3. Environment Variables
Create a `.env` file in the `client/Mega-Project` directory. You will need to set up an Appwrite project and provide the appropriate details:

```env
VITE_APPWRITE_URL="your-appwrite-endpoint"
VITE_APPWRITE_PROJECT_ID="your-project-id"
VITE_APPWRITE_DATABASE_ID="your-database-id"
VITE_APPWRITE_COLLECTION_ID="your-collection-id"
VITE_APPWRITE_BUCKET_ID="your-bucket-id"
```

### 4. Run the Development Server
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/` (or the port specified by Vite).

## 📚 What I'm Learning Here
- Structuring a larger React codebase safely.
- Handling asynchronous authentication with external services securely.
- Dividing logic into Redux slices (e.g., `authSlice` and `postSlice`).
- Component-level routing and layout styling.

---
*Created as part of a comprehensive masterclass and self-learning journey.*