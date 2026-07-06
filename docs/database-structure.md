# Database Structure

---

## Collections

### users

Stores account, profile, and authentication data.

Fields:

- `_id` - MongoDB document identifier.
- `fullName` - User display name.
- `email` - Unique email address, stored in lowercase.
- `password` - Hashed password string.
- `profilePic` - Profile image URL.
- `bio` - Optional short biography.
- `createdAt` - Auto-generated timestamp.
- `updatedAt` - Auto-generated timestamp.

Rules:

- `fullName` is required and trimmed.
- `email` is required, unique, lowercase, and validated as a real email format.
- `password` is required and must meet the minimum length constraint.

---

### messages

Stores conversation records between two users.

Fields:

- `_id` - MongoDB document identifier.
- `text` - Plain text message content.
- `image` - Optional image URL.
- `file` - Optional attachment URL.
- `seen` - Boolean read status.
- `senderId` - Reference to the sending user.
- `receiverId` - Reference to the receiving user.
- `createdAt` - Auto-generated timestamp.
- `updatedAt` - Auto-generated timestamp.

Rules:

- At least one message payload field must exist before sending.
- `senderId` and `receiverId` are required references to `users`.

---

## Relationships

- One `user` can send and receive many `messages`.
- Each `message` belongs to exactly one sender and one receiver.
- `messages.senderId` and `messages.receiverId` reference the `users` collection.

---

## Storage Notes

- Profile pictures and attachments are uploaded to Cloudinary and stored as URLs.
- Passwords are never stored in plain text.
- Message read state is updated when a conversation is opened or when a live socket event is processed.
