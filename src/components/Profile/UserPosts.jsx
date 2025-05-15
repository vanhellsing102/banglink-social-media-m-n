"use client";
import useGetCurrentUserPosts from "@/hooks/useGetCurrentUserPosts";
import PostCard from "../PostCard";


const UserPosts = () => {
    const {currentUserPosts, isLoading} = useGetCurrentUserPosts();
    // console.log(currentUserPosts);
    return (
        <div className="mt-7 md:w-[50%] w-full">
            <h1 className="text-2xl font-semibold border-b-2 border-blue-500">My Posts</h1>
            <div className="mt-5 space-y-3">
                {
                    isLoading ? <p className="flex justify-center items-center"><span className="loading loading-spinner text-info"></span></p>
                    :
                    currentUserPosts.length > 0 ? currentUserPosts.map(post => <PostCard key={post?._id} post={post}></PostCard>):
                    <p className="text-red-500 text-lg">No post available</p>
                }
            </div>
        </div>
    );
};

export default UserPosts;