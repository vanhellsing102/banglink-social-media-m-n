"use client";
import { getAuthContext } from "@/context/AuthContextProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetAlluser = () => {
    const {user} = getAuthContext();
    const userId = user?._id;
    const {data: users = [], isLoading} = useQuery({
        queryKey: ["userId", userId],
        queryFn: async() =>{
            if(!userId) return;
            const res = await axios.post('/api/get/getAllUser', {userId})
            return res.data;
        }
    })
    return {users, isLoading};
};

export default useGetAlluser;