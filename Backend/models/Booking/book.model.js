import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
 fullName: {type:String ,required:false},
   roomtype:{type:String ,required:true},
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
}, { timestamps: true });
const bookmodel = mongoose.model('Booking', bookingSchema);
export default bookmodel;
