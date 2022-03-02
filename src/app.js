const express = require('express');
const productRoutes = require('./routes/productRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');
const functionNotAvailable = require('./middlewares/functionNotAvailable');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));

app.use('/api/productos', productRoutes);
app.use('/api/carrito', cartRoutes);

app.use(functionNotAvailable);

const server = app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`));

