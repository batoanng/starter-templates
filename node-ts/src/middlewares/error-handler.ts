import express, { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';

export function errorHandler(): express.ErrorRequestHandler {
    return (error: Error, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof CustomError) {
            return res.status(error.status).json({ error: error.message });
        }
        console.error(error);
        return res.status(400).json({
            error: 'Something went wrong'
        });
    };
}
