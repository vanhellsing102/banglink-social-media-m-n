"use client"
import { getAuthContext } from "@/context/AuthContextProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetCurrenUserPosts = () => {
    const {user} = getAuthContext();
    const userId = user?._id;
    const {data: currentUserPosts = []} = useQuery({
        queryKey: ['userId', userId],
        queryFn: async() =>{
            if(!userId) return;
            // console.log("get user id", userId);
            const res = await axios.post(`/api/get/currentUserPosts/${userId}`);
            // console.log(res.data)
            return res.data;
        },
        enabled: !!userId
    })
    return {currentUserPosts};
};

export default useGetCurrenUserPosts;