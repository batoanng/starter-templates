import { CustomError } from './custom-error';

export class ApiNotFoundError extends CustomError {
    status = 404;

    constructor(message: string) {
        super(message);
    }
}
