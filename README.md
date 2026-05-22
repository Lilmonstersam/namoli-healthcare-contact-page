# Namoli Contact Page

A modern, responsive, multi-step contact form built with React, Vite, and TypeScript for Namoli.

## Features

- **Multi-Step Form Logic:** Intuitive 3-step process (Contact Info -> Service Details -> Review).
- **Conditional Fields:** Form fields dynamically adjust based on the enquiry type (Quote, Franchise, or Job).
- **Validation:** Built-in form validation for required fields, email formatting, and phone numbers.
- **Premium Design:** Polished UI with smooth transitions, progress indicators, and mobile-responsive layout.
- **Automated Deployment:** GitHub Actions workflow configured for seamless deployment to GitHub Pages.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Refactored from original mockup)

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Locally:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Project Structure

- `src/components/`: Modular React components.
  - `ContactForm/`: Multi-step form container and step components.
  - `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `Sidebar.tsx`: Main layout components.
- `src/index.css`: Global styles and design system tokens.
- `mockup.html`: The original static mockup for reference.

## Deployment

The project is configured to deploy automatically to GitHub Pages on every push to the `main` branch via GitHub Actions.

- **Base Path:** `/namoli-healthcare-contact-page/`
- **Output Directory:** `dist/`
