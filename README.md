# LightChat - Real-Time Private Messaging Platform

LightChat is a full-stack real-time private messaging platform that combines JWT-based authentication, live presence, conversation history, profile management, and media sharing in a responsive React experience.

---

🌐 **Live Preview:** [https://light-chat-real-time-chat-applicati.vercel.app](https://light-chat-real-time-chat-applicati.vercel.app/)

---

## 👀 Website Preview:

<a href="https://light-chat-real-time-chat-applicati.vercel.app" title="demo">
  <img src="https://github.com/user-attachments/assets/b2a648a8-d8db-4df2-bfa6-12bb604399c2" alt="website preview - Demo - UI Mockup" width="400">
</a>

---

## Used Technologies

- React 19 - Builds the component-driven chat interface and shared app state.
- Vite 8 - Provides fast local development and optimized production builds.
- React Router 7 - Handles client-side routing and protected navigation.
- Context API - Shares auth, chat, and contact state without prop drilling.
- Axios - Communicates with the backend API.
- Socket.IO Client - Delivers real-time presence and message updates.
- Tailwind CSS 4 - Powers responsive, utility-first styling.
- React Hot Toast - Displays lightweight feedback messages.
- Node.js - Runs the backend runtime and Socket.IO server.
- Express 5 - Exposes REST endpoints and middleware-based request handling.
- Socket.IO - Pushes online user events and live messages.
- Mongoose - Models MongoDB collections and validation rules.
- MongoDB Atlas - Stores users, messages, and profile data.
- jsonwebtoken - Signs and verifies JWT sessions.
- bcryptjs - Hashes passwords securely before storage.
- Cloudinary - Stores uploaded avatars and attachments.
- express-validator - Validates request payloads before persistence.
- cookie-parser - Reads authentication cookies on the server.
- dotenv - Loads environment variables from local config files.
- Figma - Supports UI planning and visual prototyping.

---

## Key Features

- Secure signup, login, and session checking with token-based authentication.
- Real-time online user tracking through Socket.IO.
- Conversation list with unread counters and contact search.
- Chat view for text, image, and file messages.
- Automatic seen-state updates for active conversations.
- Profile editing with name, bio, and avatar upload.
- Add-new-contact overlay with searchable dummy results.
- Responsive three-panel layout that adapts to mobile screens.
- Polished empty-state, loading, and 404 fallback screens.
- Toast notifications for success and error feedback.

Operations the app can do:

- Create an account.
- Log in and maintain an authenticated session.
- Load the current user profile.
- Update profile details and avatar.
- Load contacts and unread counts.
- Search contacts by name.
- Open a conversation and fetch its messages.
- Send text, image, and file messages.
- Mark messages as seen.
- Show who is online in real time.

---

## Best Practices and Standards I Followed

- Separation of concerns across pages, components, contexts, controllers, routes, validation, and models.
- Single-responsibility modules that keep each file focused and easy to maintain.
- Centralized API error handling with a shared AppError pattern.
- Input validation before database writes to reduce bad data and improve feedback.
- Secure authentication with hashed passwords and JWT-based sessions.
- Protected routes that reject unauthorized requests early.
- Lean queries and selective field projection to avoid unnecessary payloads.
- Real-time socket updates instead of frequent polling.
- Responsive UI behavior for desktop and mobile layouts.
- Accessible controls, semantic labels, and clear fallback states.
- Reusable React providers and hooks to keep shared state organized.
- Clean empty states, not-found guidance, and toast feedback to improve user recovery.

Detailed notes are available in [docs/best-practices.md](docs/best-practices.md).

---

## Installation Instructions for Local Setup

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd "LightChat - Real-Time Chat Application (Full Stack)"
```

### 2) Configure the backend

Create `server/.env` with the required values:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3) Configure the frontend

Create `client/.env`:

```bash
VITE_BACKEND_URL=http://localhost:5000
```

### 4) Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 5) Run the app

```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev
```

---

## Project Structure

See the detailed breakdown in [docs/project-structure.md](docs/project-structure.md).

High-level summary:

- `client/` - React application, UI components, routes, contexts, styles, and public assets.
- `server/` - Express API, Socket.IO server, controllers, models, routes, validation, and utilities.
- `docs/` - Architecture, API, UML, flow, and standards documentation.

---

## Database Structure

The database uses two main collections:

- `users` - stores authentication data, profile details, and profile image URLs.
- `messages` - stores conversation records between users, including attachments and read state.

Field-level details and relationships are documented in [docs/database-structure.md](docs/database-structure.md).

---

## API Docs

The API includes authentication, profile, message, and real-time socket operations.

Full route documentation is available in [docs/api-docs.md](docs/api-docs.md).

---

## UML Diagrams and Program Flow

- [UML Diagrams](docs/uml-diagrams.md)
- [Program Flow](docs/program-flow.md)

---

## 📬 Contact & Contribution

- 🧑‍💻 **Portfolio:** <a href="https://ahmedmaher-portfolio.vercel.app/" title="See My Portfolio">https://ahmedmaher-portfolio.vercel.app/</a>
- 🔗 **LinkedIn:** <a href="https://www.linkedin.com/in/ahmed-maher-algohary" title="Contact via LinkedIn">https://www.linkedin.com/in/ahmed-maher-algohary</a>
- 📧 **Email:** <a href="mailto:ahmedmaher.dev1@gmail.com" title="Contact via Email">ahmedmaher.dev1@gmail.com</a>

> Contributions, suggestions, and bug reports are welcome. Feel free to open issues or pull requests.

---

## ⭐ Support

If you found this project helpful or inspiring, please consider giving it a ⭐. Your support helps me grow and share more open-source projects like this!

---

## Additional Documentation

- [Overview](docs/overview.md)
- [Project Structure](docs/project-structure.md)
- [Database Structure](docs/database-structure.md)
- [API Docs](docs/api-docs.md)
- [Best Practices](docs/best-practices.md)
- [UML Diagrams](docs/uml-diagrams.md)
- [Program Flow](docs/program-flow.md)
