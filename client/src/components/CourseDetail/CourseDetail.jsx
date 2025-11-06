import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Rating from './Rating';
import EnrollmentForm from './EnrolledForm';
import { useModal } from '../../context/ModalContext';
import {
  BulletPoint, BulletPoints, BuyNowButton, Container, Content,
  CourseIncludes, CourseItem, CurrentPrice, Description, Discount,
  ImageSection, MainImage, OriginalPrice, OverlayCard, OverviewButton,
  OverviewSection, PriceSection, ShareIcon, ShareSection, SmallImage,
  TimeLeft, Title,
} from '../../styles/courseDetailStyles';
import { courseService } from '../../api/services/courseService';

function CourseDetail() {
  const { id } = useParams();
  const { openModal } = useModal();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollmentSuccess = () => {
    setIsEnrolled(true);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const data = await courseService.getCourseById(id);
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleBuyNowClick = () => {
    openModal(
      <EnrollmentForm 
        courseId={id} 
        onEnrollmentSuccess={handleEnrollmentSuccess} 
      />
    );
  };

  return (
    <Container>
      <ImageSection>
        <MainImage src={course?.image} alt={course?.title} />
        <Content>
          <Title>{course?.title}</Title>
          <Description>{course?.description}</Description>
          <BulletPoints>
            {course?.bullets?.map((bullet, index) => (
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
          <h3>This Course included</h3>
          <CourseIncludes>
            <CourseItem>Money Back Guarantee</CourseItem>
            <CourseItem>Access on all devices</CourseItem>
            <CourseItem>Certification of completion</CourseItem>
            <CourseItem>32 Module</CourseItem>
          </CourseIncludes>
          <h3>Share this course</h3>
          <ShareSection>
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
          </ShareSection>
        </OverlayCard>
      </ImageSection>

      <OverviewSection>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton active>Overview</OverviewButton>
      </OverviewSection>
      <Rating />
    </Container>
  );
}

export default CourseDetail;






























































































































