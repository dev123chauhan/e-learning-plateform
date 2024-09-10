import bannerImage from "../../assets/bannerImage.png";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

const TextContent = styled.div`
  max-width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 50%;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  
  span:first-child {
    color: #00bcd4;
  }
  
  span:last-child {
    color: #3f51b5;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 45%;
    margin-bottom: 0;
  }
`;

const StudentImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50% 50% 0 50%;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #ff7675;
  border-radius: 50%;
  top: -50px;
  right: -50px;
  z-index: -1;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${props => props.color};
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const TeachersAndLearnersTools = () => {
  return (
    <Container>
      <TextContent>
        <Title>
          <span>Tools</span> For <span>Teachers</span><br />
          And Learners
        </Title>
        <Paragraph>
          Class has a dynamic set of teaching tools built to
          be deployed and used during class. Teachers can
          handout assignments in real-time for students to
          complete and submit.
        </Paragraph>
      </TextContent>
      <ImageContainer>
        <BackgroundCircle />
        <StudentImage src={bannerImage} alt="Student" />
        <FloatingIcon color="#4285f4" style={{ top: '10%', right: '20%' }}>🎓</FloatingIcon>
        <FloatingIcon color="#fbbc05" style={{ bottom: '20%', left: '10%' }}>📚</FloatingIcon>
        <Dot color="#4CAF50" style={{ top: '5%', right: '5%' }} />
        <Dot color="#9C27B0" style={{ bottom: '15%', right: '25%' }} />
        <Dot color="#FF5722" style={{ top: '40%', left: '5%' }} />
      </ImageContainer>
    </Container>
  );
};

export default TeachersAndLearnersTools;
