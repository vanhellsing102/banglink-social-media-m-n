"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";

const LogoutUser = () => {
    const router = useRouter();
    const handleLogout = () =>{
        // console.log("logout");
        localStorage.removeItem("user");
        toast.success("Logout successfully");
        router.push("/login");
    }
    return (
        <div>
            <button onClick={handleLogout} className="flex justify-center items-center cursor-pointer gap-3 bg-slate-300 py-1
            px-3 rounded-md transition-all duration-300 hover:bg-blue-300">
                <span>Logout</span>
                <IoMdLogOut></IoMdLogOut>
            </button>
        </div>
    );
};

export default LogoutUser;