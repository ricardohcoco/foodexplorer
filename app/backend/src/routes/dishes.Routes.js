const { Router } = require('express');
const DishesController = require('../controllers/dishController');

const dishesRoutes = Router();
const dishesController = new DishesController();

dishesRoutes.post('/', dishesController.create);
dishesRoutes.get('/', dishesController.read);
dishesRoutes.get('/:id', dishesController.readById);

module.exports = dishesRoutes;
