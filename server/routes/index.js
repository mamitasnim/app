import express from "express";
import { getUsers, Register, Login ,Addutil,getutil,Supputil,Modifutil,Logout} from "../controllers/Users.js";
import {getparamgeneral, Addparamg} from '../controllers/Paramgeneral.js';
import {getGreffier, Addgreffier, Suppgreffier,Modifgreffier} from '../controllers/Greff.js';
import { getEmpdossier,Addossier,Suppdossier,Modifdossier } from "../controllers/Empdossier.js";
import { gettypedossier,Adtypedossier,Supptypedossier,Modiftypedossier } from "../controllers/Typedossier.js";
import { gettimbre,Adtimbre,Supptimbre,Modiftimbre} from "../controllers/Timbre.js";
import { getrecette,Adrecette, Supprecette,Modifrecette } from "../controllers/Recfinance.js";
import { getphoto,Adphoto } from "../controllers/Photocopie.js";
import { getGestion,Adgestion ,Suppgestion} from "../controllers/Gestionclient.js";
import { Addcollab, getcollab, Modifcollab, Suppcollab } from "../controllers/Collaborateur.js";
import { getmontant,admontant} from "../controllers/Transport.js";
import { Addprimegreffier, getPrimegreffier, Modifprimegreffier, Suppprimegreffier, } from "../controllers/Primegreffier.js";
import { Addtrib, gettrib, Modiftrib, Supptrib } from "../controllers/Tribunaux.js";
import { Adhono, gethono, Modifhono, Supphono } from "../controllers/Honoraire.js";
import { Addadmi, getadmi, Modifadmi, Suppadmi } from "../controllers/Administration.js";
import  { refreshToken} from "../controllers/RefreshToken.js";
import { Addemandeur, getdemandeur, Suppdemandeur } from "../controllers/Demandeur.js";
import { Addadversaire, getadversaire, Suppadversaire } from "../controllers/Adversaire.js";
import { gettache, Addtache, Addtaches, SuppTache } from "../controllers/Taches.js";
import { getdossier ,Adddossier, searchdossier,Suppdossiers} from "../controllers/Dossier.js";
import { Archiver } from "../controllers/Archive.js";

const router = express.Router();
//users
router.get('/users', getUsers);
router.post('/register', Register);
router.post('/connecter', Login);
router.get('/getutil',getutil);
router.post('/addutil', Addutil);
router.post('/supputil', Supputil);
router.post('/modifutil', Modifutil);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
//empdossier
router.get('/empdossier',getEmpdossier);
router.post('/addossier', Addossier);
router.post('/supdossier', Suppdossier);
router.post('/modifdossier', Modifdossier);
//typedossier
router.get('/typedossier',gettypedossier);
router.post('/adtypedossier', Adtypedossier);
router.post('/suptypedossier', Supptypedossier);
router.post('/modiftypedossier', Modiftypedossier);
//timbre
router.get('/timbre',gettimbre);
router.post('/adtimbre', Adtimbre);
router.post('/suptimbre', Supptimbre);
router.post('/modiftimbre', Modiftimbre);
//recette
router.get('/recette',getrecette);
router.post('/adrecette', Adrecette);
router.post('/suprecette', Supprecette);
router.post('/modifrecette', Modifrecette);
//photo
router.get('/photo',getphoto);
router.post('/adphoto', Adphoto);
//gestion
router.get('/gestion',getGestion);
router.post('/adgestion', Adgestion);
router.post('/supgestion', Suppgestion);
//parametres générales
router.get('/paramgeneral',getparamgeneral);
router.post('/addparamg', Addparamg);
//Greffier
router.get('/greffier', getGreffier);
router.post('/addgreffier', Addgreffier);
router.post('/suppgreffier', Suppgreffier);
router.post('/modifgreffier', Modifgreffier);
//collab
router.get('/getcollab',getcollab);
router.post('/addcollab', Addcollab);
router.post('/suppcollab', Suppcollab);
router.post('/modifcollab', Modifcollab);
//transport
router.get('/montant',getmontant);
router.post('/admontant',admontant );
//prime greffier
router.get('/primegreff', getPrimegreffier);
router.post('/addprimegreff', Addprimegreffier);
router.post('/suppprimegreff', Suppprimegreffier);
router.post('/modifprimegreff', Modifprimegreffier);
//trib
router.get('/gettrib', gettrib);
router.post('/adtrib', Addtrib);
router.post('/suptrib', Supptrib);
router.post('/modiftrib', Modiftrib);
//honoraire
router.get('/gethono', gethono);
router.post('/adhono', Adhono);
router.post('/suphono', Supphono);
router.post('/modifhono', Modifhono);
//administration
router.get('/getadmi', getadmi);
router.post('/addadmi', Addadmi);
router.post('/suppadmi', Suppadmi);
router.post('/modifadmi', Modifadmi);
//demandeur
router.get('/demandeur', getdemandeur);
router.post('/addemandeur', Addemandeur);
router.post('/suppdemandeur', Suppdemandeur);
//Adversaire
router.get('/adversaire', getadversaire);
router.post('/addadversaire', Addadversaire);
router.post('/suppadversaire', Suppadversaire);
//Taches
router.get('/taches', gettache);
router.post('/addtache', Addtache);
router.post('/addtaches', Addtaches);
router.post('/supptache', SuppTache);
//Recherche Dossier
router.get('/getdossier',getdossier);
router.post('/adddossier',Adddossier);
router.post('/suppdossiers',Suppdossiers);
router.get('/searchdossier', searchdossier);
//Archiver dossier
router.post('/archive',Archiver);

export default router;