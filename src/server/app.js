import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRouter from '../routes/userRouter.js';
import adminRouter from '../routes/adminRouter.js';
import clientRouter from '../routes/clientRouter.js';
import productRouter from '../routes/productRouter.js';
import config from '../helpers/config.js';

const app = express();

// settings
app.set('port', config.PORT);

// middlewares
// app.use(cors({
//     origin: "http://localhost:3000"
// }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/v1/users', userRouter);

app.use('/api/v1/admins', adminRouter);

app.use('/api/v1/clients', clientRouter);

app.use('/api/v1/products', productRouter);

export default app;