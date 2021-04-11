import { Response } from "express";

const success = (res:Response, statusCode: number, message: unknown): unknown => {
    return res.status(statusCode).json(message);
};

export { success }