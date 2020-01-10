import { Router } from 'express';

import userController from '../api/controllers/UserController';
import authMiddlware from '../api/middlewares/global/auth';

const userRouter = new Router();

userRouter.get('/my-profile/:id', authMiddlware, userController.profile);

userRouter.post('/register', userController.register);

export default userRouter;