import left from "../../../public/assets/left.png";
import right from "../../../public/assets/right.png";
import { Button, Card, CardContainer, CardContent, CardImage, CardTitle, Description, Section, Title } from "../../styles/whatiselearningStyles";
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
            <Button>Start a class today</Button>
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
