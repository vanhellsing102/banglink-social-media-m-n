import connectDB from "@/libs/connectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    await connectDB();
    try {
        const {name, email, password} = await request.json();
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({message: "Already created account for this email"}, {status: 200});
        }
        const newUser = new User({name, email, password});
        await newUser.save();
        const {password: pwd, ...safeUser} = newUser._doc;
        return NextResponse.json({message: "Register successfully", newUser: safeUser}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Connot get data"}, {status: 500})
    }
}