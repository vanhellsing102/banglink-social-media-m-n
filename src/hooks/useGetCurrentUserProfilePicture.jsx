// "use client";
// import { getAuthContext } from "@/context/AuthContextProvider";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";


// const useGetCurrentUserProfilePicture = () => {
//     const {user} = getAuthContext();
//     const userId = user?._id;
//     // console.log(userId)
//     const {data: profilePicture = "", refetch} = useQuery({
//         queryKey: ["userId", userId],
//         queryFn: async() =>{
//             if(!userId) return;
//             // console.log(userId);
//             const res = await axios.post('/api/userProfilePicture', {userId});
//             return res.data;
//         },
//         enabled: !!userId
//     }) 
//     return {profilePicture, refetch}
// };

// export default useGetCurrentUserProfilePicture;