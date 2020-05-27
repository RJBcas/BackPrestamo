import { Router} from 'express';
import { requestCreditControllers} from '../controllers/requestCredit.controllers';


const router: Router = Router();

router.post('/solicitar/', requestCreditControllers.postRequestCredit );


export default router;