import {
  FiGrid,
  FiFileText,
  FiClock,
  FiBell,
} from "react-icons/fi";
import { MdOutlineQuiz, MdOutlineReviews } from "react-icons/md";
import { useState } from "react";
import StatisticsSection from "./Statistics";
import Performance from "./Performance";
import { SlBookOpen } from "react-icons/sl";
import MyCourses from "./MyCourse";
import Assignment from "./Assignments";
import Mcqs from "./Mcqs";
import CourseReport from "./CourseReport";
import PeerReview from "./PeerReview";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import CourseType from "./CourseType";
import { AppContainer, Header, LeaderBoard, Logo, MainContent, ProfileSection, SearchBar, Sidebar, SidebarItem, StatsContainer } from "../../styles/dashboardStyles";
import Todo from "./Todo";
import { useAuth } from "../../context/AuthContext";
const styleBack ={
  display: "flex",
  alignItems:"center",
  gap:"5px",
  color: "#49BBBD",
  marginBottom:"2rem"
}

function cropText(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.substring(0, maxLength) + '';
}
function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const { user } = useAuth();
 
  return (
    <AppContainer>
      <Sidebar>
        <Logo>E-learning</Logo>
        <SidebarItem
          $active={activeTab === "Overview"}
          onClick={() => setActiveTab("Overview")}
        >
          <FiGrid /> Overview
        </SidebarItem>
        <SidebarItem
          $active={activeTab === "Assignment"}
          onClick={() => setActiveTab("Assignment")}
        >
          <FiFileText /> Assignment
        </SidebarItem>
        <SidebarItem
          $active={activeTab === "Reports"}
          onClick={() => setActiveTab("Reports")}
        >
          <FiClock /> Reports
        </SidebarItem>
   
        <SidebarItem
          $active={activeTab === "My Course"}
          onClick={() => setActiveTab("My Course")}
        >
           <SlBookOpen /> My Course
        </SidebarItem>
 
        <SidebarItem
          $active={activeTab === "Quiz"}
          onClick={() => setActiveTab("Quiz")}
        >
          <MdOutlineQuiz /> Quiz
        </SidebarItem>
        <SidebarItem
          $active={activeTab === "Review"}
          onClick={() => setActiveTab("Review")}
        >
          <MdOutlineReviews /> Reviews
        </SidebarItem>
      </Sidebar>
      <MainContent>
      {activeTab === "My Course" ? (
          <MyCourses />
        ) : activeTab ==="Assignment" ? (
          <Assignment/>
        ): activeTab ==="Quiz" ? (
          <Mcqs/>
        ) : activeTab ==="Reports" ? (
          <CourseReport/>
        ) : activeTab ==="Review" ? (
          <PeerReview/>
        ) : 
        <>
         <Link to="/" style={styleBack}><IoIosArrowRoundBack />Back to home</Link>
        <Header>
          <div>
            <h1>Hello {cropText(user?.username, 6)} 👋</h1>
            <p>Lets learn something new today!</p>
          </div>
          <SearchBar>
            <input type="text" placeholder="Search from courses..." />
          </SearchBar>
          <ProfileSection>
            <FiBell />
            <span>Profile</span>
          </ProfileSection>
        </Header>
       
        <CourseType/>
        <StatsContainer>
          {}

          <StatisticsSection />
          {}
          {}

          {}
          <Performance value={8966}/>
          {}
        </StatsContainer> 
        <LeaderBoard>
        <Leaderboard/>
        </LeaderBoard></>}
      </MainContent>
    
      <Todo/>
    </AppContainer>
  );
}

export default Dashboard;
