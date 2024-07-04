import express from 'express';
import { addVideo, addView, getByTag, getVideo, random, search, sub, trend } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// Create a video
router.post('/', verifyToken, addVideo);
router.put('/find/:id', verifyToken, addVideo);
router.delete('/find/:id', verifyToken, addVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addView);
router.get('/trend', trend);
router.get('/random', random);
router.get('/sub', verifyToken, sub);
router.get('/tags', getByTag);
router.get('/search', search);


export default router; 
