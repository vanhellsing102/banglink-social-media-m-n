"use client";
import { getAuthContext } from "@/context/AuthContextProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetCurrentUserProfilePicture = () => {
    const {user} = getAuthContext();
    const userId = user?._id;
    const {data: profileImage, refetch} = useQuery({
        queryKey: ["userId", userId],
        queryFn: async() =>{
            if(!userId) return;
            const res = await axios.post(`/api/get/currentUserProfilePicture/${userId}`)
            return res.data.profilePicture;
        },
        enabled: !!userId
    })
    return {profileImage, refetch};
};

export default useGetCurrentUserProfilePicture;