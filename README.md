# Ridely Backend

Ridely is a mobility platform that connects riders and drivers, offering ride discovery, bookings, in-app chat, and rich notifications. This repository hosts the backend GraphQL API written in TypeScript on top of NestJS and TypeORM.

## Features

- Modular GraphQL API covering auth, rides, bookings, chat, notifications, and more
- JWT-based authentication with local strategy and OTP flows
- Multi-language support using `@nestjs/i18n`
- Structured logging, metrics, and health checks for observability
- S3-compatible storage integration with presigned upload support
- Shared TypeScript interfaces for typed client integrations

## Project structure

```
src/
  main.ts
  common/
    constants/
      TableName.ts
    decorators/
    filters/
      i18n-exception.filter.ts
    interceptors/
    utils/
  generated/
    i18n.generated.ts
  graphql/
    scalars/
    schema.gql
  i18n/
    en/
      auth.json
    ru/
      auth.json
    uz/
      auth.json
  infra/
    config/
      config.module.ts
      env.validation.ts
      register-app.config.ts
      register-database.config.ts
    database/
      database.module.ts
      typeorm.config.ts.ts
    graphql/
      graphql.module.ts
    health/
      health.controller.ts
      health.module.ts
    i18n/
      i18n.module.ts
    metrics/
      metrics.module.ts
      middlewares/
        metrics.middleware.ts
    migrations/
    storage/
      dto/
        presigned-url.type.ts
      storage.module.ts
      storage.resolver.spec.ts
      storage.resolver.ts
      storage.service.spec.ts
      storage.service.ts
      storage.tokens.ts
  interfaces/
    index.ts
    Booking.ts
    ChatMessage.ts
    Notification.ts
    Payment.ts
    Review.ts
    Ride.ts
    RideRule.ts
    RideSearchFilters.ts
    RideSearchResult.ts
    User.ts
    Vehicle.ts
  modules/
    app/
      app.controller.ts
      app.module.ts
      app.service.ts
    auth/
      auth.module.ts
      auth.resolver.ts
      auth.service.ts
      dto/
        login.input.ts
        register.input.ts
        request-password-reset.input.ts
        reset-password.input.ts
      entities/
        auth.entity.ts
        email-verification-token.entity.ts
        password-reset-token.entity.ts
        resend-verification.entity.ts
        verify-email.entity.ts
      guards/
        gql-jwt.guard.ts
      strategies/
        jwt.strategy.ts
        local.strategy.ts
    bookings/
      bookings.module.ts
      bookings.resolver.ts
      bookings.service.ts
      dto/
        create-booking.input.ts
        update-booking.input.ts
      entities/
        booking.entity.ts
    chat/
      chat.module.ts
      chat.resolver.ts
      chat.service.ts
      dto/
        create-chat.input.ts
        update-chat.input.ts
      entities/
        chat.entity.ts
    email/
      email.module.ts
      email.resolver.ts
      email.service.ts
    notifications/
      notifications.module.ts
      notifications.resolver.ts
      notifications.service.ts
      dto/
        create-notification.input.ts
        update-notification.input.ts
      entities/
        notification.entity.ts
    ride-requests/
      ride-requests.module.ts
      ride-requests.resolver.ts
      ride-requests.service.ts
      dto/
        create-ride-request.input.ts
        update-ride-request.input.ts
      entities/
        ride-request.entity.ts
    rides/
      rides.module.ts
      rides.resolver.ts
      rides.service.ts
      dto/
        create-ride.input.ts
        update-ride.input.ts
      entities/
        ride.entity.ts
    user/
      user.module.ts
      user.resolver.ts
      user.service.ts
      dto/
        create-user.input.ts
        update-user.input.ts
      entities/
        user.entity.ts
        user-profile.entity.ts
    vehicles/
      vehicles.module.ts
      vehicles.resolver.ts
      vehicles.service.ts
      dto/
        create-vehicle.input.ts
        update-vehicle.input.ts
      entities/
        vehicle.entity.ts
```

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

Ridely is designed to run in containerized environments. To prepare a production build:

1. Provide environment variables (see the Environment section below).
2. Build the app with `yarn build`.
3. Launch with `node dist/main`.

Recommended infrastructure:

- PostgreSQL (or compatible) database
- Redis for caching or background jobs (optional but encouraged)
- Object storage (S3-compatible) for asset uploads
- Prometheus-compatible metrics scraper consuming the `/metrics` endpoint

## Environment

Copy `.env.example` to `.env` and adjust values as needed. Notable variables include:

- `DATABASE_URL`
- `JWT_SECRET`
- `S3_BUCKET`, `S3_REGION`, and credentials
- `RESEND_API_KEY`

Configuration schemas live under `src/infra/config` for reference.

## Contributing

1. Fork the repository and create a feature branch.
2. Commit changes with clear messages.
3. Ensure linting and tests pass locally.
4. Open a pull request describing the motivation and solution.

## License

MIT © Ridely
