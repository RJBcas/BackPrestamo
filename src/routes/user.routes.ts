import { Router} from 'express';
import { usersControllers} from '../controllers/user.controllers';


const router: Router = Router();

router.get('/users/', usersControllers.getUsers );
router.post('/user/', usersControllers.getUser );
router.post('/sigin/', usersControllers.getSingIn);

router.post('/createUser/', usersControllers.createUser);

router.delete('/delete/', usersControllers.deleteUser);


export default router;