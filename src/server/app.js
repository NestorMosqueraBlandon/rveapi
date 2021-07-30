import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRouter from '../routes/userRouter.js';

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/v1/users', userRouter);

export default app;