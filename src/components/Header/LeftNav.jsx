"use client";
import { CiSearch } from "react-icons/ci";

const LeftNav = () => {
    const handleSearch = (e) =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText)
    }
    return (
        <div className="w-2/3">
            <form onSubmit={handleSearch} className='relative w-full'>
                <input type="text" name="search" placeholder='Search BL' className='appearance-none outline-none rounded-md border border-white/10 bg-slate-100 w-full px-5 py-1'/>
                <button type="submit" className="absolute inset-y-0 right-2 cursor-pointer">
                    <CiSearch className="text-xl"></CiSearch>
                </button>
            </form>
        </div>
    );
};

export default LeftNav;