import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import {toast} from 'sonner';
import { ClipLoader } from "react-spinners";
import { Button, Container, Form, Grid, GridItem, Input, Label, Title } from "../../styles/updateProfileStyles";
import { profileService } from "../../api/services/profileService";
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
    try {
     const data = await profileService.updateProfile(formData);
      setUser(data.user);
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
    
    </Container>
  );
};

export default UpdateProfile;






