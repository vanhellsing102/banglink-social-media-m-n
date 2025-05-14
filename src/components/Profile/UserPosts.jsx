"use client";
import useGetCurrenUserPosts from "@/hooks/useGetCurrenUserPosts";
import PostCard from "../PostCard";


const UserPosts = () => {
    const {currentUserPosts, isLoading} = useGetCurrenUserPosts();
    // console.log(currentUserPosts);
    return (
        <div className="mt-7 md:w-[50%] w-full">
            <h1 className="text-2xl font-semibold border-b-2 border-blue-500">My Posts</h1>
            <div className="mt-5 space-y-3">
                {
                    isLoading ? <p className="flex justify-center items-center"><span className="loading loading-spinner text-info"></span></p>
                    :
                    currentUserPosts.map(post => <PostCard key={post?._id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default UserPosts;