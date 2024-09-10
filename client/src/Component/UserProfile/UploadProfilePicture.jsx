import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { CiEdit } from "react-icons/ci";
import noAvatar from "../../assets/noProfile.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 192px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HiddenInput = styled.input`
  display: none;
`;

const IconButton = styled.label`
  cursor: pointer;
  position: relative;
  width: fit-content;
`;

const StyledAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const EditIcon = styled(CiEdit)`
  position: absolute;
  bottom: 32px;
  right: 31px;
  color: white;
  background-color: #49BBBD;
  border-radius: 50%;
  padding: 10px;
  font-size: 2rem;
  opacity: 0.5
`;

const Title = styled.h6`
  margin-top: 16px;
  text-align: center;
`;

const Subtitle = styled.span`
  color: #6c757d;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #49BBBD;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
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
    setLoading(true);
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:8000/api/upload-profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token,
        },
      });

      setUser(res.data.user);
      setTimeout(() => {
        setLoading(false); // Hide spinner
      }, 1000);
      toast.success('Profile Uploaded Successfully');
    } catch (err) {
      console.error('Error Response:', err.response);
      toast.error('Please choose a file');
      setLoading(false);
    }
  };

  return (
    <Container>
      <Toaster />
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
            src={preview || (user && user.profileImage) ? preview || `http://localhost:8000/uploads/${user.profileImage}` : noAvatar}
          />
          <EditIcon />
        </IconButton>
        <Title>Upload a profile picture</Title>
        <Subtitle>Make sure the image is below 10MB</Subtitle>
        <Button type="submit">
          {loading ? <ClipLoader  size={20} color={"#fff"} /> : "Upload"} 
        </Button>
      </StyledForm>
    </Container>
  );
};

export default UploadProfilePicture;


