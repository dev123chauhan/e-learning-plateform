import { useState } from "react";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Button, Container, InputField, InputWrapper, ShowPasswordIcon, Title } from "../../styles/changePasswordStyles";
import { profileService } from "../../api/services/profileService";
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setLoading(false);
      toast.error("New passwords do not match");
      return;
    }

    try {
      await profileService.changePassword(currentPassword, newPassword);
      toast.success("Password Changed Successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Change Password</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputField
            type={showCurrentPassword ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
            required
          />
          <ShowPasswordIcon onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
            {showCurrentPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPasswordIcon>
        </InputWrapper>
        
        <InputWrapper>
          <InputField
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            required
          />
          <ShowPasswordIcon onClick={() => setShowNewPassword(!showNewPassword)}>
            {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPasswordIcon>
        </InputWrapper>
        
        <InputWrapper>
          <InputField
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <ShowPasswordIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPasswordIcon>
        </InputWrapper>
        
        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : "Update"}
        </Button>
      </form>
    </Container>
  );
};

export default ChangePassword;
































































































