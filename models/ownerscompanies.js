module.exports = function(sequelize, DataTypes) {
    
    var ownerscompanies = sequelize.define('ownerscompanies', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        OwnerId: DataTypes.INTEGER,
        CompanyId: DataTypes.INTEGER
    },{
        paranoid: true
    });

    return ownerscompanies;
};