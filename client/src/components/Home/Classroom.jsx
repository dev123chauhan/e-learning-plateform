import  { useState, useRef, useEffect } from 'react';
import classroom from "../../../public/assets/classroom.png";
import classroomVideo from "../../../public/assets/classroomVideo.mp4";
import { BlueShape, Container, ContentSection, Description, GreenCircle, Highlight, Image, ImageSection, LearnMoreButton, PlayButton, Title, Video, VideoOverlay } from '../../styles/classroomStyles';
const Classroom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const imageSectionRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <Container>
      <ContentSection>
        <Title>
          <Highlight>E-Learning</Highlight> school management software
        </Title>
        <Description>
          E-Learning school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
        </Description>
        <LearnMoreButton>Learn more</LearnMoreButton>
      </ContentSection>
      <ImageSection ref={imageSectionRef}>
        <Image src={classroom} alt="Classroom" />
        <GreenCircle />
        <BlueShape />
        <PlayButton onClick={handlePlayClick} />
        {isPlaying && (
          <VideoOverlay onClick={handleOverlayClick}>
            <Video 
              ref={videoRef}
              autoPlay 
              controls 
              onEnded={handleVideoEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <source src={classroomVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoOverlay>
        )}
      </ImageSection>
    </Container>
  );
};

export default Classroom;