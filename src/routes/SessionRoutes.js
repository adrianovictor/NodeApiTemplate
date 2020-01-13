import { Router } from 'express';

import validateSessionStoreFields from '../api/middlewares/session/validateStoreFields';
import SessionController from '../api/controllers/SessionController';

const sessionRouter = new Router();

/**
 * @swagger
 * /auth/sessions:
 *   post:
 *     tags:
 *       - Authentication
 *     description:  generate user's serssions
 *   consumes:
 *     - "application/json"
 *   parameters:
 *     - name: username
 *       in: path
 *       required: true
 *       type: string
 *     - name: password
 *       in: path
 *       required: true
 *       type: string
 *   responses:
 *     200:
 *       description: "token with created session"
 */
sessionRouter.post('/auth/sessions', validateSessionStoreFields, SessionController.store);

export default sessionRouter;
