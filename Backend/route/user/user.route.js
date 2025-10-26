import express from 'express'
const route=express.Router()

import { usercontroler } from '../../controller/user/user.controller.js'

route.post('/register',usercontroler)
// route.post('/login',usercontroler)
route.get('/getuser',getuserinfo)
route.get('/getAllUsers',getAllUsers)
route.put('/updateuser',updateuserinfo)
route.delete('/deleteuser',delateuserinfo)
route.patch('/changepassword',changepassword)



export default route


