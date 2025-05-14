import { LiaCommentsSolid } from "react-icons/lia";

const Comment = ({setOpenComment, openComment}) => {
    return (
        <div>
            <button onClick={() => setOpenComment(!openComment)} className="cursor-pointer">
                <LiaCommentsSolid className="text-2xl"></LiaCommentsSolid>
            </button>
        </div>
    );
};

export default Comment;