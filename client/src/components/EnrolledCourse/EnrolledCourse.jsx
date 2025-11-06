import { useState, useEffect } from "react";
import VideoPlayerEnrolledCourse from "./VideoPlayer";
import { FiBook } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdArrowBack,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  AccordionContent,
  AccordionSection,
  AccordionTitle,
  ButtonContainer,
  CourseTitle,
  Header,
  Instructor,
  LessonIcon,
  LessonItem,
  MainContent,
  NavButton,
  PageContainer,
  Sidebar,
  SidebarTitle,
  VideoContainer,
} from "../../styles/enrolledCourseStyles";
import { enrolledCourseContentLists } from "../../lib/enrolledCourseContentLists";

function Accordion({ title, children, index, isOpen, toggleAccordion }) {
  return (
    <AccordionSection>
      <AccordionTitle $isOpen={isOpen} onClick={() => toggleAccordion(index)}>
        {title}
        <span>
          {isOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </span>
      </AccordionTitle>
      <AccordionContent $isOpen={isOpen}>{children}</AccordionContent>
    </AccordionSection>
  );
}

function EnrolledCourse() {
  const styleMark = {
    backgroundColor: "#CEFFEC",
    color: "#0ACF83",
  };

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const currentVideo =
    enrolledCourseContentLists[currentSectionIndex].lessons[currentLessonIndex];

  const openCorrectAccordion = (sectionIndex) => {
    if (!openAccordions.includes(sectionIndex)) {
      setOpenAccordions((prev) => [...prev, sectionIndex]);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevSectionIndex);
      setCurrentLessonIndex(
        enrolledCourseContentLists[prevSectionIndex].lessons.length - 1
      );
      openCorrectAccordion(prevSectionIndex);
    }
  };

  const handleNext = () => {
    if (
      currentLessonIndex <
      enrolledCourseContentLists[currentSectionIndex].lessons.length - 1
    ) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentSectionIndex < enrolledCourseContentLists.length - 1) {
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
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
        {enrolledCourseContentLists.map((section, sectionIndex) => (
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
                $active={
                  currentSectionIndex === sectionIndex &&
                  currentLessonIndex === lessonIndex
                }
                onClick={() => {
                  setCurrentSectionIndex(sectionIndex);
                  setCurrentLessonIndex(lessonIndex);
                  openCorrectAccordion(sectionIndex);
                }}
              >
                <LessonIcon>
                  {completedLessons.includes(
                    `${sectionIndex}-${lessonIndex}`
                  ) ? (
                    <FaCheckCircle />
                  ) : (
                    <FiBook />
                  )}
                </LessonIcon>
                {lesson.title}
              </LessonItem>
            ))}
          </Accordion>
        ))}
      </Sidebar>
      <MainContent>
        <Header>
          <Link to="/">
            <MdArrowBack />
          </Link>
          <ButtonContainer>
            <NavButton
              onClick={handlePrev}
              disabled={currentSectionIndex === 0 && currentLessonIndex === 0}
            >
              Prev
            </NavButton>
            <NavButton
              onClick={handleNext}
              disabled={
                currentSectionIndex === enrolledCourseContentLists.length - 1 &&
                currentLessonIndex ===
                  enrolledCourseContentLists[enrolledCourseContentLists.length - 1].lessons.length - 1
              }
            >
              Next
            </NavButton>
            <NavButton
              style={styleMark}
              onClick={markAsComplete}
              disabled={completedLessons.includes(
                `${currentSectionIndex}-${currentLessonIndex}`
              )}
            >
              {completedLessons.includes(
                `${currentSectionIndex}-${currentLessonIndex}`
              )
                ? "Completed"
                : "Mark as Complete"}
            </NavButton>
          </ButtonContainer>
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
          This is where you can add the content for each lesson. You can include
          text, images, code snippets, or any other relevant information for the
          current lesson.
        </p>
        {}
      </MainContent>
    </PageContainer>
  );
}

export default EnrolledCourse;
