import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import noProfile from "../../assets/noProfile.jpg";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }

`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileContainerSidebar = styled.div`
  display: none;

`;


const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 2px #53bfba;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.3s ease;
  z-index: 1000;
  min-width: 200px;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d4fff1;
  }

  svg {
    margin-right: 10px;
    font-size: 18px;
    color: #53bfba;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 8px 0;
`;

const UserInfo = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const UserName = styled.h4`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const UserEmail = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
`;

const ButtonGroup = styled.div`
  button {
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    ${'' /* display: none; */}
  }
`;

const LoginButton = styled.button`
  background-color: #53bfba;
  color: white;
`;

const SignUpButton = styled.button`
  background-color: #53bfba;
  color: white;
  border: 1px solid #53bfba !important;
`;

const LogoSideBar = styled.div`
 font-size: 24px;
 font-weight: bold;
`;

// const ButtonGroupSidebar = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   button {
//     margin-top: 10px;
//     padding: 10px 15px;
//     border-radius: 20px;
//     border: none;
//     cursor: pointer;
//     ${'' /* margin-right: 10px; */}
//   }
// `;
// const LoginButtonSideBar = styled.button`
//   background-color: #53bfba;
//   color: white;
// `;

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth(); // Simulating login state
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Nav>
     <MenuIcon onClick={toggleSidebar}>
        {" "}
        <FaBars />
      </MenuIcon>
      <Logo>E-learning</Logo>

      <NavLinks>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/courses">Courses</Link>
        </NavLink>
        <NavLink>
          <Link to="/career">Careers</Link>
        </NavLink>
        <NavLink>
          <Link to="/blog">Blog</Link>
        </NavLink>
        <NavLink>
          <Link to="/meeting">Meeting</Link>
        </NavLink>
      </NavLinks>
      {user ? (
        <ProfileContainer ref={dropdownRef}>
          <ProfileImage
            onClick={toggleDropdown}
            alt={user.name}
            src={
              user?.profileImage
                ? `http://localhost:8000/uploads/${user.profileImage}`
                : noProfile
            }
          />
          {/* <Dropdown isOpen={isDropdownOpen}> */}
          <Dropdown $isOpen={isDropdownOpen}>
            <UserInfo>
              <UserName>{user.username}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserInfo>
            <DropdownItem to="/profile">
              <FaUser />
              My Profile
            </DropdownItem>
            <DropdownItem to="/dashboard">
              <LuLayoutDashboard />
              Dashboard
            </DropdownItem>
            <Divider />
            <Link to="/auth">
              <DropdownItem onClick={logout}>
                <FaSignOutAlt />
                Logout
              </DropdownItem>
            </Link>
          </Dropdown>
        </ProfileContainer>
      ) : (
        <ButtonGroup>
          <Link to="/auth">
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to="/auth">
            <SignUpButton>Sign Up </SignUpButton>
          </Link>
        </ButtonGroup>
      )}
      {/* <MenuIcon onClick={toggleSidebar}>
        {" "}
        <FaBars />
      </MenuIcon> */}
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarContent>
        <LogoSideBar>E-learning</LogoSideBar>
          <CloseIcon onClick={toggleSidebar}>
            {" "}
            <FaTimes />
          </CloseIcon>
          <NavLink>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/courses" onClick={toggleSidebar}>Courses</Link>
          </NavLink>
          <NavLink>
            <Link to="/career" onClick={toggleSidebar}>Careers</Link>
          </NavLink>
          <NavLink>
            <Link to="/blog" onClick={toggleSidebar}>Blog</Link>
          </NavLink>
          <NavLink>
            <Link to="/meeting" onClick={toggleSidebar}>Meeting</Link>
          </NavLink>
          {user ? (
            <ProfileContainerSidebar ref={dropdownRef}>
              <ProfileImage
                onClick={toggleDropdown}
                alt={user.name}
                src={
                  user?.profileImage
                    ? `http://localhost:8000/uploads/${user.profileImage}`
                    : noProfile
                }
              />
              {/* <Dropdown isOpen={isDropdownOpen}> */}
              <Dropdown $isOpen={isDropdownOpen}>
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
                <DropdownItem to="/profile">
                  <FaUser />
                  My Profile
                </DropdownItem>
                <DropdownItem to="/dashboard">
                  <LuLayoutDashboard />
                  Dashboard
                </DropdownItem>
                <Divider />
                <DropdownItem onClick={logout}>
                  <FaSignOutAlt />
                  Logout
                </DropdownItem>
              </Dropdown>
            </ProfileContainerSidebar>
          ) : <>
            
          </>}
        </SidebarContent>
      </Sidebar>
    </Nav>
  );
};

export default Navigation;
