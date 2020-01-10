import 'dotenv/config';

import express from 'express';
import Youch from 'youch';
import swaggerUI  from 'swagger-ui-express';
import swaggerConfig from './config/swaggerConfig';

import sessionRouter from './routes/SessionRoutes';
import swaggerRouter from './routes/SwaggerRoute';
import userRouter from './routes/UserRoute';

import 'express-async-errors';
import './database/index';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }
    
    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
        this.server.use(swaggerRouter);
        this.server.use(sessionRouter);
        this.server.use(userRouter);
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            if (process.env.NODE_ENV === 'development') {
              const error = await new Youch(err, req).toJSON();
              return res.json(error);
            }

            return res.status(500).json({ error: 'Internal server error' });
        }); 
    }
}

export default new App().server;