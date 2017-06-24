module.exports = function(sequelize, DataTypes) {
    
    var companies = sequelize.define('companies', {
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
       Phone: DataTypes.INTEGER,
    },{
        paranoid: true
    });

    return companies;
};