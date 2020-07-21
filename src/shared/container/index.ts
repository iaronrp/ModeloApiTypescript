import { container } from 'tsyringe';

import IAppointsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointsRepository>(
  'AppointsRepository',
  AppointsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
