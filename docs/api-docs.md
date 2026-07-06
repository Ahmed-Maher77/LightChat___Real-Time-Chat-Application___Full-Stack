# API Docs

---

## Base URL

- Local development: `http://localhost:5000`
- Frontend base URL is configured through `VITE_BACKEND_URL`.

---

## Authentication

The backend accepts authentication through:

- `httpOnly` cookie: `lightchat_access_token`
- `Authorization: Bearer <token>` header
- `token` header fallback used by the client context

Most protected endpoints require a valid JWT session.

---

## Routes

### Health

#### `GET /healthz`

Returns server status.

Response:

```json
{
    "success": true,
    "message": "Server is healthy",
    "status": "OK"
}
```

### Auth

#### `POST /api/auth/signup`

Creates a new account.

Body:

```json
{
    "fullName": "Ahmed Maher",
    "email": "ahmed@example.com",
    "password": "secret123",
    "bio": "Hi, I use LightChat."
}
```

#### `POST /api/auth/login`

Authenticates an existing user.

#### `GET /api/auth/checkAuth`

Returns the current authenticated user.

#### `PUT /api/auth/update-profile`

Updates the current user's profile.

Body fields can include:

- `fullName`
- `bio`
- `profilePic`

#### `GET /api/auth/profile`

Returns the current user's profile data.

---

### Messages

#### `GET /api/messages/users`

Returns all users except the authenticated user, plus unread message counters.

#### `GET /api/messages/:userId`

Returns the conversation history between the authenticated user and the selected user.

#### `PATCH /api/messages/mark/:messageId`

Marks a message as seen.

#### `POST /api/messages/send/:id`

Sends a new message to the user whose id is provided in the route.

Body can include:

- `text`
- `image`
- `file`

At least one of these fields must be present.

---

## Response Shape

Most endpoints return:

- `success` - boolean status flag
- `message` - human-readable response
- `user`, `data`, or `messages` - endpoint payload

---

## Socket Events

### Server emits

- `getOnlineUsers` - list of online user ids.
- `newMessage` - pushed to the receiver when a message is sent.

### Client connection

- The client passes `userId` in the Socket.IO handshake query.

---

## Error Handling

Validation and runtime errors are returned with a JSON body containing a `message` field and the appropriate HTTP status code.
