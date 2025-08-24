
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export function security(app) {
  app.use(helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "img-src": ["'self'", 'data:', 'https:'],
        "media-src": ["'self'", 'https:'],
      }
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
  }));

  const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
  app.use(limiter);
}
