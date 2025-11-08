import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { NextFunction, Request, Response } from 'express';
import { Histogram } from 'prom-client';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(
    @InjectMetric('http_request_duration_seconds')
    private readonly httpRequestDuration: Histogram<
      'method' | 'route' | 'status_code'
    >,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const end = this.httpRequestDuration.startTimer({
      method: req.method,
      route: req.route?.path ?? req.path,
    });

    res.on('finish', () => end({ status_code: res.statusCode }));

    next();
  }
}
