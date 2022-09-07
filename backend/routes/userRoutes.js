import express from 'express';

import { registerNewUser }  from '../controllers/registerController.js';

const router = express.Router();

router.route("/").post(registerNewUser)
// router.post("/login", authUser)

export { router };
