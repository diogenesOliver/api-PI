import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

class JWTHandleValidation {

    verifyJWT(req: Request, res: Response, next: NextFunction) {
        const SECRET_KEY = process.env.SECRET_TOKEN as string
        const authHeader = req.headers['x-access-token'] as string

        const token = verify(authHeader, SECRET_KEY, (err, decode) => {
            if(err)
                res.status(401).json({ msg: 'ERROR[401] - Authenticate error' })
        })

    }

}

const jwtHandleMiddlewareInstance = new JWTHandleValidation()
export { jwtHandleMiddlewareInstance }