# Adon - Product Designer Portfolio

This is a portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Tech Stack**: Next.js (App Router), TypeScript, Tailwind CSS.
- **Styling**: Minimalist "Stripe/Linear" inspired design.
- **Animations**: Smooth scroll and enter animations using Framer Motion.
- **Responsiveness**: Fully responsive design for mobile and desktop.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open in browser**:
    Visit [http://localhost:3000](http://localhost:3000)

## Customization

-   **Content**: Edit `src/components/*.tsx` files to update text and images.
-   **Projects**: Update `src/data/projects.ts` to add or modify project case studies.
-   **Resume**: Replace `public/resume.pdf` with your actual resume file.
-   **Images**: Place your images in `public/images/` and update references in components.

## Deployment

This project requires a Next.js server, such as Vercel or a Node.js host, for password verification. The default password is `Adon` (case-sensitive). Optionally set `PORTFOLIO_PASSWORD` and `PORTFOLIO_SESSION_SECRET` in the hosting environment; see `.env.example`.

Unauthenticated visitors are sent to `/login`, including when opening project pages, images, or PDFs directly. Successful verification returns visitors to their original URL. The signed, HttpOnly session cookie lasts for the browser session, with a maximum validity of 12 hours.

The tracked `out/` directory is an old static export and does not include password protection. Do not publish it for the protected site; GitHub Pages and static-only hosting cannot run this server-side access check.

```bash
npm run build
npm start
```
