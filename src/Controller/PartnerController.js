  import bcrypt from "bcrypt";
  import { CreatePartner, GetAllPartners } from "../UseCases/CreatePartner.js";
  import PartnerRepository from "../Gateways/PartnerRepository.js";
  import FindNearestPartners from "../UseCases/FindNearestPartners.js";
  import { Partner } from "../Entities/Partner.js";
  const getAllPartners = new GetAllPartners(PartnerRepository);
  export const registerPartner = async (req, res, next) => {
    const { businessName, email, password, type, location, latitude, longitude } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createPartner = new CreatePartner(PartnerRepository);
    const partner = new Partner({
      businessName: businessName,
      email: email,
      password: hashedPassword,
      type: type,
      location: location,
      latitude: latitude,
      longitude: longitude,
    });
    try {
      const result = await createPartner.execute(partner);
      res
        .status(201)
        .json({ message: "Partner created successfully", data: result });
    } catch (error) {
      console.log(error.stack);
      next(error);
    }
  };
  export const findNearestPartners = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const findNearestPartnersUseCase = new FindNearestPartners(PartnerRepository);
      const nearestPartners = await findNearestPartnersUseCase.execute(userId);
      res.json(nearestPartners);
    } catch (error) {
      console.log(error.stack);
      next(error);
    }
  };
  export const findLocations = async (req, res, next) => {
    try {
      const locations = await getAllPartners.execute();
      if (!locations) {
        return next(new ResponseError(404, "No partner locations found"));
      }
      res.status(200).json(locations);
    } catch (error) {
      console.log(error.stack);
      next(error);
    }
  };
