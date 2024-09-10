import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import avatarImage from "../../assets/avatarImage.png";
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-left: 3rem;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 1rem;
  }
`;

const SeeAll = styled.a`
  color: #00a0e9;
  text-decoration: none;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 2rem;
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 10px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 130px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;

const Content = styled.div`
  padding: 15px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const CourseTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const Instructor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;

const Price = styled.div`
  span:first-child {
    text-decoration: line-through; 
    color: #888;
    margin-right: 5px;
  }

  span:last-child {
    color: #49BBBD;
    font-weight: bold;
  }
`;

const RecommendedCourse = () => {
  const courses = [
    {
      image: card1,
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      instructor: 'Lina',
      avatar: avatarImage,
      originalPrice: 100,
      discountedPrice: 80
    },
    {
      image: card2,
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      instructor: 'Lina',
      avatar: avatarImage,
      originalPrice: 100,
      discountedPrice: 80
    },
    {
      image: card3,
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      instructor: 'Lina',
      avatar: avatarImage,
      originalPrice: 100,
      discountedPrice: 80
    },
    {
      image: card4,
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      instructor: 'Lina',
      avatar: avatarImage,
      originalPrice: 100,
      discountedPrice: 80
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Recommended for you</Title>
        <SeeAll href="#">See all</SeeAll>
      </Header>
      <Grid>
        {courses.map((course, index) => (
          <Card key={index}>
            <Image src={course.image} alt={course.title} />
            <Content>
              <Category>
                <span>{course.category}</span>
                <span>{course.duration}</span>
              </Category>
              <CourseTitle>{course.title}</CourseTitle>
              <Description>{course.description}</Description>
              <Instructor>
                <InstructorInfo>
                  <Avatar src={course.avatar} alt={course.instructor} />
                  <span>{course.instructor}</span>
                </InstructorInfo>
                <Price>
                  <span>${course.originalPrice}</span>
                  <span>${course.discountedPrice}</span>
                </Price>
              </Instructor>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendedCourse;
