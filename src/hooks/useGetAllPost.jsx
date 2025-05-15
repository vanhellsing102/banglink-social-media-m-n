"use client";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetAllPost = () => {
    const {data: posts = [], isLoading} = useQuery({
        queryKey: ["posts"],
        queryFn: async() =>{
            const res = await axios.get('/api/get/allpost');
            return res.data;
        }
    })
    return {posts, isLoading};
};

export default useGetAllPost;