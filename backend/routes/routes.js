
import { Router } from 'express'
const router = Router()
import SignUpTemplateCopy from '../models/SignUpModels.js'


router.post('/Sign-Up', async (request,response)=>{
    const SignedUpUser = new SignUpTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        password2:request.body.password2
    })
    SignedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


export default router