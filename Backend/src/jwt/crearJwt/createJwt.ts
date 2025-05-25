import jwt from "jsonwebtoken"
import { userId } from "../../interfaces/user.interface";

export const createJwt = (userId:userId) => {
    return new Promise((resolve, reject) => {
        try {
            const payLoad = { userId };

            jwt.sign(payLoad, 'MiSecretoJEJEJEJE', {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) {
                    reject('No se pudo generar el token');
                } else {
                    resolve(token);
                }
            });
        } catch (error) {
            console.log(error);
        }
    });
};