import Sequelize, { Model} from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            user_name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING
        }, {sequelize});

        this.addHook('beforeSave', async user => {
            const { password } = user;

            if (password) {
                user.password_hash = await bcrypt.hash(password, 8);
            }
        });

        return this;
    }

    static associate(models) {
        
    }

    checkPassword(password) {        
        return bcrypt.compare(password, this.password_hash);
    }    
}

export default User;