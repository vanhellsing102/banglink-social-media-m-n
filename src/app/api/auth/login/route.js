import connectDB from "@/libs/connectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    await connectDB();
    try {
        const {email, password} = await request.json();
        // console.log(email, password);
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({message: "Cann't find user this email. Please provide another email"}, {status: 200});
        }
        if(password != user.password){
            return NextResponse.json({message: "Enter current password"}, {status: 200});
        }
        const {password: pwd, ...safeUser} = user._doc;
        return NextResponse.json({message: "Login successfully", status: true, user: safeUser}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Cannot get data"}, {status: 500});
    }
}