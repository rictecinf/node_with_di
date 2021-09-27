import 'reflect-metadata';

import express from 'express';
import { router } from './router';

const main = async () => {
  const app = express();

  app.use(router);

  app.listen(3000, () => {
    console.log('Server started 3000');
  });
}

main().catch(err => {
  console.error(err);
});