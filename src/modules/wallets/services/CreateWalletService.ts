import { injectable, inject } from 'tsyringe';
import Wallet from '@modules/wallets/infra/typeorm/entities/Wallet';
import AppError from '@shared/errors/AppError';

import IWalletsRepository from '@modules/wallets/repositories/IWalletsRepository';

interface IRequest {
  walletCode: string;
}

@injectable()
class CreateWalletService {
  constructor(
    @inject('WalletsRepository')
    private walletsRepository: IWalletsRepository,
  ) {}

  public async execute({ walletCode }: IRequest): Promise<Wallet> {
    const findWallet = await this.walletsRepository.findWallet(walletCode);

    if (findWallet) {
      throw new AppError('This wallet exists');
    }

    const wallet = await this.walletsRepository.create({
      walletCode,
    });

    return wallet;
  }
}

export default CreateWalletService;
