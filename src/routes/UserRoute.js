import { Router } from 'express';

import userController from '../api/controllers/UserController';
import authMiddlware from '../api/middlewares/global/auth';

const userRouter = new Router();

/** 
 * @swagger
 *   /users/self/profile/{id}:
 *     get:
 *       tags:
 *         - Users
 *       description: 
 *         "Get profile from current logged user."
 */
userRouter.get('/users/self/profile/:id', authMiddlware, userController.profile);

/** 
 * @swagger 
 *   /users/register:
 *     post:
 *       tags:
 *         - Users
 *       description: 
 *         "Register a new user"
 *       parameters:
 *         - name: name
 *           in: path
 *           required: true
 *           type: string
 *         - name: user_name
 *           in: path
 *           required: true* 
 *           type: string
 *         - name: email
 *           in: path
 *           type: string
 *           required: true
 *         - name: password
 *           in: path
 *           required: true
 *           type: string
 *       Responses:
 *         200: 
 *           description: Successfully created
 *         400:
 *           description:
 *         409:
 *           description:  
 */
userRouter.post('/users/register', userController.register);

export default userRouter;