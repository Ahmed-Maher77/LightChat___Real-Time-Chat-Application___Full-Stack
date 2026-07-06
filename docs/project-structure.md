# Project Structure

---

## Repository Layout

```text
LightChat - Real-Time Chat Application (Full Stack)/
├── client/                       # React + Vite frontend application
│   ├── public/                   # Static assets, favicon, robots, sitemap
│   ├── src/                      # Frontend source code
│   │   ├── assets/               # Images, icons, sample data, brand assets
│   │   ├── components/          # UI building blocks for the chat experience
│   │   │   ├── common/           # Shared reusable UI elements
│   │   │   ├── subcomponents/    # Feature-specific component slices
│   │   │   └── notFoundPage_components/ # 404 page sections
│   │   ├── context/              # Global app state providers
│   │   ├── hooks/contexts/       # Custom context helpers
│   │   ├── pages/                # Route-level screens
│   │   ├── styles/               # Global and page-specific CSS
│   │   ├── utils/functions/      # Small helper functions and formatters
│   │   ├── App.jsx               # App router and provider composition
│   │   └── main.jsx              # Client entry point
│   ├── index.html                # Vite HTML shell and SEO metadata
│   └── package.json              # Client scripts and dependencies
├── server/                       # Express + Socket.IO backend
│   ├── controllers/              # Route handlers and request orchestration
│   ├── lib/                      # Database and external service setup
│   ├── middlewares/              # Auth and request protection layers
│   ├── models/                   # Mongoose schemas and collections
│   ├── routes/                   # API route definitions
│   ├── validation/               # express-validator schemas and middleware
│   ├── utils/                    # Reusable helpers such as errors and tokens
│   ├── server.js                 # HTTP server, routes, and socket setup
│   └── package.json              # Backend scripts and dependencies
├── docs/                         # Project documentation and technical notes
└── README.md                     # Main project overview
```

---

## Folder Responsibilities

- `client/src/pages` contains the high-level screens: login, home, profile, layout, and 404.
- `client/src/components` contains the reusable chat UI, sidebar, message composer, and modal pieces.
- `client/context` keeps authentication and chat state synchronized across the UI.
- `server/controllers` contains the business logic for auth, profile, message, and presence operations.
- `server/routes` maps URL paths to controllers and validation middleware.
- `server/models` defines the MongoDB data structures for users and messages.
- `docs` stores the written architecture, API, and design documentation.
