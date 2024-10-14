import styled from 'styled-components';
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";

const Container = styled.div`   
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative; 
  max-width: 1200px;
  margin: 0 auto;
  @media(min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  @media(min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 65%;
  }
`;

const UserCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
`;

const UserStatus = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin-right: 5px;
`;

const InstructorCard = styled(UserCard)`
  grid-column: span 2;
  grid-row: span 2;
  @media(min-width: 1024px) {
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;

const InstructorLabel = styled.div`
  background-color: #4285f4;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
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
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const PresentButton = styled(Button)`
  background-color: #4285f4;
`;

const CallButton = styled(Button)`
  background-color: #ea4335;
`;

const InfoContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  @media(min-width: 1024px) {
    width: 30%;
    margin-top: 0;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: bold;
  span {
    color: #00C9A7;
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
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
`;

const InfoText = styled.p`
  color: #555;
  font-size: 16px;
  margin: 0;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #E8F5E9;
  z-index: -1;
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
      <BackgroundCircle />
      <SmallCircle />
      <GridContainer>
        <InstructorCard>
          <UserImage src={person1} alt="Instructor" />
          <UserInfo>
            <InstructorLabel>Instructor</InstructorLabel>
            <UserStatus />
            Eveny Howard
          </UserInfo>
          <ButtonContainer>
            <PresentButton>Present</PresentButton>
            <CallButton>📞 Call</CallButton>
          </ButtonContainer>
        </InstructorCard>
        <UserCard>
          <UserImage src={person2} alt="User 1" />
          <UserInfo><UserStatus />Tamara</UserInfo>
        </UserCard>
        <UserCard>
          <UserImage src={person3} alt="User 2" />
          <UserInfo><UserStatus />Adam Login</UserInfo>
        </UserCard>
        <UserCard>
          <UserImage src={person4} alt="User 3" />
          <UserInfo><UserStatus />Harrison</UserInfo>
        </UserCard>
        <UserCard>
          <UserImage src={person5} alt="User 4" />
          <UserInfo><UserStatus />Patricia Mendoza</UserInfo>
        </UserCard>
      </GridContainer>
      <InfoContainer>
        <Title>A <span>user interface</span> designed<br />for the classroom</Title>
        <InfoItem>
          <InfoIcon color="#4285f4">📊</InfoIcon>
          <InfoText>Teachers dont get lost in the grid view and have a dedicated Podium space.</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoIcon color="#fbbc05">🔀</InfoIcon>
          <InfoText>TAs and presenters can be moved to the front of the class.</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoIcon color="#34a853">👥</InfoIcon>
          <InfoText>Teachers can easily see all students and class data at one time.</InfoText>
        </InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default ClassroomInterface;