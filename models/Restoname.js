import mongoose from "mongoose";


const restoSchema = new mongoose.Schema({
    name: {type: String},
    location: {type: String},
    area: {type: String},
    description: {type: String},
    avgcost: {type: Number},
    imageUrl: {type: String}
});

const RestoNames = mongoose.models.RestoNames || mongoose.model("RestoNames",restoSchema)
export default RestoNames  