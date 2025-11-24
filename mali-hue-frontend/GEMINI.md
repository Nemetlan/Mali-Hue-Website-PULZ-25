# Project: Mali Hue Frontend

## Project Overview

This is the frontend for "Mali Hue", an e-commerce website. It is a [Next.js](https://nextjs.org/) project, bootstrapped with `create-next-app`. The project uses React `19.2.0` and Next.js `16.0.1`. The UI includes a main navigation bar, a credit bar at the bottom, and pages for showcasing products. Custom fonts are used to give the site a unique look and feel.

This project also includes a dashboard for managing the e-commerce store, with features for managing orders and items.

## Building and Running

To get the development server running:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Other available scripts:

*   `npm run build`: Creates a production build.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Lints the code using ESLint.

## Development Conventions

### Project Structure

*   The main application logic resides in the `app` directory.
*   The `public` directory contains static assets, including images, icons, and fonts. Reusable React components are also located in `public/components`.
*   The `utils` directory contains utility functions, such as font loading.
*   The `app/dashboard` directory contains the admin dashboard pages and components.
*   The `app/login` directory contains the login page for the dashboard.

### Styling

The project uses CSS Modules for styling. Each component has a corresponding `.module.css` file.

### Fonts

The project uses custom fonts loaded via `next/font`. The font definitions are centralized in `utils/fonts.js`.

### Components

React components are used to build the UI. Key components include:

*   `NavBar`: The main navigation bar.
*   `CreditBar`: A credit bar at the bottom of the page.
*   `ContactCard`: A card for displaying contact information.
*   `ItemsCard`: A card for displaying items in the shop.
*   Dashboard components in `app/dashboard/components`.

## Backend Connection

Instructions for connecting the frontend to a backend API can be found in the `BACKEND_README.md` file.