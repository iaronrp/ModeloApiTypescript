import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRoutes);

export default routes;
