const { Router } = require('express');

const userRouter = require('./users.Routes');
const dishRouter = require('./dishes.Routes');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/dishes', dishRouter);



module.exports = routes;
