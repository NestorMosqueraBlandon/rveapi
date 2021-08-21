import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRouter from '../routes/userRouter.js';
import adminRouter from '../routes/adminRouter.js';
import clientRouter from '../routes/clientRouter.js';
import productRouter from '../routes/productRouter.js';
import categoryRouter from '../routes/categoryRouter.js';
import config from '../helpers/config.js';
import fileUpload from 'express-fileupload';

const app = express();

// settings
app.set('port', config.PORT);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload())
// Routes

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/v1/users', userRouter);

app.use('/api/v1/admins', adminRouter);

app.use('/api/v1/clients', clientRouter);

app.use('/api/v1/products', productRouter);

app.use('/api/v1/categories', categoryRouter);

export default app;