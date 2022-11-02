import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required:true,
    },
    type: {
      type: String,
      required:true,
    },
    email_address: {
        type: String,
        required:true, 
        unique:true      
    },
    qrcode: {
      type: String,          
  },
    mobile: {
        type: Number,
    },
    password: {
        type: String,
    },
    nic:{
      type: String,
      unique:true
    }, 
    credit_amount:{
        type: Number,
      }, 
  },
  { timestamps: true }
);
 



export default mongoose.model('user',UserSchema);