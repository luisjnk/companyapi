'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
  migration.createTable(
        'Owners',
        {
          Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          Name: DataTypes.STRING,
          Email: DataTypes.STRING,
          CreatedAt: {
            type: DataTypes.DATE
          },
          UpdatedAt: {
            type: DataTypes.DATE
          },
          deletedAt: {
            type: DataTypes.DATE
          }
        });
    done();
  },

  down: function (migration, DataTypes, done) {
    migration.dropTable('Owners');
    done();
  }
};
