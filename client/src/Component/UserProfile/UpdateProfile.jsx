import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: block;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const GridItem = styled.div`
  flex: 1 1 100%;

  @media (min-width: 600px) {
    flex: 1 1 50%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #000;
  display: block;
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

  &:hover {
    background-color: #49BBBD;
  }
`;

const UpdateProfile = () => {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "Male",
    dateOfBirth: user?.dateOfBirth ? new Date(user.dateOfBirth).toISOString().substr(0, 10) : "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/update-profile",
        formData,
        { headers: { "x-auth-token": token } }
      );
      setUser(res.data.user);
      setLoading(false);
      toast.success('User profile updated successfully');
    } catch (err) {
      toast.error('Error updating profile');
      setLoading(false);
    }finally{
      setLoading(false)
    }
  };

  return (
    <Container>
      <Title>Update Profile</Title>
      <Form onSubmit={handleSubmit}>
        <Grid>
          <GridItem>
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" type="text" value={formData.username} onChange={handleChange} required />
          </GridItem>
          <GridItem>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </GridItem>
          <GridItem>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input id="mobileNumber" name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label htmlFor="address">Address</Label>
            <Input as="textarea" id="address" name="address" rows="4" value={formData.address} onChange={handleChange} />
          </GridItem>
          <Button type="submit">
            {loading ? <ClipLoader size={20} color={"#fff"} /> : "Save Changes"}
          </Button>
        </Grid>
      </Form>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </Container>
  );
};

export default UpdateProfile;






