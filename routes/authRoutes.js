
import express from 'express';

import {    registerCustomer, 
    registerCateringManager, 
    registerExecutiveChef, 
    registerSystemAdmin, 
    loginUser  } from '../controllers/authController.js';
import { protect, authorizeRoles } from '../config/authMiddleware.js';
import ROLES from '../config/roles.js';

const authRouter = express.Router();

// Registration routes
authRouter.post('/register/customer', registerCustomer);
authRouter.post('/register/catering-manager', registerCateringManager);
authRouter.post('/register/executive-chef', registerExecutiveChef);
authRouter.post('/register/system-admin', protect, authorizeRoles(ROLES.SYSTEM_ADMIN), registerSystemAdmin);

// Login route
authRouter.post('/login', loginUser);

export default authRouter;
