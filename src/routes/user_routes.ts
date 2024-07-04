import { Router } from 'express';
import { fetchUser,createUser } from '../controllers/user_controllers';

const router: Router = Router();

router.post('/create_user',createUser);

router.get('/fetch_user', fetchUser);

export default router;
