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
      {courseTypeLists.map((course, index) => {
        const IconComponent = course.icon; 
        return (
          <Card key={index} $bgColor={course.bgColor}>
            <IconWrapper>
              <IconComponent size={24} color="#000" />
            </IconWrapper>
            <Title>{course.title}</Title>
            <Stats>
              <Stat>
                <IconComponent size={16} /> {course.stats.books}
              </Stat>
              <Stat>
                <IconComponent size={16} /> {course.stats.files}
              </Stat>
              <Stat>
                <IconComponent size={16} /> {course.stats.users}
              </Stat>
            </Stats>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CourseType;
