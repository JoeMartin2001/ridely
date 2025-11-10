<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
