import express from 'express';

import { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } from '../controllers/chatControllers.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

export { router };
