# reclab-cms

Recover Laboratory CMS

## Configuration

### Development Environment

The development environment is configured through Docker. You must have `docker` and `docker-compose` commands available to use the development environment and run the tests.

You might also want to install Nest CLI for development.

### Production Environment

This app is configured for deployment to Heroku but will work on other platforms with respective tweaks.

#### Environment Variables

Name | Description
-|-
`NODE_ENV` | Must be set to `production`.
`PORT` | Port to bind to.
`DATABASE_URL` | Fully-qualified Postgres connection string. (Developed with Postgres 12.)
`JWT_SECRET` | Secret used in creation of authentication tokens.

## Usage

### Development

Start development environment (requires Docker):

```bash
npm run start:dev
```

The CMS server will listen at port 3001 and Adminer at 8080.

### Production

Start in production mode:

```bash
npm run start:prod
```

### E2E Tests

Run all tests:

```bash
npm test
```

## License

See [LICENSE](./LICENSE).
