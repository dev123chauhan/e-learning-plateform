import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";

const Nav = styled.nav`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* padding: 1rem 2rem; */}
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

const StyledLink = styled(Link)`
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
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
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
  padding: 1rem;
  gap: 2rem;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const ProfileContainer = styled.div`
  position: relative;
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
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
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
  @media (max-width: 768px) {
    ${'' /* display: none; */}
  }
`;

const Button = styled(Link)`
  margin-left: 10px;
  padding: 7px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  background-color: #53bfba;
  color: white;
  font-size: 14px;
`;

const LogoSideBar = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/career", label: "Careers" },
    { to: "/blog", label: "Blog" },
    { to: "/meeting", label: "Meeting" },
  ];

  return (
    <Nav>
      <MenuIcon onClick={toggleSidebar}>
        <FaBars />
      </MenuIcon>
      <Logo>E-learning</Logo>

      <NavLinks>
        {navItems.map((item) => (
          <StyledLink key={item.to} to={item.to}>
            {item.label}
          </StyledLink>
        ))}
      </NavLinks>

      {user ? (
        <ProfileContainer ref={dropdownRef}>
          <ProfileImage
            onClick={toggleDropdown}
            alt={user.name}
            src={user?.profileImage ? `http://localhost:8000/uploads/${user.profileImage}` : noProfile}
          />
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
            <DropdownItem to="/auth" onClick={logout}>
              <FaSignOutAlt />
              Logout
            </DropdownItem>
          </Dropdown>
        </ProfileContainer>
      ) : (
        <ButtonGroup>
          <Button to="/auth">Login</Button>
          <Button to="/auth">Sign Up</Button>
        </ButtonGroup>
      )}

      <Sidebar $isOpen={isSidebarOpen}>
        <SidebarContent>
          <LogoSideBar>E-learning</LogoSideBar>
          <CloseIcon onClick={toggleSidebar}>
            <FaTimes />
          </CloseIcon>
          {navItems.map((item) => (
            <StyledLink key={item.to} to={item.to} onClick={toggleSidebar}>
              {item.label}
            </StyledLink>
          ))}
        </SidebarContent>
      </Sidebar>
    </Nav>
  );
};

export default Navigation;