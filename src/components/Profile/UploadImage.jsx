import { LuImageUp } from "react-icons/lu";
import { TbSend2 } from "react-icons/tb";
import { BsImage } from "react-icons/bs";

const UploadImage = () => {
    const handleUpLoadImage = e =>{
        e.preventDefault();
    }
    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="border cursor-pointer border-blue-300 p-1 rounded-md">
                <LuImageUp className="text-xl"></LuImageUp>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-medium text-lg">Hello!</h3>
                    <form onSubmit={handleUpLoadImage} className="w-full">
                        <div className="w-full flex justify-center items-center min-h-[150px] border border-blue-500 mb-3 rounded-md">
                            <label className="cursor-pointer " htmlFor="image">
                                <BsImage className="text-[70px]"></BsImage>
                            </label>
                            <input className="hidden" type="file" name="image" id="image"/>
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

export default UploadImage;