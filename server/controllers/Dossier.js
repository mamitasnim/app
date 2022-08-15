import Collab from "../models/CollabModel.js";
import Dossier from "../models/Dossiermodal.js";
import pkg from "sequelize";

   
export const getdossier = async(req, res) => {
    try {
        const dossier = await Dossier.findAll({
            attributes:['id','num_affaire','emplacement','client','tel','mission','adversaire','reste']
        });
        res.json(dossier);
    } catch (error) {
        console.log(error);
    }
}

export const Suppdossiers = async(req, res) => {
    const {id} = req.body;
   // if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
     await Dossier.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}


export const Modifcollab = async (req, res) => {
    const {nom,cin,ville,rue,rues,code_postale,activité,tel,fax,email, champ1,champ2,champ3 } = req.body;
    if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!cin)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!ville)  return res.status(400).json({msg: " Champ obligatoire"});
    
    try {
        await Collab.update({
            nom:nom,
            cin:cin,
            ville:ville,
            rue:rue,
            rues:rues,
            code_postale:code_postale,
            activité:activité,
            tel:tel,
            fax:fax, 
            email:email,
            champ1:champ1,
            champ2:champ2,
            champ3:champ3,
     },
     {where: {id: req.body.id} });
     return res.status(201).send({ 
        user: userDetails,
        status: 200
    });
    res.json({msg: "update faite"});
    } catch (error) {
        console.log(error);
    }
}






export const Adddossier= async(req, res) => {
   const {num_affaire,emplacement,client,tel,mission,adversaire,reste} = req.body;
   if(!num_affaire)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!emplacement)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!client)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!tel)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!mission)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!adversaire)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!reste)  return res.status(400).json({msg: " Champ obligatoire"});
    
  /*  const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);*/
    
    try {
        await Dossier.create({
           
            num_affaire:num_affaire,
            emplacement:emplacement,
            client:client,
            tel:tel,
            mission:mission,
            adversaire:adversaire,
            reste:reste,        
        });
 res.json({msg: "addision faite"});
    } catch (error) {
        console.log(error);
    }}

export const searchdossier = async(req, res) =>{
        const { Op }=pkg;
        const search = req.query.search_query || "";
        const totalRows = await Dossier.count({
            where:{
                [Op.or]: [{num_affaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {emplacement:{
                    [Op.like]: '%'+search+'%'
                }},
                {client:{
                    [Op.like]: '%'+search+'%'
                }},
                {tel:{
                    [Op.like]: '%'+search+'%'
                }},
                {mission:{
                    [Op.like]: '%'+search+'%'
                }},
                {adversaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {reste:{
                    [Op.like]: '%'+search+'%'
                }}]
            }
        }); 
        const result = await Dossier.findAll({
            where:{
                [Op.or]: [{num_affaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {emplacement:{
                    [Op.like]: '%'+search+'%'
                }},
                {client:{
                    [Op.like]: '%'+search+'%'
                }},
                {tel:{
                    [Op.like]: '%'+search+'%'
                }},
                {mission:{
                    [Op.like]: '%'+search+'%'
                }},
                {adversaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {reste:{
                    [Op.like]: '%'+search+'%'
                }}]
            },
            order:[
                ['id', 'DESC']
            ]
        });
        res.json({
            result: result,
            totalRows: totalRows,
        });
    }
    