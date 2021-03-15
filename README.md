# Getting Started with TypeScript NPM Server


## Initial Setup
Since this project is still in development, in order to
successfully connect to the database, you need to setup
a `.env.local` file.  You can do this by copying `.env.template`
to `.env.local` and then editing the local file to include the
correct information.

All environment variables set should be referenced in
`src/utils/config.ts`. Import that file into any location where
you are using environment variables.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies for the project in `node_modules`.

### `npm start`

Runs the server in development mode on [http://localhost:3001](http://localhost:3001).\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\