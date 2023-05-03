# Database Structure for Tezzy

```sql
## Users table

| Field Name    | Data Type | Key         |
| ------------- | --------- | ----------- |
| user_id       | int       | Primary Key |
| first_name    | varchar   |             |
| last_name     | varchar   |             |
| email         | varchar   |             |
| password      | varchar   |             |
| date_of_birth | date      |             |
| profile_pic   | varchar   |             |
| created_at    | timestamp |             |
| updated_at    | timestamp |             |

## Buzzes table

| Field Name  | Data Type | Key         |
| ----------- | --------- | ----------- |
| buzz_id     | int       | Primary Key |
| user_id     | int       | Foreign Key |
| content     | text      |             |
| likes_count | int       |             |
| created_at  | timestamp |             |
| updated_at  | timestamp |             |

## Follows table

| Field Name   | Data Type | Key         |
| ------------ | --------- | ----------- |
| follow_id    | int       | Primary Key |
| follower_id  | int       | Foreign Key |
| following_id | int       | Foreign Key |
| created_at   | timestamp |             |

## Likes table

| Field Name | Data Type | Key         |
| ---------- | --------- | ----------- |
| like_id    | int       | Primary Key |
| user_id    | int       | Foreign Key |
| buzz_id    | int       | Foreign Key |
| created_at | timestamp |             |

## Notifications table

| Field Name           | Data Type | Key         |
| -------------------- | --------- | ----------- |
| notification_id      | int       | Primary Key |
| user_id              | int       | Foreign Key |
| notification_type    | varchar   |             |
| notification_content | text      |             |
| created_at           | timestamp |             |

## Messages table

| Field Name  | Data Type  | Key         |
| ----------- | ---------- | ----------- |
| message_id  | int        | Primary Key |
| sender_id   | int        | Foreign Key |
| receiver_id | int        | Foreign Key |
| content     | text       |             |
| created_at  | updated_at | timestamp   |

Relationships:

One user can create many buzzes (one-to-many relationship between Users and Buzzes)
One user can follow many other users, and be followed by many other users (many-to-many relationship between Users and Follows)
One user can like many buzzes, and many users can like the same buzz (many-to-many relationship between Users and Buzzes via Likes)
One user can receive many notifications (one-to-many relationship between Users and Notifications)
One user can send and receive many messages (many-to-many relationship between Users and Messages via Sender and Receiver)
```
