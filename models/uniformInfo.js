//定義MongoDB的Schema
import mongoose from "mongoose";


const uniformInfoSchema = new mongoose.Schema({
    code: {type: String, required: true},
    gender: {type: String, required: true},
    sizes: {type: String, required: true},
    uniform: {type: String, required: true},

},{
    timestamps: true
});

export default mongoose.models.uniformInfo || mongoose.model('uniformInfo', uniformInfoSchema);

