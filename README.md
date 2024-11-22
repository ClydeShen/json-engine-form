# JSON Engine Form

A powerful and flexible form engine built with Next.js and Material-UI that allows you to create dynamic forms using JSON configuration.

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd json-engine-form
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and test them locally

3. Run linting to ensure code quality:
```bash
pnpm lint
```

4. Clean build artifacts if needed:
```bash
pnpm clean
```

5. Build the project:
```bash
pnpm build
```

### Project Structure

```
├── app/                    # Next.js app router pages
│   ├── example/           # Example form implementation
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── src/
│   ├── components/        # Reusable React components
│   ├── hooks/            # Custom React hooks
│   ├── json-config/      # JSON form configurations
│   ├── libs/             # Utility libraries
│   ├── theme/            # MUI theme customization
│   └── utils/            # Helper functions
├── docs/                  # Project documentation
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
