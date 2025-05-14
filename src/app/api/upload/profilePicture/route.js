import connectDB from "@/libs/connectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    await connectDB();
    try {
        const {userId, profilePicture} = await request.json();
        const user = await User.findOne({_id: userId});
        if(!user){
            return NextResponse.json({message: "User not found"}, {status: 404})
        }
        user.profilePicture = profilePicture;
        await user.save();
        // console.log(userId);
        return NextResponse.json({message: "Profile pic uploaded successfully"}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Cann't get data"}, {status: 500});
    }
}