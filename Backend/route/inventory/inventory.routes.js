import express from 'express';
import { getitem, postitem, updateitem, delateitem } from '../../controller/inventory/inventory.controller.js';

const router = express.Router();

router.post('/postitem', postitem);
router.get('/', getitem);
router.put('/:id', updateitem);
router.delete('/:id', delateitem);

export default router;
