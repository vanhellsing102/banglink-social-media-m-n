"use client";
import PostCard from '@/components/PostCard';
import useGetAllVideoPost from '@/hooks/useGetAllVideoPost';

const page = () => {
    const {videos, isLoading} = useGetAllVideoPost();
    // console.log(videos);
    return (
        <div className="md:w-[50%] w-full">
      <div className="mt-5 space-y-3">
        {isLoading ? (
          <p className="flex justify-center items-center">
            <span className="loading loading-spinner text-info"></span>
          </p>
        ) : videos.length > 0 ? (
          videos.map((post) => (
            <PostCard key={post?._id} post={post}></PostCard>
          ))
        ) : (
          <p className="text-red-500 text-lg">No video available</p>
        )}
      </div>
    </div>
    );
};

export default page;