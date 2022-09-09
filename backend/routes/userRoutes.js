import express from 'express';

import { registerNewUser, authUser, allUsers } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route("/").post(registerNewUser).get(protect, allUsers);
router.post("/login", authUser)
// router.route("/").get(allUsers);

export { router };
