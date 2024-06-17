import express from "express";
import { addDataPartner, datasPartner, getDataPartner, removeDataPartner, updateDataPartner } from "../Controller/DataPartnerController.js";
export const datasPartnerRouter = express.Router();
datasPartnerRouter.get('/', datasPartner);
datasPartnerRouter.post('/', addDataPartner);
datasPartnerRouter.get('/:partner_id', getDataPartner);
datasPartnerRouter.put('/:partner_id', updateDataPartner);
datasPartnerRouter.delete('/:partner_id', removeDataPartner);