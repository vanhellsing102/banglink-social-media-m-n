import ProfilePic from "@/components/Profile/ProfilePic";
import Upload from "@/components/Profile/Upload";
import UserPosts from "@/components/Profile/UserPosts";


const page = () => {
    return (
        <div className="flex flex-col items-center md:w-[50%] w-full justify-center">
            <ProfilePic></ProfilePic>
            <Upload></Upload>
            <UserPosts></UserPosts>
        </div>
    );
};

export default page;