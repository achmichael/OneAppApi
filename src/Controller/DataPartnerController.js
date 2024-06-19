import { ResponseError } from "../Config/error.js";
import PartnerRepository from "../Gateways/PartnerRepository.js";
import {
  GetDatasPartner,
  GetDataPartnerById,
  UpdateDataPartner,
  DeleteDataPartner,
} from "../UseCases/CRUDDataPartner.js";
import { CreatePartner } from "../UseCases/CreatePartner.js";
export async function datasPartner(req, res, next) {
  try {
    const getDatas = new GetDatasPartner(PartnerRepository);
    const partners = await getDatas.execute();
    if (!partners) {
      return next(new ResponseError(404, "No partner found"));
    }
    res.status(200).json(partners);
  } catch (error) {
    next(error);
  }
}
export async function getDataPartner(req, res, next) {
  try {
    const partnerId = parseInt(req.params.partner_id);
    const getData = new GetDataPartnerById(PartnerRepository);
    const partner = await getData.execute(partnerId);
    if (!partner) {
      return next(new ResponseError(404, "No partner found"));
    }
    res.status(200).json(partner);
  } catch (error) {
    next(error);
  }
}
export const addDataPartner = async (req, res, next) => {
  try {
    const datas = req.body;
    const addData = new CreatePartner(PartnerRepository);
    const newPartner = await addData.execute(datas);
    res.status(201).json({
      message: "Partner Added successfully",
      partner: newPartner,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const removeDataPartner = async (req, res, next) => {
  try {
    const partnerId = parseInt(req.params.partner_id);
    const getData = new GetDataPartnerById(PartnerRepository);
    const existingPartner = await getData.execute(partnerId);
    if (!existingPartner) {
      return next(new ResponseError(404, "No partner found"));
    }
    const deleteData = new DeleteDataPartner(PartnerRepository);
    await deleteData.execute(partnerId);
    res.status(200).json({
      message: "Partner deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const updateDataPartner = async (req, res, next) => {
  try {
    const partnerId = parseInt(req.params.partner_id);
    const datas = req.body;
    const getData = new GetDataPartnerById(PartnerRepository);
    const existingPartner = await getData.execute(partnerId);
    if (!existingPartner) {
      return next(new ResponseError(404, "No partner found"));
    }
    const updateData = new UpdateDataPartner(PartnerRepository);
    const updatedPartner = await updateData.execute(partnerId, datas);
    res.status(200).json({
      message: "Partner updated successfully",
      data: updatedPartner,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
