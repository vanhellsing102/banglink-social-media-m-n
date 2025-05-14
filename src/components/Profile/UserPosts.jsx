"use client";
import useGetCurrenUserPosts from "@/hooks/useGetCurrenUserPosts";


const UserPosts = () => {
    const {currentUserPosts} = useGetCurrenUserPosts();
    console.log(currentUserPosts)
    return (
        <div className="mt-7">
            <h1 className="text-2xl font-semibold border-b-2 border-blue-500">My Posts</h1>
        </div>
    );
};

export default UserPosts;