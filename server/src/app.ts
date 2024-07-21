import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express()
    .use(express.json())
    .use(cors({
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }))
    .use(routes);

export default app;