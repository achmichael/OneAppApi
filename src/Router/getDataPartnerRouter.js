import express from "express";
import { addDataPartner, datasPartner, getDataPartner, removeDataPartner, updateDataPartner } from "../Controller/DataPartnerController.js";
import { validateDataPartnerRegister, validatePartnerId } from "../Middleware/validateDataPartner.js";
export const datasPartnerRouter = express.Router();
datasPartnerRouter.get('/' ,datasPartner);
datasPartnerRouter.post('/', validateDataPartnerRegister ,addDataPartner);
datasPartnerRouter.get('/:partner_id', validatePartnerId ,getDataPartner);
datasPartnerRouter.put('/:partner_id', validatePartnerId ,validateDataPartnerRegister ,updateDataPartner);
datasPartnerRouter.delete('/:partner_id', validatePartnerId, removeDataPartner);