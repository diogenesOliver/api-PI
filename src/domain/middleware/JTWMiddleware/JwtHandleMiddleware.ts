import { Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

class JWTHandleValidation {

    verifyJWT(req: any, res: Response, next: NextFunction) {
        const SECRET_KEY = process.env.SECRET_TOKEN as string
        const authHeader = req.headers['x-access-token'] as string
        const token = authHeader && authHeader.split(" ")[0]

        if (!token)
            return res.status(401).json({ msg: "ERROR[401] - unauthorized" })

        verify(token, SECRET_KEY, (err: any, user: any) => {
            if (err)
                return res.status(403).json({ msg: "Forbiden" })

            req.user = user
            next()
        })

    }

}

const jwtHandleMiddlewareInstance = new JWTHandleValidation()
export { jwtHandleMiddlewareInstance }