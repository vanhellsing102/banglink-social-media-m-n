import Like from './Like';
import Comment from './Comment';
import { useState } from 'react';
import DisplayAndInputComment from './DisplayAndInputComment';

const Respond = () => {
    const [openComment, setOpenComment] = useState(false);
    return (
        <div className='px-3'>
            <div className='flex items-center mt-2 justify-center gap-[370px] w-full'>
                <Like></Like>
                <Comment setOpenComment={setOpenComment} openComment={openComment}></Comment>
            </div>
            {
                openComment && 
                <DisplayAndInputComment></DisplayAndInputComment>
            }
        </div>
    );
};

export default Respond;
