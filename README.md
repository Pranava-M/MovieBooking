# TicketSpot — Movie & Restaurant Booking Desktop App

A cross-platform desktop application for browsing movies, booking cinema seats, and reserving restaurant tables. Built with **Electron.js** wrapping a multi-page HTML/CSS/JavaScript front end, with all booking data persisted locally in the browser's `localStorage`.

---

## What It Does

TicketSpot bundles two booking flows into a single desktop app:

**Movies** — browse the current movie listings, view showtimes, pick seats from an interactive seat map, and confirm a booking.

**Restaurants** — browse restaurants, view menus, choose a date and time, and reserve a table.

Both flows write to local storage, so bookings persist between sessions on the same machine. A separate **My Bookings** page lists everything you've reserved, and an **Admin Panel** displays all submitted form data for review.

---

## Screens

| Page | Purpose |
|---|---|
| `TS Home.html` | Landing page and entry point |
| `TS Moviepage.html` | Movie listings, showtimes, seat selection |
| `TS Restaurent.html` | Restaurant listings, menus, table reservation |
| `TS Events.html` | Event listings |
| `newsignin.html` | Sign-in and registration forms |
| `bookings.html` / `boookings.html` | Saved restaurant and movie bookings |
| `admin.html` | Admin view of all form submissions |
| `TS About.html`, `TS Contact.html` | Static info and contact form |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Desktop shell | Electron.js |
| UI | HTML5, CSS3, vanilla JavaScript |
| Data persistence | Browser `localStorage` |
| Packaging | electron-builder |

**Electron features used:** custom application menu bar (File / Edit / View / Window / Help / Code), a right-click context menu with quick navigation, multi-page routing via `loadFile()`, and DevTools access for debugging.

---

## Data Model

All state lives in `localStorage` under four keys:

| Key | Contents |
|---|---|
| `users` | Registered accounts from the sign-up form |
| `cineMaxBookings` | Confirmed movie bookings |
| `restaurantBookings` | Confirmed table reservations |
| `formData` | Contact form submissions shown in the admin panel |
| `theme` | Light/dark theme preference, applied across all pages |

---

## Installation

**Prerequisites:** Node.js v18 or newer.

```bash
git clone https://github.com/Pranava-M/MovieBooking.git
cd MovieBooking/Moviecode
npm install
npm start
```

To build a distributable Windows executable:

```bash
npm run dist
```

---

## Scope & Limitations

This is a front-end desktop application built to practise Electron, multi-page UI construction, and client-side state management. It is honest about what it is not:

- **No backend server or database.** Data is stored in `localStorage` on the local machine and is not shared between devices or users.
- **No real authentication.** The sign-in form validates input and stores credentials in local storage; it does not implement password hashing, sessions, or tokens.
- **No payment processing.** The checkout flow is a UI simulation — no payment gateway is integrated.
- **No live seat inventory.** Seat availability is managed client-side and does not sync across installations.

---

## What I Built

Designed and implemented all 11 UI pages including the seat-selection grid and menu views, wired up the Electron shell with custom application and context menus, implemented the `localStorage` persistence layer across the booking flows, built the admin submissions view, and added a theme toggle that persists across pages.

---

## Possible Next Steps

- Replace `localStorage` with a real backend (Express + PostgreSQL) so bookings persist server-side
- Add proper authentication with hashed passwords and sessions
- Move seat inventory server-side to prevent double-booking
- Extract repeated markup into components rather than duplicating across pages
