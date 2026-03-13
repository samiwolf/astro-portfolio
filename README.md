# Md. Samiul Islam Siddiqui - Personal Portfolio

A modern, responsive personal portfolio website built with Astro and Tailwind CSS, showcasing my professional experience, skills, and background as a Full Stack Software Engineer.

![Portfolio Preview](https://img.shields.io/badge/Astro-5.16.9-FF5E01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and card-based sections
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Astro for optimal loading speed and 100/100 Lighthouse score
- **SEO Optimized**: Meta tags, structured data, and semantic HTML for search engines
- **Type Safety**: Full TypeScript implementation for better development experience
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Cloudflare Deployment**: Optimized for Cloudflare Workers with global CDN

## Portfolio Sections

- **About Me**: Professional summary and key strengths
- **Work Experience**: Detailed experience at Streams Tech Limited and TigerIT Bangladesh Limited
- **Education**: Academic background from University of Dhaka
- **Technical Skills**: Comprehensive skill matrix including programming languages, frameworks, databases, and tools
- **Projects**: Notable projects like CommChat, NID-PUB, and Project Everest
- **Contact Information**: Professional contact details and social links

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless platform
- **Package Manager**: npm - Node.js package manager

## Getting Started

### Prerequisites

- Node.js 22+ (as specified in engines)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samiwolf/astro-portfolio.git
cd astro-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Build & Deploy

1. Build for production:
```bash
npm run build
```

2. Preview the build locally:
```bash
npm run preview
```

3. Deploy to Cloudflare:
```bash
npm run deploy
```

## Project Structure

```
astro-portfolio/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── components/        # Reusable Astro components
│   │   └── cv/            # CV-specific components
│   ├── layouts/           # Page layout components
│   ├── pages/             # Astro pages (routes)
│   └── styles/            # Global styles and CSS
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── wrangler.json          # Cloudflare Workers configuration
└── package.json           # Project dependencies and scripts
```

### Key Components

- `src/pages/index.astro`: Main portfolio page with all sections
- `src/components/cv/`: Specialized components for CV sections:
  - `CVHeader.astro` - Personal information header
  - `CVSection.astro` - Reusable section wrapper
  - `ExperienceItem.astro` - Work experience display
  - `EducationItem.astro` - Education details
  - `SkillItem.astro` - Technical skills presentation

## Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run deploy`                  | Deploy your production site to Cloudflare        |
| `npm run check`                   | Run type checking and deployment dry-run         |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## Deployment

This portfolio is optimized for deployment on Cloudflare Workers. The deployment process is automated through the `npm run deploy` script, which uses Wrangler to deploy the static site to the Cloudflare network.

### Deployment Benefits

- Global CDN: Automatic distribution to Cloudflare's global network
- Zero Cold Starts: Instant loading from edge locations
- SSL Certificate: Free HTTPS certificate included
- Custom Domain: Easy domain setup through Cloudflare Dashboard

## Contact

- Email: siddiquisamiul@gmail.com
- LinkedIn: [samiulsiddiqui](https://linkedin.com/in/samiulsiddiqui)
- GitHub: [samiwolf](https://github.com/samiwolf)
- Phone: +880 1861864420
- Location: Dhaka, Bangladesh

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/samiwolf/astro-portfolio/issues) if you want to contribute.

## Acknowledgments

- Built with [Astro](https://astro.build/) - The modern web framework
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted on [Cloudflare Workers](https://workers.cloudflare.com/)
- Inspired by modern portfolio design patterns
