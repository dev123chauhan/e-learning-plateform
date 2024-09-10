import styled from 'styled-components';
import useAuth from "../../hooks/useAuth";

const Container = styled.div`
  padding: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Subtitle = styled.h3`
  margin-bottom: 16px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

const GridItem = styled.div`
  padding: 8px;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 600px) {
    flex: 0 0 100%;
    ${'' /* max-width: 50%; */}
  }
`;

const InfoPaper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Label = styled.span`
  font-weight: bold;
`;

const Text = styled.span`
  color: #666;
`;

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




