import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { User } from "lucide-react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import {
  ButtonGroup,
  Divider,
  Dropdown,
  DropdownItem,
  HamburgerButton,
  HeaderContainer,
  LoginButton,
  Logo,
  LogoSideBar,
  Nav,
  NavLink,
  ProfileContainer,
  ProfileImage,
  Sidebar,
  SidebarCloseButton,
  SidebarNav,
  SidebarNavLink,
  SignUpButton,
  UserEmail,
  UserInfo,
  UserName,
} from "../styles/headerStyles";
import { useModal } from "../context/ModalContext";
import Modal from "../common/Modal";
function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { openModal } = useModal();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };
 const handleAuthClick = () => {
    openModal(<Modal />);
  };
  return (
    <>
      <HeaderContainer $isHomePage={isHomePage} $scrolled={scrolled}>
        <HamburgerButton onClick={toggleSidebar}>
          <CiMenuFries />
        </HamburgerButton>
        <Logo>E-learning</Logo>
        <Nav>
          <ul>
            <li>
              <NavLink to="/" $isActive={location.pathname === "/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                $isActive={location.pathname === "/courses"}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" $isActive={location.pathname === "/career"}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" $isActive={location.pathname === "/blog"}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meeting"
                $isActive={location.pathname === "/meeting"}
              >
                Meeting
              </NavLink>
            </li>
          </ul>
        </Nav>
        {user ? (
          <>
            <ProfileContainer ref={dropdownRef}>
              {user.profileImage ? (
                <ProfileImage
                  onClick={toggleDropdown}
                  alt={user.name}
                  src={user?.profileImage}
                />
              ) : (
                <User onClick={toggleDropdown} size={28} strokeWidth={1} />
              )}
              <Dropdown $isOpen={isDropdownOpen}>
                <UserInfo>
                  <UserName>{user.username}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
                <DropdownItem onClick={() => navigate("/profile")}>
                  <FaUser />
                  My Profile
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/dashboard")}>
                  <LuLayoutDashboard />
                  Dashboard
                </DropdownItem>
                <Divider />
                <DropdownItem onClick={handleLogout}>
                  <FaSignOutAlt />
                  Logout
                </DropdownItem>
              </Dropdown>
            </ProfileContainer>
          </>
        ) : (
          <ButtonGroup>
            <Link>
              <LoginButton
                onClick={handleAuthClick}
                $isHomePage={isHomePage}
                $scrolled={scrolled}
              >
                Login
              </LoginButton>
            </Link>
            <Link>
              <SignUpButton onClick={handleAuthClick}>
                Sign Up
              </SignUpButton>
            </Link>
          </ButtonGroup>
        )}
      </HeaderContainer>

      <Sidebar $isOpen={isSidebarOpen}>
        <LogoSideBar>E-learning</LogoSideBar>
        <SidebarCloseButton onClick={toggleSidebar}>
          <TfiClose />
        </SidebarCloseButton>
        <SidebarNav>
          <ul>
            <li>
              <SidebarNavLink
                to="/"
                onClick={toggleSidebar}
                $isActive={location.pathname === "/"}
              >
                Home
              </SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink
                to="/courses"
                onClick={toggleSidebar}
                $isActive={location.pathname === "/courses"}
              >
                Courses
              </SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink
                to="/career"
                onClick={toggleSidebar}
                $isActive={location.pathname === "/career"}
              >
                Careers
              </SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink
                to="/blog"
                onClick={toggleSidebar}
                $isActive={location.pathname === "/blog"}
              >
                Blog
              </SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink
                to="/meeting"
                onClick={toggleSidebar}
                $isActive={location.pathname === "/meeting"}
              >
                Meeting
              </SidebarNavLink>
            </li>
          </ul>
        </SidebarNav>
      </Sidebar>
    </>
  );
}

export default Header;
