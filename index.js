const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
require('dotenv').config();
const cors = require('cors');

const app = express();
const corsOptions = ({
    origin: ['http://localhost:8000', 'http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
})

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_STRING);
mongoose.connection.once('open', () => console.log('Now connected to Database'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/b8/users', userRoutes);
app.use('/b8/products', productRoutes);
app.use('/b8/cart', cartRoutes);
app.use('/b8/orders', orderRoutes);




if(require.main === module) {
	app.listen(process.env.PORT, () => console.log(`API is now online on port ${process.env.PORT}`));
};
module.exports = {app, mongoose};