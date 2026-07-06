# Program Flow

---

## Main Application Flow

```mermaid
flowchart TD
    A[Open the app] --> B[AuthContext checks token]
    B --> C{Token exists?}
    C -- No --> D[Show Login page]
    C -- Yes --> E[Request /api/auth/checkAuth]
    E --> F{Valid session?}
    F -- No --> D
    F -- Yes --> G[Load Home page]
    G --> H[Fetch users and unread counts]
    H --> I[Select a contact]
    I --> J[Fetch message history]
    J --> K[Send or receive messages in real time]
    K --> L[Update seen state and unread counters]
    G --> M[Open Profile page]
    M --> N[Update name, bio, or avatar]
```

---

## What the User Can Do

- Sign up or log in.
- Stay authenticated with a token-backed session.
- Browse the active user list and search contacts.
- Open a chat and review previous messages.
- Send text, image, and file messages.
- See who is online in real time.
- Update profile details from the profile screen.
- Recover from invalid routes using the 404 page.
