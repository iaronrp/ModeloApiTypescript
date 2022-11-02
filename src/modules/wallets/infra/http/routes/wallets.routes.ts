import { Router } from 'express';

import WalletController from '@modules/wallets/infra/http/controllers/WalletController';

const walletsRouter = Router();
const walletsController = new WalletController();

walletsRouter.post('/', walletsController.create);

export default walletsRouter;
