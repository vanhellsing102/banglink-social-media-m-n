"use client";
import { navLinks } from '@/data/navData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainNav = () => {
    const pathName = usePathname();
    // console.log(pathName);
    return (
        <div className='flex justify-center'>
            <ul className='flex justify-between items-center gap-20'>
                {
                    navLinks.map(navItem =>{
                        const NavIcon = navItem?.icon;
                        const isActive = pathName == navItem?.link;
                        return (
                            <li className={`p-2 rounded-full hover:bg-gray-300 ${isActive ? "bg-blue-300" : "bg-white"}`} key={navItem?.id}>
                                <Link className='cursor-pointer' href={navItem?.link}>
                                    <NavIcon size={25}></NavIcon>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default MainNav;