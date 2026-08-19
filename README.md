# Private Travel Club

A premium, mobile-first travel website and full-stack application for **Private Travel Club**, focused on curated journeys, exceptional destinations, private travel inquiries, and a future members-only travel experience.

The project combines a visually immersive frontend with a database-backed inquiry system, authentication infrastructure, administrative functionality, and transactional email integration.

---

## Overview

Private Travel Club is being developed as a premium digital platform for a private travel club.

The current application focuses on establishing the foundation of the platform:

* Premium public-facing website
* Curated travel experiences and destinations
* Trip pages
* Club and membership presentation
* Travel inquiry workflow
* PostgreSQL database integration
* Prisma ORM
* Authentication infrastructure
* Administrative area
* Concierge API
* Transactional email integration
* Responsive, mobile-first design

The project is under active development, with additional private-member functionality planned for future releases.

---

## Current Features

### Premium Public Website

The current website includes:

* Responsive navigation
* Premium travel-focused visual design
* Full-screen hero imagery
* Animated hero image transitions
* Mobile-first layouts
* Editorial-style content sections
* About / philosophy content
* The Club presentation
* Contact page
* Travel experiences
* Curated trip pages

### Travel Experiences

The application currently includes dedicated pages for travel experiences and trips.

These provide the foundation for presenting:

* Destinations
* Curated journeys
* Travel experiences
* Retreat concepts
* Premium travel content

### Travel Inquiry System

Visitors can submit private travel inquiries through the website.

The inquiry workflow currently supports:

* Name
* Email
* Destination
* Start date
* End date
* Message
* Database persistence
* Inquiry status
* Email notification integration

Inquiry functionality is implemented through a Next.js API route and Prisma/PostgreSQL.

### Concierge API

The project includes a concierge API endpoint that provides the foundation for future personalized travel assistance and AI-assisted concierge functionality.

### Authentication Infrastructure

The project includes authentication infrastructure and a login interface.

Authentication-related functionality is located within:

```text
app/api/auth/
app/login/
lib/auth.ts
```

This provides the foundation for protected areas of the application.

### Administrative Area

An administrative interface is included in:

```text
app/admin/
```

The current implementation provides the foundation for managing private travel club functionality and future administrative workflows.

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router
* Responsive mobile-first UI

### Backend

* Next.js API Routes
* Prisma ORM
* PostgreSQL
* Authentication infrastructure
* Server-side environment variables

### Services

* Resend — transactional email
* Vercel — deployment and hosting
* GitHub — source control

---

## Project Structure

```text
private-travel-club/
│
├── app/
│   ├── admin/
│   ├── api/
│   │   ├── auth/
│   │   ├── concierge/
│   │   └── inquiries/
│   │
│   ├── contact/
│   ├── experiences/
│   ├── login/
│   ├── the-club/
│   ├── trips/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ConciergeSection.tsx
│   ├── HashScroll.tsx
│   └── SiteNavigation.tsx
│
├── lib/
│   ├── auth.ts
│   └── prisma.ts
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│   └── images/
│
├── next.config.ts
├── prisma.config.ts
├── package.json
└── README.md
```

---

## Database

The application uses **PostgreSQL** with **Prisma ORM**.

The current database implementation supports the travel inquiry workflow, including inquiry creation and inquiry status management.

Prisma schema:

```text
prisma/schema.prisma
```

Database migrations:

```text
prisma/migrations/
```

---

## Email Integration

The inquiry system uses **Resend** to send email notifications when new inquiries are submitted.

The application accesses the Resend API key through an environment variable:

```text
RESEND_API_KEY
```

Actual credentials are never stored in the repository.

---

## Environment Variables

Create a local `.env` file containing the required environment variables.

Example:

```env
DATABASE_URL="your-database-connection-string"
RESEND_API_KEY="your-resend-api-key"
ADMIN_PASSWORD="your-admin-password"
```

**Never commit real credentials, API keys, passwords, or database connection strings to Git.**

Environment files are excluded through `.gitignore`.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BenjaminLee-tech/private-travel-club.git
cd private-travel-club
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file and configure the required database, email, and authentication variables.

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Deployment

The application is designed for deployment on **Vercel**.

Production environment variables are configured through the deployment environment rather than committed to the repository.

The current application uses:

* Vercel for hosting
* PostgreSQL for persistent data
* Resend for transactional email

---

## Design Direction

Private Travel Club is designed around a premium editorial travel experience rather than a conventional booking website.

The visual direction emphasizes:

* Immersive travel photography
* Elegant typography
* Generous spacing
* Minimal interface elements
* Mobile-first layouts
* Smooth image transitions
* Curated storytelling
* Premium travel aesthetics

The objective is to create a digital experience that feels closer to a **private luxury travel publication and members' club** than a traditional travel marketplace.

---

## Current Development Status

**Active development**

### Implemented

* [x] Premium public website
* [x] Responsive navigation
* [x] Mobile-first responsive design
* [x] Hero image experience
* [x] Travel experiences
* [x] Trip pages
* [x] The Club page
* [x] Contact page
* [x] Travel inquiry API
* [x] PostgreSQL database integration
* [x] Prisma ORM
* [x] Inquiry status management
* [x] Resend email integration
* [x] Authentication infrastructure
* [x] Login interface
* [x] Administrative area
* [x] Concierge API
* [x] Vercel deployment

---

## Roadmap

The following functionality is planned for future development and is **not represented as fully implemented in the current release**.

* [ ] Membership application workflow
* [ ] Admin membership approval workflow
* [ ] Member invitations
* [ ] Online annual membership payments
* [ ] Member accounts
* [ ] Member profiles
* [ ] Member directory
* [ ] Private member events
* [ ] Exclusive member benefits
* [ ] Digital membership card
* [ ] Referral functionality
* [ ] Advanced trip management
* [ ] Personalized concierge services
* [ ] AI-assisted travel recommendations
* [ ] iPhone application

---

## Security

Sensitive configuration is intentionally kept outside the repository.

The project uses environment variables for:

* Database credentials
* Resend API credentials
* Administrative credentials

Environment files are excluded by `.gitignore`.

No production secrets should be committed to Git.

---

## Author

**Benjamin Lee**

Full-stack web developer focused on building modern, premium web applications and digital products.

GitHub: `BenjaminLee-tech`

---

## License

This project is currently a private commercial/portfolio project.

All rights reserved unless otherwise specified.
