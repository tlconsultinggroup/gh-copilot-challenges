# 📊 Connect People – Data Model

This document describes the data model for **Connect People**, a social media app built using Node.js, JavaScript, SQLite, and Sequelize ORM.

---

## 🧑 Users

| Field         | Type       | Description                       |
|---------------|------------|-----------------------------------|
| id            | UUID / INT | Primary Key, Auto-Increment       |
| username      | STRING     | Unique, Not Null                  |
| email         | STRING     | Unique, Not Null                  |
| passwordHash  | STRING     | Hashed password, Not Null         |
| role          | STRING     | User role (default: 'user')       |
| createdAt     | DATETIME   | Timestamp                         |
| updatedAt     | DATETIME   | Timestamp                         |

---

## 📄 Profiles

| Field      | Type       | Description                         |
|------------|------------|-------------------------------------|
| id         | UUID / INT | Primary Key                         |
| userId     | FK         | References Users(id), Unique        |
| bio        | TEXT       | Optional                            |
| location   | STRING     | Optional                            |
| profilePic | STRING     | URL to profile image                |
| createdAt  | DATETIME   | Timestamp                           |
| updatedAt  | DATETIME   | Timestamp                           |

---

## 📝 Posts

| Field      | Type       | Description                         |
|------------|------------|-------------------------------------|
| id         | UUID / INT | Primary Key                         |
| userId     | FK         | References Users(id)                |
| content    | TEXT       | Post content                        |
| imageUrl   | STRING     | Optional, image URL                 |
| createdAt  | DATETIME   | Timestamp                           |
| updatedAt  | DATETIME   | Timestamp                           |

---

## 💬 Comments

| Field      | Type       | Description                         |
|------------|------------|-------------------------------------|
| id         | UUID / INT | Primary Key                         |
| userId     | FK         | References Users(id)                |
| postId     | FK         | References Posts(id)                |
| content    | TEXT       | Comment text                        |
| createdAt  | DATETIME   | Timestamp                           |

---

## ❤️ Likes

| Field      | Type       | Description                         |
|------------|------------|-------------------------------------|
| id         | UUID / INT | Primary Key                         |
| userId     | FK         | References Users(id)                |
| postId     | FK         | References Posts(id)                |
| createdAt  | DATETIME   | Timestamp                           |
| UNIQUE     | userId + postId | One like per user per post    |

---

## 👥 Follows

| Field        | Type       | Description                        |
|--------------|------------|------------------------------------|
| id           | UUID / INT | Primary Key                        |
| followerId   | FK         | References Users(id)               |
| followingId  | FK         | References Users(id)               |
| createdAt    | DATETIME   | Timestamp                          |
| UNIQUE       | followerId + followingId | One follow per pair |

---

## ✉️ Messages (Optional)

| Field      | Type       | Description                         |
|------------|------------|-------------------------------------|
| id         | UUID / INT | Primary Key                         |
| senderId   | FK         | References Users(id)                |
| receiverId | FK         | References Users(id)                |
| content    | TEXT       | Message content                     |
| createdAt  | DATETIME   | Timestamp                           |

---

## 🔔 Notifications (Optional)

| Field       | Type       | Description                         |
|-------------|------------|-------------------------------------|
| id          | UUID / INT | Primary Key                         |
| userId      | FK         | References Users(id)                |
| type        | STRING     | e.g., 'like', 'comment', 'follow'   |
| referenceId | STRING     | Related entity ID (post, comment)   |
| isRead      | BOOLEAN    | Default: false                      |
| createdAt   | DATETIME   | Timestamp                           |

---

## 🔗 Relationships Summary

- **Users → Profiles**: One-to-One
- **Users → Posts, Comments, Likes, Messages**: One-to-Many
- **Posts → Comments, Likes**: One-to-Many
- **Users ↔ Users (Follows)**: Many-to-Many (via self-referencing table)
- **Users ↔ Messages**: Many-to-Many (sender/receiver)
- **Users → Notifications**: One-to-Many

---

## 💡 Notes

- All `UUID / INT` fields can be configured depending on your preference or Sequelize setup.
- For scalability, this model can be migrated to PostgreSQL or MySQL with minimal changes.
- `createdAt` and `updatedAt` are automatically managed by Sequelize unless otherwise configured.

