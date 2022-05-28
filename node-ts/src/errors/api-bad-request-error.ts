import { CustomError } from './custom-error';

export class ApiBadRequestError extends CustomError {
    status = 400;

    constructor(message: string) {
        super(message);
    }
}
