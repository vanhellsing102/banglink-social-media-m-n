import { getAuthContext } from "@/context/AuthContextProvider";
import { RiSendPlaneLine } from "react-icons/ri";

const DisplayAndInputComment = () => {
    const {user} = getAuthContext();
    const userId = user?._id;

    const handleAddComment = (e) =>{
        e.preventDefault();
        if(!userId) return;
        const comment = e.target.comment.value;
        console.log(userId, comment);
    }
    return (
        <div className='w-full min-h-[200px] mb-3 border border-slate-400 bg-sky-50 rounded-md p-5 relative'>
            <div className='absolute top-2 w-full'>
                <form onSubmit={handleAddComment} className='relative'>
                    <input type="text" name="comment" placeholder='comment...' className='appearance-none outline-none w-2/3 border border-slate-400 px-5 py-1 rounded-md'/>
                    <button type="submit" className="cursor-pointer relative top-1 right-7">
                        <RiSendPlaneLine className="text-xl hover:text-blue-500"></RiSendPlaneLine>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DisplayAndInputComment;