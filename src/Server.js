import 'dotenv/config';
import app from './App';

app.listen(process.env.PORT, () => {
    console.log('Sever is running!');
});