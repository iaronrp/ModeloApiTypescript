import { Router } from 'express';
import walletsRouter from '@modules/wallets/infra/http/routes/wallets.routes';

const routes = Router();

routes.use('/wallets', walletsRouter);

export default routes;
