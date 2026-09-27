import { Router } from 'express';
import { celebrate } from 'celebrate';
import { registerUserSchema } from '../validations/authValidation.js';
import { registerUser,loginUser,refreshUserSession, logoutUser } from '../controllers/authController.js';
const router = Router();

router.post('/auth/register',celebrate(registerUserSchema),registerUser );
router.post('/auth/login',celebrate(registerUserSchema),loginUser );
router.post('/auth/refresh',refreshUserSession );
router.post('/auth/logout',logoutUser );

export default router;
