import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Gestionclient = db.define('gestionclient',{
    raison:{
        type: DataTypes.STRING
    },
    matricule:{
        type: DataTypes.INTEGER
    },
    ville:{
        type: DataTypes.STRING
    },
    rue:{
        type: DataTypes.STRING
    },
    num:{
        type: DataTypes.INTEGER
    },
    code_postale:{
        type: DataTypes.INTEGER
    },
    activite:{
        type: DataTypes.STRING
    },
    situation_fiscale:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default Gestionclient;
(async()=>{
    await db.sync();
})();