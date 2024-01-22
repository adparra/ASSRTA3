'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Netflixes', {
      UserID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Subscription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      MonthlyRevenue: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      JoinDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LastPayment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Device: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PlanDuration: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Netflixes');
  }
};