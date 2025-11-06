import { courseTypeLists } from "../../lib/courseTypeLists";
import {
  Card,
  CardContainer,
  IconWrapper,
  Stat,
  Stats,
  Title,
} from "../../styles/courseTypeStyles";
const CourseType = () => {
  return (
    <CardContainer>
      {courseTypeLists.map((course, index) => (
        <Card key={index} $bgColor={course.bgColor}>
          <IconWrapper>
            <course.icon size={24} color="#000" />
          </IconWrapper>
          <Title>{course.title}</Title>
          <Stats>
            <Stat>
              {course.icon} {course.stats.books}
            </Stat>
            <Stat>
              {course.icon} {course.stats.files}
            </Stat>
            <Stat>
              {course.icon} {course.stats.users}
            </Stat>
          </Stats>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CourseType;
