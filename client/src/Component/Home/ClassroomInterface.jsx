import styled from 'styled-components';
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";

const Container = styled.div`   
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  width: 100%;
  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 60%;
  }
`;

const UserCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const UserImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const UserStatus = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin-right: 5px;
`;

const InstructorCard = styled(UserCard)`
  grid-column: span 1;
  grid-row: span 1;
  @media(min-width: 768px) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const InstructorLabel = styled.div`
  background-color: #2196F3;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 10px;
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const PresentButton = styled(Button)`
  background-color: #4285f4;
`;

const CallButton = styled(Button)`
  background-color: #ea4335;
`;

const InfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  @media(min-width: 768px) {
    width: 35%;
    margin-top: 0;
  }
`;

const Title = styled.h2`
  color: #3f51b5;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  span {
    color: #00bcd4;
  }
  @media(min-width: 768px) {
    font-size: 28px;
    text-align: left;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const InfoIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  margin-right: 15px;
  border-radius: 4px;
  flex-shrink: 0;
`;

const InfoText = styled.p`
  color: #555;
  font-size: 14px;
  margin: 0;
  text-align: center;
  @media(min-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #00bcd4;
  opacity: 0.2;
`;

const SmallCircle = styled.div`
  position: absolute;
  top: 20px;
  right: 100px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2196F3;
`;

const ClassroomInterface = () => {
  return (
    <Container>
      <BackgroundShapes />
      <SmallCircle />
      <GridContainer>
        <InstructorCard>
          <UserImage src={person1} alt="Instructor" />
          <UserInfo>
            <InstructorLabel>Instructor</InstructorLabel>
            <UserStatus />
            Emmy Howard
          </UserInfo>
          <ButtonContainer>
            <PresentButton>Present</PresentButton>
            <CallButton>📞 Call</CallButton>
          </ButtonContainer>
        </InstructorCard>
        <UserCard>
          <UserImage src={person2} alt="User 1" />
          <UserInfo><UserStatus />Tamara Clarke</UserInfo>
        </UserCard>
        <UserCard>
          <UserImage src={person3} alt="User 2" />
          <UserInfo><UserStatus />Adam Login</UserInfo>
        </UserCard>
        <UserCard>
          <UserImage src={person4} alt="User 3" />
          <UserInfo><UserStatus />Hanson Holland</UserInfo>
        </UserCard>
        <UserCard>
          <UserImage src={person5} alt="User 4" />
          <UserInfo><UserStatus />Patricia Mendoza</UserInfo>
        </UserCard>
      </GridContainer>
      <InfoContainer>
        <Title>A <span>user interface</span> designed for the classroom</Title>
        <InfoItem>
          <InfoIcon color="#4285f4" />
          <InfoText>Teachers dont get lost in the grid view and have a dedicated Podium space.</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoIcon color="#fbbc05" />
          <InfoText>TAs and presenters can be moved to the front of the class.</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoIcon color="#34a853" />
          <InfoText>Teachers can easily see all students and class data at one time.</InfoText>
        </InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default ClassroomInterface;
