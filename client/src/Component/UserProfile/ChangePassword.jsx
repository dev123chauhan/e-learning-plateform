import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const Container = styled.div`
  margin-top: 64px;
  margin-bottom: 192px;
  margin-right: 20px;
`;

const Title = styled.h4`
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-right: 40px; /* Adjust for icon */
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: #49BBBD;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ShowPasswordIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #53BFBA;
  font-size: 1.4rem;
`;

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setLoading(false);
      toast.error('New passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8000/api/change-password',
        { currentPassword, newPassword },
        {
          headers: { 'x-auth-token': token },
        }
      );
      console.log(response);
      toast.success('Password Changed Successfully');
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Failed to change password');
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
            type={showCurrentPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
          />
          <ShowPasswordIcon onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
            {showCurrentPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPasswordIcon>
        </InputWrapper>
        <InputWrapper>
          <InputField
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <ShowPasswordIcon onClick={() => setShowNewPassword(!showNewPassword)}>
            {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPasswordIcon>
        </InputWrapper>
        <InputWrapper>
          <InputField
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <ShowPasswordIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPasswordIcon>
        </InputWrapper>
        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : "Update"} 
        </Button>
      </form>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </Container>
  );
};

export default ChangePassword;










