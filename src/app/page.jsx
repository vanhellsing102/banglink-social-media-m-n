"use client";
import PostCard from "@/components/PostCard";
import useGetAllPost from "@/hooks/useGetAllPost";

export default function Home() {
  const { posts, isLoading } = useGetAllPost();
  // console.log(posts);
  return (
    <div className="mt-7 md:w-[50%] w-full">
      <h1 className="text-2xl font-semibold border-b-2 border-blue-500">
        Explore...
      </h1>
      <div className="mt-5 space-y-3">
        {isLoading ? (
          <p className="flex justify-center items-center">
            <span className="loading loading-spinner text-info"></span>
          </p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post?._id} post={post}></PostCard>
          ))
        ) : (
          <p className="text-red-500 text-lg">No post available</p>
        )}
      </div>
    </div>
  );
}
