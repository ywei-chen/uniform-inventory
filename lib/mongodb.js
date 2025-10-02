//連線MongoDB
import mongoose from "mongoose";



let isConnect = false;

export const connectDB = async() => {
    if (isConnect) return;

    try {
        await mongoose.connect(process.env.MONGODB_UNIFORMINFO_URL);
        isConnect = true;
        console.log('CONNECT SUCCED');
        
    } catch (error) {
        console.error('CONNECT ERROR:', error);
    }
}