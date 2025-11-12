import noAvatar from "../../../public/assets/noProfile.jpg"
import { useState } from 'react';
import {useAuth} from "../../context/AuthContext";
import { toast } from 'sonner';
import { ClipLoader } from 'react-spinners';
import { Button, Container, EditIcon, HiddenInput, IconButton, StyledAvatar, StyledForm, Subtitle, Title } from '../../styles/uploadProfilePictureStyles';
import { profileService } from "../../api/services/profileService";

const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast.error('File size should be less than 10MB');
        return;
      }

      if (!selectedFile.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please choose a file');
      return;
    }
    
    setLoading(true);

    try {
      const data = await profileService.uploadProfilePicture(file);
      setUser(data.user);
      
      setFile(null);
      setPreview(null);
      
      toast.success('Profile picture uploaded successfully');
      setLoading(false);
    } catch (err) {
      console.error('Error Response:', err.response);
      toast.error(err.response?.data?.message || 'Failed to upload profile picture');
      setLoading(false);
    }
  };

  const getProfileImageUrl = () => {
    if (preview) return preview;
    if (user?.profileImage) return user.profileImage;
    return noAvatar;
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <HiddenInput
          accept="image/*"
          id="profile-image-upload"
          type="file"
          onChange={handleFileChange}
        />
        <IconButton htmlFor="profile-image-upload">
          <StyledAvatar
            alt="Profile Picture"
            src={getProfileImageUrl()}
          />
          <EditIcon />
        </IconButton>
        <Title>Upload a profile picture</Title>
        <Subtitle>Make sure the image is below 10MB</Subtitle>
        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : "Upload"} 
        </Button>
      </StyledForm>
    </Container>
  );
};

export default UploadProfilePicture;