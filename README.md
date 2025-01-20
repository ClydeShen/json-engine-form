# JSON Engine Form Logger

A simple TypeScript library that provides logging functionality.

## Installation

```bash
npm install json-engine-form
# or
yarn add json-engine-form
# or
pnpm add json-engine-form
```




## Usage

```typescript
import { logMessage } from 'json-engine-form';

// Log a message
logMessage('Hello from JSON Engine Form!');
// Output: [JSON-Engine-Form]: Hello from JSON Engine Form!
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the library:
   ```bash
   pnpm build
   ```
4. Run tests:
   ```bash
   pnpm test
   ```

## Testing Locally

There are two ways to test this library locally:

### Method 1: Using pnpm link

1. In your library directory, create a global link:
   ```bash
   cd path/to/json-engine-form
   pnpm link --global
   ```

2. Create a test project and link the library:
   ```bash
   mkdir test-library
   cd test-library
   
   # Initialize package.json
   echo '{
     "name": "test-library",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "test": "node index.js"
     }
   }' > package.json
   
   # Link to your library
   pnpm link --global json-engine-form
   ```

3. Create a test file:
   ```bash
   echo 'const { logMessage } = require("json-engine-form");
   logMessage("Testing the library locally!");' > index.js
   ```

4. Run the test:
   ```bash
   pnpm test
   ```

### Method 2: Direct Path Installation

1. Create a test project:
   ```bash
   mkdir test-library
   cd test-library
   pnpm init
   ```

2. Install the library from local path:
   ```bash
   pnpm add ../json-engine-form
   ```

3. Create and run the same test file as above.

You should see the output: `[JSON-Engine-Form]: Testing the library locally!`

## License

MIT
