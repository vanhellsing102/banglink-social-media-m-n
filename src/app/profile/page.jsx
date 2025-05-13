import ProfilePic from "@/components/Profile/ProfilePic";
import Upload from "@/components/Profile/Upload";


const page = () => {
    return (
        <div className="flex flex-col items-center">
            <ProfilePic></ProfilePic>
            <Upload></Upload>
        </div>
    );
};

export default page;