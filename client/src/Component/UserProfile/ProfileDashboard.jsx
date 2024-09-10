import { useState } from "react";
import {   Grid, Paper } from "@mui/material";
import ProfileSidebar from "./ProfileSidebar";
import UserProfile from "./UserProfile";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import UploadProfilePicture from "./UploadProfilePicture";

const ProfileDashboard = () => {
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
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={2}>
          <Paper>
            <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={10}>
          {/* <Paper sx={{ p: 2 }}> */}
            {renderContent()}
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileDashboard;
