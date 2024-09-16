import  { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// Assume classroom image is imported
import classroom from "../../assets/classroom.png";
import classroomVideo from "../../assets/classroomVideo.mp4";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333366;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Highlight = styled.span`
  color: #00cccc;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #333366;
  text-decoration: none;
  border: 2px solid #333366;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333366;
    color: white;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const GreenCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #00cc66;
  border-radius: 50%;
  top: -30px;
  left: -30px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: -20px;
    left: -20px;
  }
`;

const BlueShape = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #00cccc;
  border-radius: 0 0 100px 0;
  top: -20px;
  right: -20px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: -10px;
    right: -10px;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #00cccc;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

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
        <LearnMoreButton href="#">Learn more</LearnMoreButton>
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