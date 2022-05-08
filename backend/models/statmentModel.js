
import mongoose  from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const StatementTemplate = new mongoose.Schema({
    username:{
        type :String,
        required:true
    },
    address:{
        type :String,
        required:true,
        unique:false
    },
    cin:{
        type :Number,
        required:true
    },
    statement:{
        type :String,
        required:true
    },
    note:{
        type :String,
        required:false
    },
    
    date:{
        type:Date,
        default:Date.now
    }
    /*,
    quote:{
        type : String
    },*/
 })
 
export default mongoose.model('MyStatement',StatementTemplate)