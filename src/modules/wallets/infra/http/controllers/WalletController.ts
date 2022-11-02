import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateWalletService from '@modules/wallets/services/CreateWalletService';

export default class WalletController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { walletCode } = request.body;

    const createWallet = container.resolve(CreateWalletService);

    const wallet = await createWallet.execute({
      walletCode,
    });

    return response.json(wallet);
  }
}
