import Transport from "../models/Transportmodel.js";


export const getmontant = async(req, res) => {
    try {
        const transport = await Transport.findAll({
            attributes:['id','montant']
        });
        res.json(transport);
    } catch (error) {
        console.log(error);
    }
}
export const admontant = async(req, res) => {
    const { montant } = req.body;
   if(!montant) { return res.status(400).json({msg: " Champ obligatoire"});}
   
    try {
        await Transport.create({
           montant:montant,
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
