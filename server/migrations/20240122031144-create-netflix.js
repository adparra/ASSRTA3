'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Netflixes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER
      },
      Subscription: {
        type: Sequelize.STRING
      },
      MonthlyRevenue: {
        type: Sequelize.INTEGER
      },
      JoinDate: {
        type: Sequelize.STRING
      },
      LastPayment: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Age: {
        type: Sequelize.INTEGER
      },
      Gender: {
        type: Sequelize.STRING
      },
      Device: {
        type: Sequelize.STRING
      },
      PlanDuration: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Netflixes');
  }
};