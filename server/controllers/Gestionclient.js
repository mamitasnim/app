import Gestion from "../models/Gestionclientmodel.js";
export const getGestion = async(req, res) => {
    try {
        const gestionclient = await Gestion.findAll({
            attributes:['id','raison','matricule','ville','rue','num','code_postale','activite','situation_fiscale','type']
        });
        res.json(gestionclient);
    } catch (error) {
        console.log(error);
    }
}
export const Adgestion = async(req, res) => {
    const { raison } = req.body;
   if(!raison)  return res.status(400).json({msg: " Champ obligatoire"});
   const { matricule } = req.body;
   if(!matricule)  return res.status(400).json({msg: " Champ obligatoire"});
   const { ville } = req.body;
   if(!ville)  return res.status(400).json({msg: " Champ obligatoire"});
   const { rue } = req.body;
   if(!rue)  return res.status(400).json({msg: " Champ obligatoire"});
   const { num } = req.body;
   if(!num)  return res.status(400).json({msg: " Champ obligatoire"});
   const { code_postale } = req.body;
   if(!code_postale)  return res.status(400).json({msg: " Champ obligatoire"});
   const { activite} = req.body;
   if(!activite)  return res.status(400).json({msg: " Champ obligatoire"});
   const { situation_fiscale} = req.body;
   if(!situation_fiscale)  return res.status(400).json({msg: " Champ obligatoire"});
   const { type} = req.body;
   if(!type)  return res.status(400).json({msg: " Champ obligatoire"});
    try {
        await Gestion.create({
            raison:raison,
            matricule:matricule,
            ville:ville,
            rue:rue,
            num:num,
            code_postale:code_postale,
            activite:activite,
            situation_fiscale:situation_fiscale,
            type:type,

           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Suppgestion = async(req, res) => {
    const {id} = req.body;
    try {
     await Gestion.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
