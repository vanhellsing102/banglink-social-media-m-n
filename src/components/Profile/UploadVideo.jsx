import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { useState } from "react";

const UploadVideo = () => {
    const [selectVideo, setSelectVideo] = useState(null);
    const handleUpLoadVidoe = (e) =>{
        e.preventDefault();
        const description = e.target.description.value;
        // console.log(description)
    }
    console.log(selectVideo)
    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="border cursor-pointer border-blue-300 p-1 rounded-md">
                <AiOutlineVideoCameraAdd className="text-xl"></AiOutlineVideoCameraAdd>
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-medium text-lg">Hello!</h3>
                    <form onSubmit={handleUpLoadVidoe} className="w-full">
                        <div>
                            <label className="block text-sm font-medium text-slate-800">Description:</label>
                            <textarea placeholder="say about your post..." type="text" name="description"  className="w-full border border-blue-500 rounded-md px-3 py-1 outline-none mb-1"/>
                        </div>
                        <div className="w-full flex justify-center items-center min-h-[150px] border border-blue-500 mb-3 rounded-md">
                            <label className="cursor-pointer " htmlFor="video">
                                <MdOutlineVideoLibrary className="text-[70px]"></MdOutlineVideoLibrary>
                            </label>
                            <input onChange={(e) =>setSelectVideo(e.target.files[0])} className="hidden" type="file" name="video" id="video"/>
                        </div>
                        <button className="cursor-pointer bg-slate-200 hover:bg-blue-400 transition-all duration-300 p-2 rounded-md w-full flex justify-center" type="submit">
                            <TbSend2 className="text-xl"></TbSend2>
                        </button>
                    </form>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="border border-slate-500 h-[20px] w-[20px] rounded-full cursor-pointer bg-red-400 flex justify-center items-center absolute right-2 top-2 text-[10px]">X</button>
                      </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UploadVideo;