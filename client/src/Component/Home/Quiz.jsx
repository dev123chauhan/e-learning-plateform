import styled from 'styled-components';
import italyImage from "../../assets/italy.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f7ff;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

const QuizCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 45%;
    padding: 30px;
    margin-bottom: 0;
  }
`;

const QuestionLabel = styled.div`
  background-color: #e8eeff;
  color: #5468ff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 15px;
`;

const Question = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const SuccessMessage = styled.div`
  background-color: #e6f7f0;
  color: #00c853;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const IconCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -15px;
  right: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    top: -20px;
    right: 30px;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 45%;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;

  span {
    color: #00c853;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

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
