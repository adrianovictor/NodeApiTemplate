import { Router } from 'express';

import SwaggerConfig from '../config/swaggerConfig';

const swaggerRouter = new Router();

swaggerRouter.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(SwaggerConfig);
});

export default swaggerRouter;