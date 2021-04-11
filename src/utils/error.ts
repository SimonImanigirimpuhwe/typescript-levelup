import { Response } from "express";

const error = (res:Response, statusCode: number, error: unknown): unknown => {
    return res.status(statusCode).json(error);
};

export { error };