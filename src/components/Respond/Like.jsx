import { getAuthContext } from "@/context/AuthContextProvider";
import { IoMdHeartEmpty } from "react-icons/io";

const Like = () => {
    const {user} = getAuthContext();
    const handleAddLike = (userId) =>{
        console.log("like by", userId);
    }
    return (
        <div>
            <button onClick={() =>handleAddLike(user?._id)} className="cursor-pointer">
                <IoMdHeartEmpty className="text-2xl"></IoMdHeartEmpty>
            </button>
        </div>
    );
};

export default Like;