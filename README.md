# Sidéral — Luxury Beauty Brand Website

A fully custom luxury beauty brand site designed and built from scratch. The visual identity draws from deep space — rich purples, soft pinks, and cosmic gradients that feel premium without feeling cold.

[![Live Site](https://img.shields.io/badge/Live%20Site-View%20Sidéral-9b59b6?style=flat-square)](https://sozark.github.io/SideralWebsite/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Overview

Sidéral — meaning "of the stars" — is a luxury beauty brand concept designed and developed entirely from scratch. The project was built to demonstrate end-to-end product thinking: from visual identity and color system design through to functional e-commerce features and responsive layout.

The challenge was making something feel immersive and premium without feeling cold or clinical — the way most luxury beauty sites tend to. Deep purples and soft pinks anchored in a cosmic aesthetic solve that by creating warmth within an elevated context.

---

## Features

- **Product storefront** — browsable product catalog with category filtering
- **Shopping cart** — add, remove, and update quantities with persistent cart state
- **Booking system** — appointment booking flow for beauty services
- **Animated navigation** — custom side menu with smooth transitions
- **Scroll reveal animations** — elements animate in as the user scrolls
- **Responsive design** — fully functional across desktop, tablet, and mobile
- **Custom design system** — color variables, typography scale, and spacing system built from scratch
- **Form handling** — integrated with Formspree for live form submissions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Forms | Formspree |
| Version Control | Git / GitHub |
| Deployment | GitHub Pages |

---

## Design Process

**Visual Identity**
The name Sidéral drove every design decision. Deep space colors — rich purples, soft pinks, cosmic gradients — create an atmosphere that feels aspirational and otherworldly without losing approachability. Typography was chosen to balance elegance with legibility across product listings and booking flows.

**UX Decisions**
- Product cards are minimal to keep focus on imagery
- Cart state is managed in vanilla JavaScript without external libraries
- Booking flow is linear to reduce cognitive load
- Color contrast was carefully maintained throughout to ensure the dark palette never compromised readability

**Why no framework?**
Building the cart and booking system in vanilla JavaScript required careful thinking about state and DOM management from the ground up. This constraint produced cleaner, more intentional code than reaching for a framework would have.

---

## Project Structure

```
SideralWebsite/
├── index.html          # Homepage
├── products.html       # Product catalog
├── booking.html        # Booking system
├── cart.html           # Shopping cart
├── css/
│   ├── style.css       # Main stylesheet
│   └── animations.css  # Scroll and transition animations
├── js/
│   ├── main.js         # Navigation and shared interactions
│   ├── cart.js         # Cart state management
│   └── booking.js      # Booking form logic
└── img/                # Product and brand imagery
```

---

## Running Locally

```bash
git clone https://github.com/Sozark/SideralWebsite.git
cd SideralWebsite
# Open index.html in your browser or use Live Server in VS Code
```

---

## Case Study

For a full breakdown of the design decisions, UX thinking, and technical implementation behind this project, see the [Sidéral Case Study](https://noahcjones.dev/case-study-sideral.html) on my portfolio.

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

## Contact

Noah C. Jones
- Portfolio: [noahcjones.dev](https://noahcjones.dev)
- Email: jonesncharbonnet@gmail.com
- GitHub: [github.com/Sozark](https://github.com/Sozark)
