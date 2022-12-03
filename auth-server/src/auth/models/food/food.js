'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  vitamins: {
    type: DataTypes.INTEGER,
    required: true,
  },
  type: {
    type: DataTypes.ENUM('fruit', 'vegetable', 'protein'),
    required: true },
});

module.exports = foodModel;
