
import styled from 'styled-components';
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import video from "../../assets/video.png";
import audio from "../../assets/audio.png";
import arrow from "../../assets/arrow.png";
import screen from "../../assets/screen.png";
import call from "../../assets/call.png";
import meetingLeft from "../../assets/meetingLeft.png";
import meetingRight from "../../assets/meetingRight.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  padding: 10px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
    margin-top: 4rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex: 2;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const RightSection = styled.div`
  flex: 1.5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const BackButton = styled.button`
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  margin: 5px 0 0 0;
  color: #666;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const SettingsIcon = styled.span`
  font-size: 24px;
  color: #666;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const MainVideo = styled.img`
  width: 100%;
  display: block;
`;

const ParticipantContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

const ParticipantImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  gap: 1rem;
  transform: translateX(-50%);
  width: 90%;

  @media (min-width: 768px) {
    width: auto;
    bottom: 20px;
  }
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  img {
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const CourseContents = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const CourseSection = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const LessonItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const BookSection = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BookCard = styled.div`
  background-color: #f0f4f8;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const BookImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

function Meeting() {
  return (
    <Container>
      <LeftSection>
        <Header>
          <BackButton>←</BackButton>
          <div>
            <Title>UX/UI Design Conference Meeting</Title>
            <Subtitle>9 Lessons 6h 30min</Subtitle>
          </div>
          <SettingsIcon>⚙️</SettingsIcon>
        </Header>
        <VideoContainer>
          <MainVideo src={person1} alt="Main video" />
          <ParticipantContainer>
            <ParticipantImage src={person2} alt="Participant 1" />
            <ParticipantImage src={person4} alt="Participant 2" />
            <ParticipantImage src={person5} alt="Participant 3" />
          </ParticipantContainer>
          <ControlBar>
            <ControlButton><img src={video} alt="Video" /></ControlButton>
            <ControlButton><img src={audio} alt="Audio" /></ControlButton>
            <ControlButton><img src={call} alt="Call" /></ControlButton>
            <ControlButton><img src={screen} alt="Screen" /></ControlButton>
            <ControlButton><img src={arrow} alt="Arrow" /></ControlButton>
          </ControlBar>
        </VideoContainer>
      </LeftSection>
      <RightSection>
        <CourseContents>
          <CourseHeader>
            <h2>Course Contents</h2>
            <span>2/5 COMPLETED 📅</span>
          </CourseHeader>
          <CourseSection>
            <SectionTitle>
              Get Started
              <span>1 Hour 5 Lessons</span>
            </SectionTitle>
          </CourseSection>
          <CourseSection>
            <SectionTitle>
              Illustrator Structures ▲
              <span>2 Hour 3 Lessons</span>
            </SectionTitle>
            <LessonItem>
              <span>1. Lorem ipsum dolor sit amet</span>
              <span>55:00</span>
            </LessonItem>
            <LessonItem>
              <span>2. Lorem ipsum dolor</span>
              <span>25:00 🔒</span>
            </LessonItem>
            <LessonItem>
              <span>3. Lorem ipsum dolor sit amet</span>
              <span>30:00 🔒</span>
            </LessonItem>
          </CourseSection>
        </CourseContents>
        <BookSection>
          <h2>Book for you</h2>
          <BookContainer>
            <BookCard>
              <BookImage src={meetingRight} alt="Book 1" />
              <h3>All Benefits of PLUS</h3>
              <p>$24</p>
            </BookCard>
            <BookCard>
              <BookImage src={meetingLeft} alt="Book 2" />
              <h3>All Benefits of PLUS</h3>
              <p>$24</p>
            </BookCard>
          </BookContainer>
        </BookSection>
      </RightSection>
    </Container>
  );
}

export default Meeting;







