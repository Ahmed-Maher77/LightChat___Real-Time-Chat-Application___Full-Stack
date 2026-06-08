# LightChat - Real-Time Chat Application (Full Stack)

LightChat is a full-stack real-time chat application focused on fast one-to-one messaging, a responsive user experience, and a modern, maintainable architecture.

---

🌐 **Live Preview:** [https://light-chat-real-time-chat-applicati.vercel.app](https://light-chat-real-time-chat-applicati.vercel.app/)

---

## Overview

This repository is organized as a full-stack project with separate frontend and backend folders:

- `client/`: React + Vite chat interface (fully implemented)
- `server/`: Backend workspace (scaffolded, ready for API/server setup)

## Current Status

- **Frontend client** is fully implemented with:
  - Real-time chat UI with animated transitions
  - Sidebar with active chats, search, and user status indicators
  - Chat container with message display and sender box (attachments, auto-resize textarea)
  - Right sidebar for user info with online/offline/typing status
  - Add new contact modal with search
  - Profile page and login page routes
  - 404 page with animated glitch effects
  - Responsive design for desktop and mobile
  - Tailwind CSS 4 with custom animations
  - Context-based state management for modals
- **Backend** folder exists with `.gitignore` only, ready for implementation

## Tech Stack (Client)

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4 (via Vite plugin)
- ESLint 9 with React hooks and refresh plugins

## Project Structure

```
LightChat - Real-Time Chat Application (Full Stack)/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Static assets & dummy data
│   │   ├── components/          # Main UI components
│   │   │   ├── common/          # Shared components (Overlay, UserStatusIndicator)
│   │   │   ├── subcomponents/   # Feature-specific sub-components
│   │   │   │   ├── ActiveChats/
│   │   │   │   ├── AddNewContactScreen/
│   │   │   │   ├── ChatContainer/
│   │   │   │   │   ├── ChatContainerHeader/
│   │   │   │   │   └── MessageSenderBox/
│   │   │   │   ├── RightSidebar/
│   │   │   │   └── Sidebar/
│   │   │   └── notFoundPage_components/
│   │   ├── hooks/
│   │   │   └── contexts/        # React Context providers (AddNewContact)
│   │   ├── pages/               # Route pages (Home, Login, Profile, NotFound)
│   │   ├── styles/              # CSS (animations, components, pages)
│   │   ├── utils/
│   │   │   └── functions/       # Helper functions (formatters, avatar generator)
│   │   ├── App.jsx              # App entry with routing
│   │   ├── main.jsx             # React root render
│   │   └── index.css            # Global styles & Tailwind imports
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
└── server/
    └── .gitignore
```

## Key Features Implemented

### Chat Interface (`HomePage`)
- Three-panel layout: Sidebar (chats) | ChatContainer (messages) | RightSidebar (user info)
- Animated entrance/exit transitions for chat container and right sidebar
- Responsive: collapses to single-column on mobile with slide-over panels

### Sidebar (`Sidebar` + `ActiveChats`)
- App logo with dropdown menu (Edit Profile, Add Contact, Logout)
- Search bar with clear functionality
- Active chats list with:
  - User avatar (fallback to generated initials avatar)
  - Online/offline status indicator with tooltip
  - Last message preview with typing indicator
  - Timestamp formatting (today → time, yesterday → "yesterday", older → date)
  - Unread notification badge

### Chat Container (`ChatContainer`)
- Header with back button, user info, status (online/typing/last seen), help button
- Messages area (placeholder `MessagesContainer`)
- Message sender box with:
  - Auto-resizing textarea (single-line → multi-line, max height)
  - Attachment toggle with dropdown menu
  - Send button (disabled when empty)
  - Enter to send, Shift+Enter for newline

### Right Sidebar (`RightSidebar` + `UserInfo`)
- User avatar, name, bio
- Online/offline status indicator
- Smooth slide-in/out animation

### Add New Contact (`AddNewContactScreen`)
- Modal overlay with search input (dashed border style)
- Search results list with dummy data
- Integrated via React Context (`AddNewContactProvider`)

### Not Found Page (`NotFoundPage`)
- Animated background with floating elements
- Glitch text effect on "404"
- Scanline and blink animations
- Navigation actions (Go Back, Go Home)

### Utility Functions
- `timeFormatter` — smart timestamp display
- `lastConnectionFormatter` — "last seen at..." strings
- `generateAlternativeImage` — SVG avatar from initials with consistent color hashing

## Getting Started

### 1. Frontend (Client)

```bash
cd client
npm install
npm run dev
```

### 2. Backend (Server)

The backend workspace is present in `server/` and can be initialized with your preferred stack (Node.js/Express, NestJS, etc.).

## Scripts (Client)

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Goals

- Real-time private messaging (WebSocket integration pending)
- Clean responsive UI for desktop and mobile
- Scalable component and feature architecture
- Clear separation of frontend and backend responsibilities