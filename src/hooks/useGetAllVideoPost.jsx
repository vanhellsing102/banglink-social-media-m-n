"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllVideoPost = () => {
    const {data: videos = [], isLoading} = useQuery({
        queryKey: ["videos"],
        queryFn: async() =>{
            const res = await axios.get('/api/get/getAllVideoPost');
            return res.data;
        }
    })
    return {videos, isLoading};
};

export default useGetAllVideoPost;