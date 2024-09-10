import styled from 'styled-components';
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const Container = styled.div`
  background: linear-gradient(135deg, #e0f7fa 0%, #80deea 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 40px;
    margin: 40px auto;
  }
`;

const CallCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #e0f7fa;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4757;
  }
`;

const Title = styled.h1`
  color: #3a4a5b;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #5d6d7e;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const CardText = styled.p`
  color: #3a4a5b;
  font-size: 14px;
  margin: 5px 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const OneOnOneDiscussions = () => {
  return (
    <Container>
      <Title>One-on-One Discussions</Title>
      <Description>
        Teachers and teacher assistants can talk with students privately without leaving the video environment.
      </Description>
      <CardContainer>
        <CallCard>
          <ProfileImage src={person1} alt="Teacher" />
          <CardText>Private Discussion</CardText>
          <CardText>Your video can’t be seen by others</CardText>
          <Button>End Discussion</Button>
        </CallCard>
        <CallCard>
          <ProfileImage src={person2} alt="Student" />
          <CardText>Patricia Mendoza</CardText>
        </CallCard>
      </CardContainer>
    </Container>
  );
};

export default OneOnOneDiscussions;
