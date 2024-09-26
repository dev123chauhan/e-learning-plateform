import styled from 'styled-components';
import Rating from "./Rating";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
const Container = styled.div`
  margin: 0 auto;
`;

const ImageSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
`;

const OverlayCard = styled.div`
  position: absolute;
  right: 70px;
  top: 235px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const SmallImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 143px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-left: 10px;
`;

const Discount = styled.span`
  color: #49BBBD;
  margin-left: 10px;
`;

const TimeLeft = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const BuyNowButton = styled.button`
  width: 100%;
  padding: 7px;
  background-color: ${props => props.disabled ? '#ccc' : '#49BBBD'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const CourseIncludes = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CourseItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #49BBBD;
    margin-right: 10px;
  }
`;

const ShareSection = styled.div`
  display: flex;
  gap: 10px;
`;

const ShareIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;
const OverviewSection = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;
const OverviewButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#49BBBD' : '#f0f0f0'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'black'};
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  width:1100px;
  color: #666;
`;

const BulletPoints = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
  color: #333;
`;

const BulletPoint = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;
const Content = styled.div`
  margin-left: 2rem;
`;
function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

 


  const handleEnrollmentSuccess = () => {
    setIsEnrolled(true);
    localStorage.setItem(`isEnrolled_${id}`, true);
  };



  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
    const enrolled = localStorage.getItem(`isEnrolled_${id}`);
    if (enrolled) {
      setIsEnrolled(true);
    }
  }, [id]);



  const handleBuyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <Container>
      <ImageSection>
        <MainImage src={course?.image} alt={course?.title} />
        <Content>
    <Title>{course?.title}</Title>
      <Description>{course?.description}</Description>
      <BulletPoints>
        {course?.bullets && course?.bullets.map((bullet, index) => (
          <BulletPoint key={index}>{bullet}</BulletPoint>
        ))}
      </BulletPoints>
      </Content>
        <OverlayCard>
          <SmallImage src={course?.image} alt={course?.title} />
          <PriceSection>
            <CurrentPrice>{course?.price}</CurrentPrice>
            <OriginalPrice>$99.99</OriginalPrice>
            <Discount>50% Off</Discount>
          </PriceSection>
          <TimeLeft>11 hour left at this price</TimeLeft>
          <BuyNowButton onClick={handleBuyNowClick} disabled={isEnrolled}>
          {isEnrolled ? 'Enrolled' : 'Enroll Now'}
        </BuyNowButton>
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}  
          courseId={id}
       
          onEnrollmentSuccess={handleEnrollmentSuccess}
        />
          <h3>This Course included</h3>
          <CourseIncludes>
            <CourseItem>Money Back Guarantee</CourseItem>
            <CourseItem>Access on all devices</CourseItem>
            <CourseItem>Certification of completion</CourseItem>
            <CourseItem>32 Module</CourseItem>
          </CourseIncludes>
          <h3>Training 5 or more people</h3>
          <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <h3>Share this course</h3>
          <ShareSection>
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
          </ShareSection>
        </OverlayCard>
      </ImageSection>
      
      <OverviewSection>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton active>Overview</OverviewButton>
      </OverviewSection>
      <Rating/>
    </Container>
  );
}

export default CourseDetail;




