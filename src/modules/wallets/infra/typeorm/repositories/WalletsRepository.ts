import { getRepository, Repository } from 'typeorm';

import IWalletsRepository from '@modules/wallets/repositories/IWalletsRepository';
import ICreateWalletDTO from '@modules/wallets/dtos/ICreateWalletDTO';

import Wallet from '@modules/wallets/infra/typeorm/entities/Wallet';

class WalletsRepository implements IWalletsRepository {
  private ormRepository: Repository<Wallet>;

  constructor() {
    this.ormRepository = getRepository(Wallet);
  }

  public async findWallet(walletCode: string): Promise<Wallet | undefined> {
    const findWallet = await this.ormRepository.findOne({
      where: { walletCode },
    });

    return findWallet;
  }

  public async create({ walletCode }: ICreateWalletDTO): Promise<Wallet> {
    const wallet = this.ormRepository.create({ walletCode });

    await this.ormRepository.save(wallet);

    return wallet;
  }
}

export default WalletsRepository;
