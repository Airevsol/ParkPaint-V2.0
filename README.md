# Park Patch & Paint Website

This is the official website for Park Patch & Paint, an interior painting company based in Sherwood Park, Alberta, Canada.

## Features

- Statically generated website using Next.js 15
- Responsive design with Tailwind CSS
- SEO optimized with proper metadata
- Multi-language support structure (currently English only)
- Location-based service pages for targeted SEO

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/parkpaint.git
cd parkpaint
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/app`: Next.js app directory
  - `/en`: English language routes
    - `/services`: Service pages
    - `/locations`: Location pages
    - `/contact`: Contact page
- `/components`: Reusable React components
- `/lib`: Utility functions and data
- `/public`: Static assets
  - `/images`: Image files

## Building for Production

To build the website for production:

```bash
npm run build
```

The static output will be generated in the `out` directory.

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript

## License

All rights reserved. This project is proprietary and confidential.
