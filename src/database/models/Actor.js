/* id, first_name string, last_name string, rating dec3.1 */
const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) =>{

    const alias = "Actor"
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        first_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        last_name : {
            type : dataTypes.STRING,
            allowNull : false,
        },
        rating : {
            type : dataTypes.DECIMAL(3,1),
            defaultValue : null
        }
    }

    const config = {
        tableName : "actors",
        timestamps : true,
        underscored : true
    }

    const Actor = sequelize.define(alias, cols, config);
    return Actor
}
