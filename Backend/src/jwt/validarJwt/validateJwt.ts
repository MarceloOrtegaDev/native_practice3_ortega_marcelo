import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../models/userModel';
import { connectDb } from '../../database/db';
import { userId } from '../../interfaces/user.interface';

export const validarJwt = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json('No se encontró el token');
        }
        const decoded = jwt.verify(token, 'MiSecretoJEJEJEJE') as userId; 
        await connectDb();
        const user = await userModel.findById(decoded.userId);
        if (!user) {
            res.status(401).json('Token invalido');
        }

        if (user) {
            req.user = user;
        } else {
            res.status(401).json('Token invalido');
        }

        next();
    } catch (error) {
            res.status(500).json({
            message: 'Error en el servidor'
        });
    }
};