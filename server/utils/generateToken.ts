//nos va a pedir instalar el types para este modulo
import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
    //*agregamos el secret al .env
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
};

export default generateToken;