import express from 'express';
import controller from '../controllers/gets';
const router = express.Router();

router.get('/', controller.getAidnContent);
router.get('/aidn', controller.getAidnContent);

export = router;