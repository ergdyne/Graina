'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('player', {
      pk_player: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      r: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      g: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      b: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        //set postgres to handle the timestamping
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('player');
  }
};