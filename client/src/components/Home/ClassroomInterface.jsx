import person1 from "../../../public/assets/person1.png";
import person2 from "../../../public/assets/person2.png";
import person3 from "../../../public/assets/person3.png";
import person4 from "../../../public/assets/person4.png";
import person5 from "../../../public/assets/person5.png";
import { BackgroundCircle, ButtonContainer, CallButton, Container, GridContainer, InfoContainer, InfoIcon, InfoItem, InfoText, InstructorCard, InstructorLabel, PresentButton, SmallCircle, Title, UserCard, UserImage, UserInfo, UserStatus } from "../../styles/classroomInterfaceStyles";
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