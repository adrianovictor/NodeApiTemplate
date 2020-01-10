import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    /** Registra um novo aluno */
    async register(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            user_name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required()
        });
        
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ message: 'Preencha os campos corretamente.' });
        }    

        const { user_name, email } = req.body;

        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(409).json({ message: 'e-mail já cadastrado' });
        }

        const userNameExists = await User.findOne({ where: { user_name } });
        if (userNameExists) {
           return res.status(409).json({ message: 'nome de usuário já registrado' });
        }
        
        const { id } = await User.create(req.body);
        
        return res.status(200).json({ result: 'ok', id: id });
    }

    /** Lista os dados do usuário */
    async profile(req, res) {        
        const user = await User.findOne({ 
            where: { id: req.params.id }, 
            attributes: ['id', 'name', 'user_name', 'email']
        });

        if (!user) {
            return res.status(404).json({ message: 'não foi possível identificar o usuário' });
        }        

        return res.status(200).json({ profile: user });
    }
}

export default new UserController();