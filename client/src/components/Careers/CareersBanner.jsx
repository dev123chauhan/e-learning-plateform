import avatarImage from "../../../public/assets/avatarImage.png";
import bgCourse from "../../../public/assets/bgCourse.png";
import { Container, Title, CourseGrid } from "../../styles/careersBannerStyles";
import Card from "../../common/Card";
import { careersBannerCourseList } from "../../lib/careersBannerCourseList";
export default function CareersBanner() {
  const styleBg = {
    backgroundImage: `url(${bgCourse})`,
    marginTop: "5rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={styleBg}>
      <Container>
        <Title>Welcome back, ready for your next lesson?</Title>
        <CourseGrid>
          {careersBannerCourseList.map((course, index) => (
            <Card
              key={index}
              variant="career"
              image={course.image}
              title={course.title}
              footer={{
                profileImage: avatarImage,
                profileName: "Lina"
              }}
              progress={course.progress}
            />
          ))}
        </CourseGrid>
      </Container>
    </div>
  );
}