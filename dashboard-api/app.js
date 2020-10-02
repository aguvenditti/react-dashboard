const express = require('express');
const app = express();

const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(3001, () => console.log("server running on port 3001") );