import { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoPlayerEnrolledCourse from './VideoPlayer';
import video1 from "../../assets/Introduction to Web Development __ Setup __ Part 1.mp4"
import video2 from "../../assets/understanding web browser.mp4"
import video3 from "../../assets/html css 3.mp4"
import video4 from "../../assets/html css 4.mp4"
import { FiBook } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: white;
  padding: 20px;
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const NavButton = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #BFD3FE;
  color: #1D58D8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  color: black;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CourseTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Instructor = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const AccordionSection = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.$isOpen ? '#49BBBD' : 'inherit'};
`;

const AccordionContent = styled.div`
  padding-left: 20px;
  max-height: ${props => (props.$isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const LessonItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: ${props => props.$active ? '#49BBBD' : '#666'};
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  font-size: 14px;
  cursor: pointer;
`;

const LessonIcon = styled.span`
  margin-right: 10px;
  color: #49BBBD;
`;

const SidebarTitle = styled.h2`
  color: #49BBBD;
  font-size: 18px;
  margin-bottom: 20px;
`;
const styleMark ={
  backgroundColor: "#CEFFEC",
  color: "#0ACF83"
}
function Accordion({ title, children, index, isOpen, toggleAccordion }) {
  return (
    <AccordionSection>
      <AccordionTitle $isOpen={isOpen} onClick={() => toggleAccordion(index)}>
        {title}
        <span>{isOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span>
      </AccordionTitle>
      <AccordionContent $isOpen={isOpen}>{children}</AccordionContent>
    </AccordionSection>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired
};

function EnrolledCourse() {

  const courseStructure = [
    {
      title: "Getting Started with Web Development",
      lessons: [
        { title: "Introduction to Web Development", url: video1 },
        { title: "Understanding the Web Browser", url: video2 },
        { title: "Setting Up Your Development Environment", url: video3 },
        { title: "Your First Web Page", url: video4 },
      ]
    },
    {
      title: "HTML Fundamentals",
      lessons: [
        { title: "HTML Document Structure", url: video1 },
        { title: "Working with Text and Headings", url: video2 },
        { title: "Links and Images", url: video3 },
        { title: "Lists and Tables", url: video4 },
      ]
    },
    {
      title: "HTML5 and Semantic Markup",
      lessons: [
        { title: "Introduction to HTML5", url: video1 },
        { title: "Semantic Elements", url: video2 },
        { title: "Forms and Input Types", url: video3 },
        { title: "Audio and Video Elements", url: video4 },
      ]
    },
    {
      title: "CSS Basics",
      lessons: [
        { title: "Introduction to CSS", url: video1 },
        { title: "Selectors and Properties", url: video2 },
        { title: "The Box Model", url: video3 },
        { title: "Colors and Backgrounds", url: video4 },
      ]
    },
    {
      title: "CSS Layout",
      lessons: [
        { title: "Display and Positioning", url: video1 },
        { title: "Flexbox", url: video2 },
        { title: "CSS Grid", url: video3 },
        { title: "Responsive Design Basics", url: video4 },
      ]
    },
    {
      title: "Advanced CSS Techniques",
      lessons: [
        { title: "CSS Animations and Transitions", url: video1 },
        { title: "CSS Preprocessors (Sass)", url: video2 },
        { title: "CSS Custom Properties (Variables)", url: video3 },
        { title: "CSS Frameworks Overview", url: video4 },
      ]
    },
    {
      title: "JavaScript Fundamentals",
      lessons: [
        { title: "Introduction to JavaScript", url: video1 },
        { title: "Variables and Data Types", url: video2 },
        { title: "Operators and Control Flow", url: video3 },
        { title: "Functions and Scope", url: video4 },
      ]
    },
    {
      title: "JavaScript and the DOM",
      lessons: [
        { title: "Understanding the DOM", url: video1 },
        { title: "Selecting and Manipulating Elements", url: video2 },
        { title: "Events and Event Handling", url: video3 },
        { title: "Creating and Removing Elements", url: video4 },
      ]
    },
    {
      title: "Advanced JavaScript",
      lessons: [
        { title: "Object-Oriented JavaScript", url: video1 },
        { title: "ES6+ Features", url: video2 },
        { title: "Asynchronous JavaScript", url: video3 },
        { title: "Working with APIs", url: video4 },
      ]
    },
    {
      title: "JavaScript Libraries and Frameworks",
      lessons: [
        { title: "Introduction to jQuery", url: video1 },
        { title: "Using JavaScript Libraries", url: video2 },
        { title: "Overview of Popular JS Frameworks", url: video3 },
        { title: "Building a Mini-Project with a JS Library", url: video4 },
      ]
    },
    {
      title: "Web Storage and State Management",
      lessons: [
        { title: "Working with Local Storage", url: video1 },
        { title: "Session Storage", url: video2 },
        { title: "Cookies in JavaScript", url: video3 },
        { title: "State Management Concepts", url: video4 },
      ]
    },
    {
      title: "Web Security Basics",
      lessons: [
        { title: "Common Web Security Threats", url: video1 },
        { title: "Cross-Site Scripting (XSS) Prevention", url: video2 },
        { title: "HTTPS and SSL Certificates", url: video3 },
        { title: "Best Practices for Secure Web Development", url: video4 },
      ]
    },
    {
      title: "Project: Interactive Website",
      lessons: [
        { title: "Project Setup and Planning", url: video1 },
        { title: "Building the HTML Structure", url: video2 },
        { title: "Styling with CSS", url: video3 },
        { title: "Adding Interactivity with JavaScript", url: video4 },
      ]
    },
    {
      title: "Web Performance and Optimization",
      lessons: [
        { title: "Web Performance Basics", url: video1 },
        { title: "Optimizing Images and Assets", url: video2 },
        { title: "Caching and Compression", url: video3 },
        { title: "Performance Testing and Tools", url: video4 },
      ]
    },
    {
      title: "Web Accessibility and Best Practices",
      lessons: [
        { title: "Introduction to Web Accessibility", url: video1 },
        { title: "Semantic HTML", url: video2 },
        { title: "ARIA and Keyboard Navigation", url: video3 },
        { title: "Testing for Accessibility", url: video4 },
      ]
    },
    {
      title: "Version Control with Git",
      lessons: [
        { title: "Introduction to Version Control", url: video1 },
        { title: "Basic Git Commands", url: video2 },
        { title: "Branching and Merging", url: video3 },
        { title: "Collaborating with GitHub", url: video4 },
      ]
    },
        {
      title: "Final Project",
      lessons: [
        { title: "Planning Your Web Application", url: video1 },
        { title: "Building the HTML Structure", url: video2 },
        { title: "Styling with CSS", url: video3 },
        { title: "Adding Interactivity with JavaScript", url: video4 },
        { title: "Deploying Your Web Application", url: video1 },
      ]
    },

  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const currentVideo = courseStructure[currentSectionIndex].lessons[currentLessonIndex];

  const openCorrectAccordion = (sectionIndex) => {
    if (!openAccordions.includes(sectionIndex)) {
      setOpenAccordions(prev => [...prev, sectionIndex]);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevSectionIndex);
      setCurrentLessonIndex(courseStructure[prevSectionIndex].lessons.length - 1);
      openCorrectAccordion(prevSectionIndex);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < courseStructure[currentSectionIndex].lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentSectionIndex < courseStructure.length - 1) {
      const nextSectionIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextSectionIndex);
      setCurrentLessonIndex(0);
      openCorrectAccordion(nextSectionIndex);
    }
  };

  const markAsComplete = () => {
    const lessonId = `${currentSectionIndex}-${currentLessonIndex}`;
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const toggleAccordion = (index) => {
    setOpenAccordions(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleVideoComplete = () => {
    markAsComplete();
    handleNext();
  };

  useEffect(() => {
    openCorrectAccordion(currentSectionIndex);
  }, []);

  return (
    <PageContainer>
      <Sidebar>
        <SidebarTitle>Course Content</SidebarTitle>
        {courseStructure.map((section, sectionIndex) => (
          <Accordion 
            key={sectionIndex}
            title={section.title} 
            index={sectionIndex} 
            isOpen={openAccordions.includes(sectionIndex)}
            toggleAccordion={toggleAccordion}
          >
            {section.lessons.map((lesson, lessonIndex) => (
              <LessonItem
                key={lessonIndex}
                $active={currentSectionIndex === sectionIndex && currentLessonIndex === lessonIndex}
                onClick={() => {
                  setCurrentSectionIndex(sectionIndex);
                  setCurrentLessonIndex(lessonIndex);
                  openCorrectAccordion(sectionIndex);
                }}
              >
                <LessonIcon>
                  {completedLessons.includes(`${sectionIndex}-${lessonIndex}`) ? <FaCheckCircle/> : <FiBook />}
                </LessonIcon>
                {lesson.title}
              </LessonItem>
            ))}
          </Accordion>
        ))}
      </Sidebar>
      <MainContent>
        <Header>
          <Link to="/"><MdArrowBack /></Link>
          <div>
            <NavButton onClick={handlePrev} disabled={currentSectionIndex === 0 && currentLessonIndex === 0}>
              Prev
            </NavButton>
            <NavButton onClick={handleNext} disabled={currentSectionIndex === courseStructure.length - 1 && currentLessonIndex === courseStructure[courseStructure.length - 1].lessons.length - 1}>
              Next
            </NavButton>
            <NavButton style={styleMark} onClick={markAsComplete} disabled={completedLessons.includes(`${currentSectionIndex}-${currentLessonIndex}`)}>
              {completedLessons.includes(`${currentSectionIndex}-${currentLessonIndex}`) ? "Completed" : "Mark as Complete"}
            </NavButton>
          </div>
        </Header>
        <div>{currentVideo.title}</div>

        <VideoContainer>
          <CourseTitle>Html Css & Javascript</CourseTitle>
          <Instructor>BUILD AND DEPLOY AN E-COMMERCE APP</Instructor>
          <VideoPlayerEnrolledCourse
            videoSrc={currentVideo.url}
            onVideoComplete={handleVideoComplete}
          />
        </VideoContainer>
        <h2>{currentVideo.title}</h2>
        <p>
          This is where you can add the content for each lesson. You can include text, images, 
          code snippets, or any other relevant information for the current lesson.
        </p>
        {/* Add more content as needed */}
      </MainContent>
    </PageContainer>
  );
}

export default EnrolledCourse;




