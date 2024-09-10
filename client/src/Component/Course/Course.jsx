import card1 from "../../assets/card1.png";
import courseImg from "../../assets/courseImg.png";
import avatarImage from "../../assets/avatarImage.png";
import bgCourse from "../../assets/bgCourse.png";
import courseImg2 from "../../assets/courseImg2.png";
import styled from 'styled-components';
import Category from "./Category";
import RecommendedCourse from "./RecommendedCourse";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const styleBg = {
  backgroundImage: `url(${bgCourse})`,
  marginTop: "5rem",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const CourseCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const CourseInfo = styled.div`
  padding: 15px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CourseName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const InstructorAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`;

const InstructorName = styled.span`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  height: 5px;
  margin-top: 10px;

  @media (max-width: 480px) {
    margin-top: 8px;
  }
`;

const Progress = styled.div`
  width: 70%;
  height: 100%;
  background-color: #49BBBD;
`;

const LessonInfo = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Course = () => {
  const courseImages = [card1, courseImg, courseImg2];

  return (
    <>
      <div style={styleBg}>
        <Container>
          <Title>Welcome back, ready for your next lesson?</Title>
          <CourseGrid>
            {courseImages.map((image, index) => (
              <CourseCard key={index}>
                <CourseImage src={image} alt={`Course thumbnail ${index + 1}`} />
                <CourseInfo>
                  <CourseName>AWS Certified Solutions Architect</CourseName>
                  <InstructorInfo>
                    <InstructorAvatar src={avatarImage} alt="Instructor" />
                    <InstructorName>Lina</InstructorName>
                  </InstructorInfo>
                  <ProgressBar>
                    <Progress />
                  </ProgressBar>
                  <LessonInfo>Lesson 5 of 7</LessonInfo>
                </CourseInfo>
              </CourseCard>
            ))}
          </CourseGrid>
        </Container>
      </div>
      <Category />
      <RecommendedCourse />
    </>
  );
};

export default Course;
