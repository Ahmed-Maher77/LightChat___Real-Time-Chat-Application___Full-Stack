# Best Practices and Standards

---

## Architecture and Code Organization

- Separation of concerns is applied through pages, reusable components, contexts, controllers, routes, validation schemas, and models.
- The backend uses middleware for authentication, validation, and error handling instead of mixing those concerns inside route handlers.
- State is shared through focused React context providers rather than deeply nested prop chains.
- The structure follows single-responsibility thinking: each component or module owns one visible concern.

---

## Security

- Passwords are hashed with bcrypt before being stored.
- Authentication uses JWTs instead of plain session values.
- Tokens are delivered through an `httpOnly` cookie and protected-route middleware.
- Validation schemas reject malformed payloads before database writes.
- User lookup and message queries use authenticated user context to avoid exposing unrelated data.

---

## Performance

- MongoDB queries use lean reads where appropriate to reduce Mongoose overhead.
- Only the fields needed by the UI are selected in many queries.
- Socket.IO is used for incremental updates instead of polling.
- Messages are fetched per selected conversation, which avoids overfetching the full dataset.
- The UI uses local state and context to update only the affected pieces of the interface.

---

## UX and Accessibility

- Loading, empty, and 404 states guide the user when data is unavailable or a route is wrong.
- Validation messages are explicit so users can recover from bad input quickly.
- Forms use labels, placeholders, and clear button states.
- Avatar and icon assets include alt text.
- The layout is responsive for desktop and mobile use.
- Toast notifications provide immediate feedback for success and failure states.

---

## Reliability

- Centralized error handling keeps API failures consistent.
- Protected routes fail with clear unauthorized responses.
- Socket listeners are unsubscribed to avoid duplicate events.
- The app keeps the current session in local storage and rechecks authentication on load.

---

## Standards and Maintainability

- Functional React components keep rendering logic simple and reusable.
- Validation logic lives outside business logic.
- Route controllers return structured JSON responses.
- The codebase stays modular so new features can be added with minimal coupling.
- Cloudinary handles media storage externally, keeping the app server lightweight.
