import { Router } from 'express'
const loginrouter = Router()
import SignUpTemplateCopy from '../models/SignUpModels.js'

/*
loginrouter.get('/Sign-Out',async (_request,response)=>{
   
   console.log('hello my logout');
   response.clearCookie('jwtoken',{path:'/Sign-In'});
   response.status(200).send('user logout');
 }); */

loginrouter.post('/Sign-In', async (request,response)=>{
  const user = await SignUpTemplateCopy.findOne({
     email: request.body.email,
     password: request.body.password
  })
  if(user){
     return response.json({status: 'ok',user:true})
  }
  else{
     return response.json({status: 'error', user:false})
  }
})


export default loginrouter

/*import { Router } from 'express'
const loginrouter = Router()
import SignUpTemplateCopy from '../models/SignUpModels.js'
import jwt from 'jsonwebtoken'


loginrouter.post('/Sign-In', async (request,response)=>{
  const user = await SignUpTemplateCopy.findOne({
     email: request.body.email,
     password: request.body.email
  })
  if(user){
    
     return response.json({status: 'ok',user:true})
  }
  else{
     return response.json({status: 'error', user:false})
  }
})
loginrouter.get('/quote', async (request,response)=>{
  
   const token = request.headers['x-access-token']
try{
   const decoded = jwt.verify(token,'secret123')
   const email = decoded.email
   const user =  await SignUpTemplateCopy.findOne({email:email})

   return response.json({status: 'ok' , quote: user.quote})
}catch{
   console.log('error')
   response.json ({status:'error',error:'invalid token'})
}
  
})
loginrouter.post('/quote', async (request,response)=>{
  
   const token = request.headers['x-access-token']
try{
   const decoded = jwt.verify(token,'secret123')
   const email = decoded.email
   await SignUpTemplateCopy.updateOne({email:email},{$set:{quote:request.body.quote}})

   return response.json({status: 'ok' })
}catch{
   console.log('error')
   response.json ({status:'error',error:'invalid token'})
}
  
})

export default loginrouter */