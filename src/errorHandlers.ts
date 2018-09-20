import { NextFunction, Request, Response } from 'express';

// TODO: Improve error handling
export function catchAllErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(500);
    res.render('An error occured processing your request', { error: err });
}
