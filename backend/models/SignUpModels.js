
import mongoose  from 'mongoose'

const SignUpTemplate = new mongoose.Schema({
    username:{
        type :String,
        required:true
    },
    email:{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type :String,
        required:true
    },
    password2:{
        type :String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }/*,
    quote:{
        type : String
    },*/
})

export default mongoose.model('MyTable',SignUpTemplate)