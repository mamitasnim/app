import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Collab = db.define('collab',{
    nom:{
        type: DataTypes.STRING
    },
    cin:{
        type: DataTypes.STRING
    },
    ville:{
        type: DataTypes.STRING
    },
    rue:{
        type: DataTypes.STRING
    },
    rues:{
        type: DataTypes.STRING
    },
    code_postale:{
        type: DataTypes.STRING
    },
    activité:{
        type: DataTypes.STRING
    },
    tel:{
        type: DataTypes.STRING
    },
    fax:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    champ1:{
        type: DataTypes.STRING
    },
    champ2:{
        type: DataTypes.STRING
    },
    champ3:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Collab;