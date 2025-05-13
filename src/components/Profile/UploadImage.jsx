"use client";
import { LuImageUp } from "react-icons/lu";
import { TbSend2 } from "react-icons/tb";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { getAuthContext } from "@/context/AuthContextProvider";
import axios from "axios";
import toast from "react-hot-toast";

const UploadImage = () => {
    const [selectImage, setSelectImage] = useState(null);
    const {user} = getAuthContext();
    const userId = user?._id;
    const handleUpLoadImage = (e) =>{
        e.preventDefault();
        const description = e.target.description.value;
        if(!userId) return;
        if(!selectImage) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectImage);
        reader.onloadend = () =>{
            const image = reader.result;
            const newPost = {
                userId,
                type: "image",
                description,
                image,
            }
            axios.post("/api/upload/photo", newPost)
            .then(res =>{
                // console.log(res.data.message);
                toast.success(res.data.message);
                e.target.reset();
                setSelectImage(null);
            })
            // console.log(newPost);
        }
    }
    // console.log(selectImage);
    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="border cursor-pointer border-blue-300 p-1 rounded-md">
                <LuImageUp className="text-xl"></LuImageUp>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-medium text-lg">Hello!</h3>
                    <form onSubmit={handleUpLoadImage} className="w-full">
                        <div>
                            <label className="block text-sm font-medium text-slate-800">Description:</label>
                            <textarea placeholder="say about your post..." type="text" name="description"  className="w-full border border-blue-500 rounded-md px-3 py-1 outline-none mb-1"/>
                        </div>
                        <div className="w-full flex justify-center items-center min-h-[150px] border border-blue-500 mb-2 rounded-md">
                            <label className="cursor-pointer " htmlFor="image">
                                <BsImage className="text-[70px]"></BsImage>
                            </label>
                            <input onChange={(e) =>setSelectImage(e.target.files[0])} className="hidden" type="file" name="image" id="image"/>
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