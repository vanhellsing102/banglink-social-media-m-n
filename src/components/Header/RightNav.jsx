import { rightNavData } from "@/data/navData";
import Link from "next/link";


const RightNav = () => {
    return (
        <div className='flex justify-end'>
            <ul className="flex items-center gap-3">
                {
                    rightNavData.map(navItem =>{
                        const Icon = navItem?.icon;
                        return (
                            <li className="bg-white border border-white/20 rounded-full p-2" key={navItem?.id}>
                                <Link href={navItem?.link}>
                                    <Icon size={25}></Icon>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default RightNav;