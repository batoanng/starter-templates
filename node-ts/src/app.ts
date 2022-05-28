import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { json } from 'body-parser';
import {
    getSalesOrdersRouter,
    createSalesOrdersRouter,
    quoteSalesOrdersRouter,
    bookingSalesOrdersRouter
} from './routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(cors());
app.use(json());

app.use(getSalesOrdersRouter);
app.use(createSalesOrdersRouter);
app.use(quoteSalesOrdersRouter);
app.use(bookingSalesOrdersRouter);

app.use(errorHandler());

export { app };
