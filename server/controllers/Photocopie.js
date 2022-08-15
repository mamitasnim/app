import Photocopie from "../models/Photocopie.js";


export const getphoto = async(req, res) => {
    try {
        const recette = await Photocopie.findAll({
            attributes:['id','prixphoto']
        });
        res.json(recette);
    } catch (error) {
        console.log(error);
    }
}
export const Adphoto = async(req, res) => {
    const { prixphoto } = req.body;
   if(!prixphoto) { return res.status(400).json({msg: " Champ obligatoire"});}
   
    try {
        await Photocopie.create({
           prixphoto:prixphoto,
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
