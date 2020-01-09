import { Router } from 'express';

import validateSessionStoreFields from '../api/middlewares/session/validateStoreFields';
import SessionController from '../api/controllers/SessionController';

const sessionRouter = new Router();

/**
 * @swagger
 * /sessions:
 *   post:
 *    description:  generate user's serssions
 *   consumes:
 *    - "application/json"
 *   responses:
 *     200:
 *       description: "token with created session"
 */
sessionRouter.post('/sessions', validateSessionStoreFields, SessionController.store);

export default sessionRouter;