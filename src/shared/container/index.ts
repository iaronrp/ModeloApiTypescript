import { container } from 'tsyringe';

import IWalletsRepository from '@modules/wallets/repositories/IWalletsRepository';
import WalletsRepository from '@modules/wallets/infra/typeorm/repositories/WalletsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IWalletsRepository>(
  'WalletsRepository',
  WalletsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
