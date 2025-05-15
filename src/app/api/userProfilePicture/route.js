// import connectDB from "@/libs/connectDB";
// import User from "@/models/user.model";
// import { NextResponse } from "next/server";

// export const POST = async(request) =>{
//     await connectDB();
//     try {
//         const {userId} = await request.json();
//         const user = await User.findById({_id: userId});
//         if(!user){
//             return NextResponse.json({message: "User not found"}, {status: 404});
//         }
//         const image = user.profilePicture;
//         return NextResponse.json(image, {status: 200});
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({message: "Cann't get data"}, {status: 500});
//     }
// }