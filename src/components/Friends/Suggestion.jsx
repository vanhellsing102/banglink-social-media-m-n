"use client";
import useGetAlluser from "@/hooks/useGetAlluser";
import SuggestCard from "./SuggestCard";


const Suggestion = () => {
    const {users ,isLoading} = useGetAlluser();
    // console.log(users);
    return (
        <div>
            {
                isLoading ? 
                <p className="flex justify-center items-center">
                    <span className="loading loading-spinner text-info"></span>
                </p>: 
                users.map(user => <SuggestCard key={user?._id} requestUser={user}></SuggestCard>)
            }
        </div>
    );
};

export default Suggestion;