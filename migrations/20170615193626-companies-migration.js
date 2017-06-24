'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
    migration.createTable(
      'Companies',
        {
          Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          Name: DataTypes.STRING,
          Address: DataTypes.STRING,
          City: DataTypes.STRING,
          Country: DataTypes.STRING,
          Email: DataTypes.STRING,
          Phone: DataTypes.STRING,
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
    migration.dropTable('Companies');
    done();
  }
};
