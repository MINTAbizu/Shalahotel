import express from 'express'
const route=express.Router()

import { usercontroler } from '../../controller/user/user.controller.js'

route.post('/register',usercontroler)
// route.post('/login',usercontroler)
route.get('/getuser',usercontroler)
route.put('/updateuser',usercontroler)
route.delete('/deleteuser',usercontroler)
route.patch('/changepassword',usercontroler)



export default route


