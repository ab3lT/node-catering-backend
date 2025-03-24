import express from 'express';
import { protect, authorizeRoles } from '../config/authMiddleware.js';
import ROLES from '../config/roles.js';
import { getStaffs } from '../controllers/adminController.js';

const admin_router = express.Router();

// Middleware: Only Admins can access these routes
// admin_router.use(protect, authorizeRoles(ROLES.ADMIN));

/**
 * @swagger
 * tags:
 *   name: Admin Management
 *   description: API for managing admin tasks
 */

/**
 * @swagger
 * /api/admin/staffs:
 *   get:
 *     summary: Retrieve the list of staffs
 *     tags: [Admin Management]
 *     responses:
 *       200:
 *         description: A list of staffs
 */
admin_router.get('/staffs', getStaffs);

export default admin_router;
