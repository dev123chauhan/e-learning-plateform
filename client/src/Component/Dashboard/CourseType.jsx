import styled from 'styled-components';
import { Book, Palette, Play } from 'lucide-react';

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 12px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CourseType = () => {
  const courses = [
    { title: 'Basic: HTML & CSS', icon: Book, bgColor: '#E8EFFF', stats: { books: 24, files: 8, users: 99 } },
    { title: 'Branding Design', icon: Palette, bgColor: '#FFF3E7', stats: { books: 24, files: 8, users: 99 } },
    { title: 'Motion Design', icon: Play, bgColor: '#E7FFE9', stats: { books: 24, files: 8, users: 99 } },
  ];

  return (
    <CardContainer>
      {courses.map((course, index) => (
        <Card key={index} bgColor={course.bgColor}>
          <IconWrapper>
            <course.icon size={24} color="#000" />
          </IconWrapper>
          <Title>{course.title}</Title>
          <Stats>
            <Stat><Book size={16} /> {course.stats.books}</Stat>
            <Stat><Palette size={16} /> {course.stats.files}</Stat>
            <Stat><Play size={16} /> {course.stats.users}</Stat>
          </Stats>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CourseType;