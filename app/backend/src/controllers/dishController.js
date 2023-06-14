const knex = require('../database/knex');

class DishesController {
  async create(req, res) {
    const { name, ingredients, price, category } = req.body;
    const existingDish = await knex('dishes')
      .select('id')
      .where('name', name)
      .first();

    if (existingDish) {
      return res.status(400).json({ error: 'Dish already exists' });
    }

    const [data] = await knex('dishes').insert({
      name,
      ingredients,
      price,
      category,
    });

    res.status(201).json({ id: data, name, ingredients, price, category });
  }

  async read(req, res) {
    const dishes = await knex('dishes').select(
      'id',
      'name',
      'ingredients',
      'price',
      'category'
    );
    res.status(200).json(dishes);
  }

  async readById(req, res) {
    const dishId = req.params.id;

    const dish = await knex('dishes')
      .select('id', 'name', 'ingredients', 'price', 'category')
      .where('id', dishId)
      .first();

    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  }
}

module.exports = DishesController;
