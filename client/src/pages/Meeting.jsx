import person1 from "../../public/assets/person1.png";
import person2 from "../../public/assets/person2.png";
import person4 from "../../public/assets/person4.png";
import person5 from "../../public/assets/person5.png";
import video from "../../public/assets/video.png";
import audio from "../../public/assets/audio.png";
import arrow from "../../public/assets/arrow.png";
import screen from "../../public/assets/screen.png";
import call from "../../public/assets/call.png";
import meetingLeft from "../../public/assets/meetingLeft.png";
import meetingRight from "../../public/assets/meetingRight.png";
import { BackButton, BookCard, BookContainer, BookImage, BookSection, Container, ControlBar, ControlButton, CourseContents, CourseHeader, CourseSection, Header, LeftSection, LessonItem, MainVideo, ParticipantContainer, ParticipantImage, RightSection, SectionTitle, SettingsIcon, Subtitle, Title, VideoContainer } from "../styles/meetingStyles";
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







