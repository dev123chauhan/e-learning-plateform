


// import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// SVG icons as components
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const CoursesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
  </svg>
);

const ScheduleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

// Add other icons similarly...

const DashboardDiv = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProfileInfo = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(Link)`
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  border-radius: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e6f7f5;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #40E0D0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Dashboard = () => {
  return (
    <DashboardDiv>
      <Sidebar>
        <NavMenu>
          <NavItem to="/dashboard">
            <Icon><DashboardIcon /></Icon>
            Dashboard
          </NavItem>
          <NavItem to="/courses">
            <Icon><CoursesIcon /></Icon>
            My Courses
          </NavItem>
          <NavItem to="/schedule">
            <Icon><ScheduleIcon /></Icon>
            Class Schedule
          </NavItem>
          {/* Add other NavItems with their respective icons */}
        </NavMenu>
      </Sidebar>
      <Content>
        <ProfileInfo>
          <h2>Student Profile</h2>
          {/* Add personal information fields here */}
        </ProfileInfo>
        <h3>Enrolled Courses</h3>
        <CourseList>
          {/* Map through enrolled courses and render CourseCard for each */}
        </CourseList>
      </Content>
    </DashboardDiv>
  );
};

export default Dashboard;