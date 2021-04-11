import { Router } from 'express';
import router from './todo';

const routes = Router();

routes.use('/todo', router)

export default routes