# 🛠️ Web3 Challenge Platform API

This is a backend service built with [NestJS](https://nestjs.com/) and [TypeORM](https://typeorm.io/) for managing users, challenges, submissions, and NFT-based badges in a Web3 challenge platform.

---

## 📦 Features

* 🔐 User Management with wallet-based identity
* 🧠 Challenge creation and participation
* 📝 Submission system with feedback and scoring
* 🏅 Badge minting as NFTs on-chain
* 🔄 RESTful API structure with NestJS decorators
* 🗄️ Relational database with PostgreSQL via TypeORM


## 🚀 API Endpoints

### Users (`/users`)

* `POST /users` - Create a new user
* `GET /users` - Retrieve all users
* `GET /users/:id` - Get user by ID
* `GET /users/wallet/:walletAddress` - Get user by wallet address
* `PATCH /users/:id` - Update user info
* `DELETE /users/:id` - Delete a user

### Challenges (`/challenges`) — *Assumed*

* Create, view, update challenges (not shown in controllers but implied in entity)
* Linked to creator (User) and submissions

### Submissions (`/submissions`)

* `POST /submissions` - Submit a challenge
* `GET /submissions` - List all submissions
* `GET /submissions/:id` - View a specific submission
* `GET /submissions/challenge/:challengeId` - Submissions by challenge
* `GET /submissions/user/:userId` - Submissions by user
* `PATCH /submissions/:id` - Update submission (e.g. status/score)
* `DELETE /submissions/:id` - Delete submission

### Badges (`/badges`)

* `POST /badges` - Create a badge
* `GET /badges` - List all badges
* `GET /badges/:id` - Get badge by ID
* `GET /badges/user/:userId` - Get all badges for a user
* `POST /badges/mint` - Mint NFT badge
* `DELETE /badges/:id` - Remove a badge

---

## 🧱 Entity Relationships

### User

* One-to-many: `createdChallenges`, `submissions`, `badges`
* Uniquely identified by `walletAddress` and `username`

### Challenge

* Many-to-one: `creator` (User)
* One-to-many: `submissions`

### Submission

* Many-to-one: `user`, `challenge`
* Tracks: `status`, `feedback`, `score`, `submittedAt`

### Badge

* NFT representation of completed challenges
* Linked to: `user`, `challenge`
* Includes: `imageUrl`, `transactionHash`, `mintedAt`

---

## 🛠️ Getting Started

### Prerequisites

* Node.js (v18+)
* PostgreSQL
* Yarn or npm

### Installation

```bash
yarn install
# or
npm install
```

### Run the App

```bash
yarn start:dev
# or
npm run start:dev
```

### Configure `.env`

Create a `.env` file with the following:

```
DATABASE_URL=postgres://user:password@localhost:5432/db_name
PORT=3000
```

---

## 🔐 Minting NFT Badges

Badges can be minted via the `/badges/mint` endpoint, accepting `MintBadgeDto` which includes:

* `userId`
* `challengeId`
* Optional metadata for token generation

Ensure Web3/NFT functionality is implemented in the `BadgesService`.

---

## 📖 Enums Reference

* `SkillCategory`: Categorizes user/challenge skill domain
* `ChallengeStatus`: `DRAFT`, `PUBLISHED`, etc.
* `SubmissionStatus`: `PENDING`, `APPROVED`, `REJECTED`, etc.
* `ChallengeDifficulty`: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`, `EXPERT`

---

## 📌 Notes

* This is a modular NestJS application using dependency injection
* Ensure DTOs have proper validation (e.g. using `class-validator`)
* You may extend the platform with features like authentication, admin dashboards, and on-chain verification

---

## 🧪 Testing

You can write E2E tests with [Supertest](https://github.com/visionmedia/supertest) or unit tests using Jest (built into NestJS).

---

## 📜 License

MIT
