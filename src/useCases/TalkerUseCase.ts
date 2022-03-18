import { TalkerController } from "../controller/TalkerController";
import { TalkerModel } from "../model/TalkerModel";
import { TalkerService } from "../services/TalkerService";

const talkerModel = new TalkerModel();
const talkerService = new TalkerService(talkerModel);
const talkerController = new TalkerController(talkerService);

export { talkerController };
