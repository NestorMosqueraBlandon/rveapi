import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from '../routes/userRouter.js';
import adminRouter from '../routes/adminRouter.js';
import clientRouter from '../routes/clientRouter.js';
import productRouter from '../routes/productRouter.js';
import computerRouter from '../routes/computerRouter.js';
import quotationRouter from '../routes/quotationRouter.js';
import categoryRouter from '../routes/categoryRouter.js';
import orderRouter from '../routes/orderRouter.js';
import uploadRouter from '../routes/uploadRouter.js';
import config from '../helpers/config.js';
import fileUpload from 'express-fileupload';
import mercadopago from 'mercadopago';

const app = express();
mercadopago.configure({
  access_token:
    'APP_USR-4427138981263654-103114-09b1954c80295c39f47255f73b5060f2-319397311',
});

// settings
app.set('port', config.PORT);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

// Routes

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/api/v1/users', userRouter);

app.use('/api/v1/admins', adminRouter);

app.use('/api/v1/clients', clientRouter);

app.use('/api/v1/products', productRouter);

app.use('/api/v1/computers', computerRouter);

app.use('/api/v1/quotations', quotationRouter);

app.use('/api/v1/categories', categoryRouter);

app.use('/api/v1/orders', orderRouter);

app.use('/api/v1/uploads', uploadRouter);

app.post('/api/v1/config/mercadopago', (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
      },
    ],
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body);

      res.redirect(response.body.init_point);
      // res.send('a pagar');
    })
    .catch(function (error) {
      console.log(error);
    });
});

export default app;
