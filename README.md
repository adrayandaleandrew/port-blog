# Portfolio Blog

A modern, responsive portfolio and blog website built with React, TypeScript, and Tailwind CSS.

## Features

- **Portfolio Showcase**: Display your projects with details and links
- **Blog Section**: Share your thoughts and experiences
- **Responsive Design**: Looks great on all devices
- **Admin Dashboard**: Manage your content
- **Contact Form**: Allow visitors to get in touch

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Linting**: ESLint

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started

### Installation

1. Clone the repository

   ```bash
   git clone -b BranchName https://github.com/yourusername/port-blog.git
   cd port-blog
   ```

2. Install dependencies
   ```bash
   npm install
   npm i react-router-dom
   npm install tailwindcss @tailwindcss/vite
   ```

### Development

Start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/` - Source code
  - `components/` - React components
    - `admin/` - Admin dashboard components
    - `blog/` - Blog-related components
    - `layout/` - Layout components
    - `portfolio/` - Portfolio components
    - `shared/` - Reusable components
  - `assets/` - Static assets
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point

## Customization

- Edit `src/components/AboutMe.tsx` to update your personal information
- Update `src/components/TechStack.tsx` with your skills
- Modify the portfolio projects in `src/App.tsx` or connect to a backend API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
