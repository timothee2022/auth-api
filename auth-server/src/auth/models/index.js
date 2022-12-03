'use strict';

const userModel = require('./users.js');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');

const { Sequelize, DataTypes } = require('sequelize');
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
}
