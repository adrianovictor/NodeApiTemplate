import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({
            where: [
                { user_name: username }
            ]
        });
        
        if (!user) {
            return res.status(401).json({
                message: `User with user name ${username} not found`,
                userMessage: `Usuário com o nome de usuário ${username} não foi encontrado`,
                code: 'ERROR_USER_NOT_FOUND'
            });
        }

        const passwordMatch = await user.checkPassword(password);        
        if (!passwordMatch) {
            return res.status(401).json({
                message: 'Password does not match',
                userMessage: 'Senha incorreta, tente novamente',
                code: 'ERROR_UNAUTHORIZE'
            });            
        }

        const { id, name } = user;
        const { expiresIn, secret } = authConfig;
        
        return res.json({
            user: {
                id,
                name
            },
            token: jwt.sign({ id }, secret, {
                expiresIn
            })
        });
    }
}

export default new SessionController();