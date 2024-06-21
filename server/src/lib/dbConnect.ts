import mongoose from "mongoose"
const dotenv = require("dotenv");

dotenv.config();
export const dbConnect = async () =>{
    await mongoose.connect(process.env.MONGO_URI! ,{
        dbName:"wd-compiler"
    });
    console.log("conection stablish!");
}