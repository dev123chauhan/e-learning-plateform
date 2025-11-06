import { classManagementStudentLists } from "../../lib/classManagementStudentLists";
import { Container, ContentSection, Description, ExportButton, GradebookCard, GradebookHeader, GradebookSection, GradebookTitle, Score, ScoreBar, StarIcon, StudentAvatar, StudentRow, Title } from "../../styles/classroomManagementStyles";
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
          {classManagementStudentLists.map((student, index) => (
            <StudentRow key={index}>
              <StudentAvatar src={student.avatar} alt={student.name} />
              <ScoreBar 
                color={student.color}
                percentage={student.score}
              />
              <Score color={student.color}>{student.score}</Score>
            </StudentRow>
          ))}
        </GradebookCard>
        <ExportButton>Export</ExportButton>
      </GradebookSection>
    </Container>
  );
};

export default ClassManagement;