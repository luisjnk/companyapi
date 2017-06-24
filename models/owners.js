module.exports = function(sequelize, DataTypes) {
    
    var owners = sequelize.define('owners', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: DataTypes.STRING,
        Email: DataTypes.STRING
    },{
        paranoid: true
    });

    return owners;
};