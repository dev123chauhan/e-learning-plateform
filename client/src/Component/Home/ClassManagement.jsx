import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;

  span:first-child {
    color: #00bcd4;
  }
  
  span:last-child {
    color: #3f51b5;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const GradebookSection = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const GradebookCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const GradebookHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StarIcon = styled.div`
  background-color: #ffd700;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const GradebookTitle = styled.h3`
  font-size: 20px;
  color: white;
  background-color: #2196f3;
  padding: 10px 20px;
  border-radius: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const StudentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StudentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ScoreBar = styled.div`
  height: 10px;
  border-radius: 5px;
  flex-grow: 1;
  background-color: ${props => props.color};
`;

const Score = styled.span`
  background-color: ${props => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: 10px;
`;

const ExportButton = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: -20px;
  right: 20px;

  @media (max-width: 767px) {
    position: static;
    margin-top: 20px;
  }
`;

const ClassManagement = () => {
  return (
    <Container>
      <ContentSection>
        <Title>
          <span>Class Management</span><br />
          <span>Tools for Educators</span>
        </Title>
        <Description>
          Class provides tools to help run and manage the class
          such as Class Roster, Attendance, and more. With the
          Gradebook, teachers can review and grade tests and
          quizzes in real-time.
        </Description>
      </ContentSection>
      <GradebookSection>
        <GradebookCard>
          <GradebookHeader>
            <StarIcon>★</StarIcon>
            <GradebookTitle>GradeBook</GradebookTitle>
          </GradebookHeader>
          <StudentRow>
            <StudentAvatar src={person2} alt="Student 1" />
            <ScoreBar color="#2196f3" style={{ width: '80%' }} />
            <Score color="#2196f3">100</Score>
          </StudentRow>
          <StudentRow>
            <StudentAvatar src={person3} alt="Student 2" />
            <ScoreBar color="#4caf50" style={{ width: '60%' }} />
            <Score color="#4caf50">85</Score>
          </StudentRow>
          <StudentRow>
            <StudentAvatar src={person4} alt="Student 3" />
            <ScoreBar color="#2196f3" style={{ width: '30%' }} />
            <Score color="#2196f3">98</Score>
          </StudentRow>
          <StudentRow>
            <StudentAvatar src={person5} alt="Student 4" />
            <ScoreBar color="#f44336" style={{ width: '50%' }} />
            <Score color="#f44336">75</Score>
          </StudentRow>
        </GradebookCard>
        <ExportButton>Export</ExportButton>
      </GradebookSection>
    </Container>
  );
};

export default ClassManagement;
