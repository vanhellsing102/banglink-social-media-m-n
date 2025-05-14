import ProfilePic from "@/components/Profile/ProfilePic";
import Upload from "@/components/Profile/Upload";
import UserPosts from "@/components/Profile/UserPosts";


const page = () => {
    return (
        <div className="flex flex-col items-center">
            <ProfilePic></ProfilePic>
            <Upload></Upload>
            <UserPosts></UserPosts>
        </div>
    );
};

export default page;