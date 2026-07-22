PlaceMe — Backend

A job portal backend built with Node.js, Express, TypeScript, and MongoDB (Mongoose).

This README covers the project setup, API routes, and sample requests for testing.

Tech Stack
Runtime: Node.js
Framework: Express
Language: TypeScript
Database: MongoDB via Mongoose
Env management: dotenv
Project Structure
backend/
├── src/
│   ├── db/
│   │   └── Db.ts          # MongoDB connection logic
│   ├── Model/
│   │   └── models.ts      # Mongoose schemas (User, etc.)
│   └── index.ts           # App entry point, routes
├── .env                    # Environment variables (not committed)
├── .gitignore
├── package.json
└── tsconfig.json