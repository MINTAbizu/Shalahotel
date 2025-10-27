import express from 'express'
const route=express.Router()

import  { getAllUsers,updateuserinfo,delateuserinfo,changepassword, REGISTER, Login}  from '../../controller/user/user.controller.js'

route.post('/register',REGISTER)
route.post('/login',Login)
route.get('/getuser',getAllUsers)
// route.get('/getAllUsers',getAllUsers)
route.put('/updateuser',updateuserinfo)
route.delete('/deleteuser',delateuserinfo)
route.patch('/changepassword',changepassword)



export default route


