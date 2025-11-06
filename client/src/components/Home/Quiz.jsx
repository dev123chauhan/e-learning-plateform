import italyImage from "../../../public/assets/italy.png";
import { Container, ContentSection, Description, IconCircle, Image, Question, QuestionLabel, QuizCard, SuccessMessage, Title } from "../../styles/quizStyles";
const Quiz = () => {
  return (
    <Container>
      <QuizCard>
        <QuestionLabel>Question 1</QuestionLabel>
        <Question>True or false? This play takes place in Italy</Question>
        <Image src={italyImage} alt="Venice" />
        <SuccessMessage>
          <span role="img" aria-label="checkmark" style={{ marginRight: '10px' }}>✅</span>
          Your answer was sent successfully
        </SuccessMessage>
        <IconCircle style={{ backgroundColor: '#ff4757', color: 'white' }}>✕</IconCircle>
        <IconCircle style={{ backgroundColor: '#00c853', color: 'white', right: '70px' }}>✓</IconCircle>
      </QuizCard>
      <ContentSection>
        <Title>
          Assessments,<br />
          <span>Quizzes,</span> Tests
        </Title>
        <Description>
          Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
        </Description>
      </ContentSection>
    </Container>
  );
};

export default Quiz;
