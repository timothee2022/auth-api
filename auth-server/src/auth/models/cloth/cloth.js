'use strict';

const clothModel = (sequelize, DataTypes) => sequelize.define('Cloth', {
  name: {
    type: DataTypes.STRING,
    required: true,
  },

  color: {
    type: DataTypes.STRING,
    required: true },

  size: {
    type: DataTypes.STRING,
    required: true },
});

module.exports = clothModel;
