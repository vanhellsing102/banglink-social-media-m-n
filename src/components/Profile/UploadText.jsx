import { getAuthContext } from "@/context/AuthContextProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { MdOutlineTextFields } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";

const UploadText = () => {
    const {user} = getAuthContext();
    const userId = user?._id;
    // console.log(userId);
    const handleUpLoadText = (e) =>{
        e.preventDefault();
        if(!userId) return;
        const text = e.target.text.value;
        const newText = {
            userId,
            type: "text",
            text
        }
        // console.log(newText);
        axios.post("/api/upload/text", newText)
        .then(res =>{
            // console.log(res.data.message);
            toast.success(res.data.message);
            e.target.reset();
        })
    }
    return (
        <div>
            <button  onClick={()=>document.getElementById('my_modal_1').showModal()} className="border cursor-pointer border-blue-300 p-1 rounded-md">
                <MdOutlineTextFields className="text-xl"></MdOutlineTextFields>
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-medium text-lg">Hello!</h3>
                    <form onSubmit={handleUpLoadText} className="w-full">
                        <div>
                            <textarea placeholder="write your things..." className="min-h-[150px] w-full border appearance-none outline-none border-blue-500 p-3 rounded-md" name="text" id="text"></textarea>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className="cursor-pointer bg-slate-200 hover:bg-blue-400 transition-all duration-300 p-2 rounded-md w-full flex justify-center" type="submit">
                                <TbSend2 className="text-xl"></TbSend2>
                            </button>
                        </div>
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

export default UploadText;