import mongoose from "mongoose"

const connectDB = async() =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.nuqw3.mongodb.net/bangLinkSocialMedia`);
        console.log("Mongoose Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;