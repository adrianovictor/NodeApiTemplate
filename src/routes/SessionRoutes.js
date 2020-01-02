import { Router } from 'express';

import validateSessionStoreFields from '../api/middlewares/session/validateStoreFields';
import SessionController from '../api/controllers/SessionController';

const sessionRouter = new Router();

sessionRouter.post('/sessions', validateSessionStoreFields, SessionController.store);

export default sessionRouter;