# Beginner Project #3: Users API (Complete Journey)

> [!TIP]
> Since it's been a while, we will start **Basic** to refresh your memory, then move to **Advanced** to level up.

## Phase 1: The Refresher (Basic)
*Target: Re-learn how to build a User System like in `JagRam`.*

### 1. Setup & Connection
- [ ] Initialize Project: `npm init -y`, install `express mongoose dotenv cors`.
- [ ] Database Connection: Create `config/db.js` and connect to MongoDB.
- [ ] Basic Server: Setup `app.js` with JSON middleware.

### 2. The User Model (Schema)               
- [ ] Create `UserSchema` with standard fields:
    - `username` (String)
    - `email` (String, unique)
    - `password` (String) -> *We will accept plain text first, then add hashing.*

### 3. Basic CRUD (Repository & Service)
- [ ] **Create**: `POST /register` -> Save user to DB.
    - *Refresher*: Handle "Email already exists" error (Duplicate Key Error).
- [ ] **Read**: `GET /users/:id` -> Fetch user details (excluding password).
- [ ] **Login Logic**: `POST /login` -> Find user by email, compare password (string comparison).

---

## Phase 2: Intermediate Polish
*Target: Making it usable and secure.*

### 4. Security
- [ ] **Hashing**: Install `bcrypt`.
    -   Update Register: Hash password before saving (`hashSync` or `hash`).
    -   Update Login: Use `bcrypt.compare` to verify password.
- [ ] **JWT**: Install `jsonwebtoken`.
    -   Generate a token on Login.
    -   (Optional for now) Create a middleware to verify token.

### 5. Validation
- [ ] **Input Validation**: Ensure `email` looks like an email and `password` is at least 6 chars.
- [ ] **Controller Cleanup**: Move logic to `Service` layer, keep Controller clean.

---

## Phase 3: Advanced Concepts
*Target: Features not present in `JagRam` to make it "Production Ready".*

### 6. Advanced Data Handling
- [ ] **Soft Delete**:
    -   Add `isDeleted: { type: Boolean, default: false }` to Schema.
    -   `DELETE /users/:id` updates this flag instead of removing the doc.
    -   Update `GET` queries to filter out `isDeleted: true`.
- [ ] **Filtering & Searching**:
    -   `GET /users?role=admin`: Fetch only admins.
    -   `GET /users?age=25`: Fetch users of specific age.

### 7. Pagination
- [ ] Implement `skip` and `limit`.
    -   `GET /users?page=1&limit=10`.

### 8. Aggregation
- [ ] Create an endpoint `/users/stats` to show count of users by gender or role.
    `[{ _id: "male", count: 10 }, { _id: "female", count: 5 }]`

## Why this approach?
1.  **Phase 1** gets your "muscle memory" back.
2.  **Phase 2** secures it.
3.  **Phase 3** teaches you new things you didn't do in `JagRam`.
