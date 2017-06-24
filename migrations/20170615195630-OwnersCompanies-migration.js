'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
    migration.createTable(
      'OwnersCompanies',
        {
          Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          OwnerId: DataTypes.INTEGER,
          CompanyId: DataTypes.INTEGER,
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
  migration.dropTable('OwnersCompanies');
    done();
  }
};
