import { Router} from 'express';
import { paidCreditControllers} from '../controllers/paidCredit.controllers';


const router: Router = Router();

router.post('/pagar/', paidCreditControllers.postPaidCredit );


export default router;