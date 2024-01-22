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
    UserID: DataTypes.INTEGER,
    Subscription: DataTypes.STRING,
    MonthlyRevenue: DataTypes.INTEGER,
    JoinDate: DataTypes.STRING,
    LastPayment: DataTypes.STRING,
    Country: DataTypes.STRING,
    Age: DataTypes.INTEGER,
    Gender: DataTypes.STRING,
    Device: DataTypes.STRING,
    PlanDuration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Netflix',
  });
  return Netflix;
};