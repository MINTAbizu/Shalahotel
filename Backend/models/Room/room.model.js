import mongoose from "mongoose";
const roomschema = new mongoose.Schema({
  title: { type: String,  },
  description: { type: String,  },
    price: { type: Number,  },
    capacity: { type: Number,  },
    amenities: { type: [String] },
    images: { type: [String],  },
    roomtypes:{ type: String, enum: ['Single', 'Double', 'Suite'], required: true },
}, { timestamps: true });
const roommodel = mongoose.model('Room', roomschema);
export default roommodel;