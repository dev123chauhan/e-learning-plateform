import {useAuth} from "../../context/AuthContext";
import { Container, Title, Subtitle, GridContainer, GridItem, InfoPaper, Label, Text } from "../../styles/userProfileStyles";

const UserProfile = () => {
  const { user } = useAuth();
  const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A";

  return (
    <Container>
      <Title>User Profile</Title>
      <Subtitle>Personal Information</Subtitle>
      <GridContainer>
        <GridItem>
          <InfoPaper>
            <Label>Name:</Label>
            <Text>{user?.username || "N/A"}</Text>
          </InfoPaper>
        </GridItem>
        <GridItem>
          <InfoPaper>
            <Label>Email:</Label>
            <Text>{user?.email || "N/A"}</Text>
          </InfoPaper>
        </GridItem>
        <GridItem>
          <InfoPaper>
            <Label>Mobile Number:</Label>
            <Text>{user?.mobileNumber || "N/A"}</Text>
          </InfoPaper>
        </GridItem>
        <GridItem>
          <InfoPaper>
            <Label>Date of Birth:</Label>
            <Text>{formattedDateOfBirth}</Text>
          </InfoPaper>
        </GridItem>
        <GridItem>
          <InfoPaper>
            <Label>Gender:</Label>
            <Text>{user?.gender || "N/A"}</Text>
          </InfoPaper>
        </GridItem>
        <GridItem>
          <InfoPaper>
            <Label>Address:</Label>
            <Text>{user?.address || "N/A"}</Text>
          </InfoPaper>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default UserProfile;




