import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price:{type:String, required:true},
    image: {type:String, require:true},
    category:{type:String, required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;