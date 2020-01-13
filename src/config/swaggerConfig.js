import 'dotenv/config';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Exemplo de documentação para os métodos de uma API com Swagger'
    },
    host: `localhost:${process.env.PORT}`,
    basePath: '/',
    securityDefinitions: {
        bearerAuth: {
            type: 'apikey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./src/routes/*.js'],
};

export default swaggerJSDoc(options);