import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import UserProfile from "./UserProfile";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import UploadProfilePicture from "./UploadProfilePicture";
import { BackLink, Container, ContentColumn, SidebarColumn, SidebarPaper } from "../../styles/profileStyles";
import ProfileTab from "./ProfileTab";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <UserProfile />;
      case "update":
        return <UpdateProfile />;
      case "password":
        return <ChangePassword />;
      case "picture":
        return <UploadProfilePicture />;
      default:
        return <UserProfile />;
    }
  };
  return (
    <Container>
      <SidebarColumn>
        <SidebarPaper>
          <ProfileTab 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </SidebarPaper>
      </SidebarColumn>
      
      <ContentColumn>
        <BackLink to="/">
          <IoIosArrowRoundBack />
          Back to home
        </BackLink>
        {renderContent()}
      </ContentColumn>
    </Container>
  );
};

export default Profile;