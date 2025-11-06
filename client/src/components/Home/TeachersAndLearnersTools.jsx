import bannerImage from "../../../public/assets/bannerImage.png";
import { BackgroundCircle, Container, Dot, FloatingIcon, ImageContainer, Paragraph, StudentImage, TextContent, Title } from "../../styles/teachersAndLearnersToolsStyles";
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
