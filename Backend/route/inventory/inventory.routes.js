import express from 'express'

const router=express.Router()
import {getitem,postitem,updateitem,delateitem} from '../../controller/inventory/inventory.controller.js'

router.post('/postitem',  postitem)
router.get('/getitem',  getitem)
router.put('/postitem/:id',  updateitem)
router.delete('/delateitem/:id',  delateitem)


export default router
