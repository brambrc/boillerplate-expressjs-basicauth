'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Example extends Model {

    static associate(models) {
      this.hasMany(models.another_example)
    }
    
  };
  
  Example.init({
    
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20),
    },

    uuid: DataTypes.UUID,
    name: DataTypes.STRING(100)

  }, {
    sequelize,
    modelName: 'example',
    tableName: 'example',
    timestamps: true,
    paranoid: true,
    underscored: true
  });
  
  return User;

};