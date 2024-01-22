'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Netflix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Netflix.init({
    UserID: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Subscription: {
      type:DataTypes.STRING
    },
    MonthlyRevenue: {
      type:DataTypes.INTEGER
    },
    JoinDate: {
      type:DataTypes.STRING
    },
    LastPayment: {
      type:DataTypes.STRING
    },
    Country: {
      type:DataTypes.STRING
    },
    Age: {
      type:DataTypes.INTEGER
    },
    Gender: {
      type:DataTypes.STRING
    },
    Device: {
      type:DataTypes.STRING
    },
    PlanDuration: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Netflix',
  });
  return Netflix;
};