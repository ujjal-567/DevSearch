Auth server & demo pages

Quick start

1. Install dependencies (run in `auto_complited` folder):

```powershell
npm install
```

2. Start auth server:

```powershell
npm start
```

This launches the auth server on `http://localhost:3001`.

3. Open the frontend pages in your browser (from workspace files):
- `signup.html` — create a new user
- `login.html` — sign in as existing user

Notes
- User records are stored in `users.json` in the same folder.
- Passwords are hashed with `bcrypt` before saving.
- This is a minimal demo server intended for local development only. Do not use this as-is in production (no rate-limiting, no secure session handling, no HTTPS).
