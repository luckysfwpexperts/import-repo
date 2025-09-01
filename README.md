# Import Repo

A React component library built with TypeScript and Next.js, featuring Storybook for component development and documentation.

## Installation

```bash
npm install import-repo
```

## Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom next
```

## Usage

```tsx
import { Card, greet } from 'import-repo';

// Use the Card component
<Card 
  title="My Card" 
  description="A beautiful card component"
  variant="elevated"
  onClick={() => console.log('Card clicked')}
/>

// Use utility functions
const message = greet('World'); // "Hello, World!"
```

## Components

### Card

A flexible card component with multiple variants:

- `default` - Basic card with border
- `outlined` - Card with blue outline
- `elevated` - Card with shadow

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title (required) |
| `description` | `string` | - | Card description (optional) |
| `variant` | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Card style variant |
| `onClick` | `() => void` | - | Click handler (optional) |

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build

# Run linting
npm run lint
```

## Storybook

This library includes Storybook for component development and documentation. Start the development server:

```bash
npm run storybook
```

Visit http://localhost:6006 to view the component stories.

## License

MIT