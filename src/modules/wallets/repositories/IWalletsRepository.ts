import ICreateWalletDTO from '@modules/wallets/dtos/ICreateWalletDTO';
import Wallet from '../infra/typeorm/entities/Wallet';

export default interface IWalletsRepository {
  create(data: ICreateWalletDTO): Promise<Wallet>;
  findWallet(wallet: string): Promise<Wallet | undefined>;
}
