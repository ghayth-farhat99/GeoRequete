
import { Router } from 'express'
const router = Router()
import StatementTemplateCopy from '../models/statmentModel.js'


router.post('/Statement',  (request,response)=>{
    const StatementUser = new StatementTemplateCopy({
        username:request.body.username,
        address:request.body.address,
        cin:request.body.cin,
        statement:request.body.statement,
        note:request.body.note,
    })
    StatementUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

export default router