import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

import {
  FiGrid,
  FiFileText,
  FiClock,
  FiSettings,
  FiBell,
} from "react-icons/fi";
import { MdOutlineQuiz } from "react-icons/md";
import { useState } from "react";
import StatisticsSection from "./StatisticsSection";
import Performance from "./Performance";
import { SlBookOpen } from "react-icons/sl";
import MyCourses from "../MyCourse/MyCourse";
import Assignment from "../Assignments/Assignments";
import Mcqs from "../Mcqs/Mcqs";
import CourseReport from "./CourseReport";
import PeerReview from "./PeerReview";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import SidebarTodo from "./SidebarTodo";
import Leaderboard from "./Leadership";
import CourseType from "./CourseType";
// import Performance from './Performace';

const AppContainer = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f7fa;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

const SidebarItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    ${"" /* background-color: #f0f0f0; */}
  }
  ${(props) =>
    props.$active &&
    `
    background-color: #49BBBD;
    color: white;
  `}
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 15px;
  width: 300px;
  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;



const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
`;



const LeaderBoard = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;


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
function StudentDashboard() {
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
          <FiSettings /> Reviews
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
          {/* <Chart> */}

          <StatisticsSection />
          {/* </Chart> */}
          {/* <Chart> */}

          {/* <Performance performanceValue={performanceValue} timeOptions={timeOptions} /> */}
          <Performance value={8966}/>
          {/* </Chart> */}
        </StatsContainer>
        <LeaderBoard>
        <Leaderboard/>
        </LeaderBoard></>}
      </MainContent>
    
      <SidebarTodo/>
    </AppContainer>
  );
}

export default StudentDashboard;
