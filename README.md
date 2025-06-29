This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```

├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── LoginForm.tsx
│   │   ├── Notifications/
│   │   │   ├── NotificationBox.tsx
│   │   │   ├── Notifications.tsx
│   │   │   └── NotificationsInput.tsx
│   │   └── Testimonial/
│   │       ├── TestimonialCard.tsx
│   │       └── Testimonials.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/ #Shadcn components
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── carousel.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── images/
│   │   ├── hero.png
│   │   ├── hero.svg
│   │   └── logo.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Packages Used

- ShadcnUI
- Tailwind CSS
