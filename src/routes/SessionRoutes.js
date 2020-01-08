import { Router } from 'express';

import validateSessionStoreFields from '../api/middlewares/session/validateStoreFields';
import SessionController from '../api/controllers/SessionController';

const sessionRouter = new Router();

/**
/**
* @swagger
* /sessions:
*   post:
*     tags:
*       - Users
*     name: Session
*     summary: Logs in a user
*     consumes:
*       - application/json
 */
sessionRouter.post('/sessions', validateSessionStoreFields, SessionController.store);

export default sessionRouter;