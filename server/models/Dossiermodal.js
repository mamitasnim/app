import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Dossier = db.define('dossier',{
    num_affaire:{
        type: DataTypes.STRING  
    },
    emplacement:{
        type: DataTypes.STRING
    },
    client:{
        type: DataTypes.STRING
    },
    tel:{
        type: DataTypes.STRING
    },
   
    mission:{
        type: DataTypes.STRING
    },
    adversaire:{
        type: DataTypes.STRING
    },
    reste:{
        type: DataTypes.TEXT
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Dossier;
