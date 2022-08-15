import Paramgeneral from "../models/Paramgeneral.js";
export const getparamgeneral = async(req, res) => {
    try {
        const paramg = await Paramgeneral.findAll({
            attributes:['id','timbrefiscale','tva']
        });
        res.json(paramg);
    } catch (error) {
        console.log(error);
    }
}
export const Addparamg = async(req, res) => {
    const { timbrefiscale } = req.body;
    const { tva } = req.body;
   if(!timbrefiscale) { return res.status(400).json({msg: " Champ obligatoire"});}
   if(!tva) { return res.status(400).json({msg: " Champ obligatoire"});}

    try {
        await Paramgeneral.create({
           timbrefiscale,
            tva
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}