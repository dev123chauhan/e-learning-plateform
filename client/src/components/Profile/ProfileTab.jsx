import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom"
import { FaUser, FaPencilAlt, FaImage, FaLock } from 'react-icons/fa';
import { SidebarContainer, ProfileSection, Avatar, Username, NavList, NavItem, Icon, Divider, LogoutButton } from "../../styles/profileTabStyles";

const ProfileTab = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/") 
  };
  return (
    <SidebarContainer>
      <ProfileSection>
        <Avatar
          src={
            user?.profileImage
          }
        />
        <Username>{user?.username || "User Name"}</Username>
      </ProfileSection>
    
      <NavList>
  {["profile", "update", "picture", "password"].map((tab) => (
    <NavItem
      key={tab}
      selected={activeTab === tab}
      onClick={() => setActiveTab(tab)}
      style={{ display: "flex", alignItems: "center" }} 
    >
      <Icon>
        {tab === "profile" ? <FaUser color="white"/> :
         tab === "update" ? <FaPencilAlt  color="white"/> :
         tab === "picture" ? <FaImage  color="white"/> :
         tab === "password" ? <FaLock  color="white"/> : null}
      </Icon>
      {tab === "profile"
        ? "User Profile"
        : tab === "update"
        ? "Update Profile"
        : tab === "picture"
        ? "Upload Picture"
        : "Change Password"}
    </NavItem>
  ))}
</NavList>

      <Divider />
      <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
    </SidebarContainer>
  );
};

export default ProfileTab;


