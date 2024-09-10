import styled from "styled-components";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #2f327d;
  margin-bottom: 20px;

  span {
    color: #49bbbd;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #696984;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) =>
    props.primary
      ? `
    background-color: white;
    color: #2F327D;
  `
      : `
    background-color: #49BBBD;
    color: white;
  `}

  &:hover {
    opacity: 0.9;
  }
`;
const styleButton = {
  backgroundColor: "transparent",
  border: "1px solid white",
};

const WhatIsELearning = () => {
  return (
    <Section>
      <Title>
        What is <span>E-Learning</span>
      </Title>
      <Description>
        E-Learning is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </Description>
      <CardContainer>
        <Card>
          <CardImage src={left} alt="Instructor" />
          <CardContent>
            <CardTitle>FOR INSTRUCTORS</CardTitle>
            <Button style={styleButton}>Start a class today</Button>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={right} alt="Students" />
          <CardContent>
            <CardTitle>FOR STUDENTS</CardTitle>
            <Button>Enter access code</Button>
          </CardContent>
        </Card>
      </CardContainer>
    </Section>
  );
};

export default WhatIsELearning;
