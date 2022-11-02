import mongoose from "mongoose";


const TravelSchema = new mongoose.Schema(
  {

    passenger_name: {
      type: String,
      required:true,
    },
    passenger_email: {
      type: String,
      required:true,
    },
    source: {
      type: String,
      required:true,       
    },
    destination: {
        type: String,
    },
    amount: {
        type: Number,
    }, 
  },
  { timestamps: true }
);
 

export default mongoose.model('travel',TravelSchema);