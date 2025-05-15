import { FaHome } from "react-icons/fa";
import { FaBagShopping, FaUsers } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";

export const navLinks = [
    {
        id: 1,
        icon: FaHome,
        link: "/"
    },
    {
        id: 2,
        icon: MdVideoLibrary,
        link: "/video"
    },
    {
        id: 3,
        icon: FaUsers,
        link: "/friends"
    },
    {
        id: 4,
        icon: FaBagShopping,
        link: "/shop"
    }
]


// export const rightNavData = [
//     {
//         id: 1,
//         icon: LuMessageCircleMore,
//         link: "/message"
//     },
//     {
//         id: 2,
//         icon: IoMdNotificationsOutline,
//         link: "/notification"
//     },
//     {
//         id: 3,
//         icon: FaRegCircleUser,
//         link: "/profile"
//     }
// ]