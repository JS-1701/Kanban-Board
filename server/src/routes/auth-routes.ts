import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
const { username, password } = req.body;
const user = await User.findOne({where: {username}});
if (user) {
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (passwordIsValid) {
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({username}, secretKey, {expiresIn: '1h'});
    return res.json({token});
  }
}
return res.sendStatus(401);
  };

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
