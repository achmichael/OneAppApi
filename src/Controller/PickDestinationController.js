
import PickDestination from '../UseCases/PickDestination.js';
import { ResponseError } from '../Config/error.js';

export const pickDestination = async (req, res, next) => {
  try {
    const userId = req.user.userId; // Mengambil userId dari objek user dalam request
    const {latitude, longitude} = req.body; // Mengambil latitude dan longitude dari request body

    if (!latitude || !longitude) {
      throw new ResponseError(400, 'Latitude and longitude are required');
    }

    const pickDestinationUseCase = new PickDestination();
    const result = await pickDestinationUseCase.execute(userId, {latitude, longitude});

    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Error in pickDestination controller:', error);
    next(error); 
  }
};
