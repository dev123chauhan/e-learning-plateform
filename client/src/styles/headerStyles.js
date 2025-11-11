import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  transition: all 0.3s ease;
  background-color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage ? ($scrolled ? "white" : "transparent") : "white"};
  color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage ? ($scrolled ? "black" : "white") : "black"};
  box-shadow: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && !$scrolled ? "none" : "0 2px 10px rgba(0,0,0,0.1)"};
  opacity: 1;

  @media (max-width: 992px) {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoSideBar = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;

    li {
      margin: 0 15px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? "#F48C06" : "inherit")};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  transition: color 0.3s ease;
  position: relative;

  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    ${"" }
  }
`;

export const LoginButton = styled.button`
  background-color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage ? ($scrolled ? "#53bfba" : "white") : "#53bfba"};
  color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage ? ($scrolled ? "white" : "#53bfba") : "white"};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const SignUpButton = styled.button`
  background-color: #53bfba;
  color: white;
  border: 1px solid #53bfba !important;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
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

export const Dropdown = styled.div`
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

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #d4fff1;
  }

  svg {
    margin-right: 10px;
    font-size: 18px;
    color: #53bfba;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 8px 0;
`;

export const UserInfo = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export const UserName = styled.h4`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const UserEmail = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: inherit;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-1530px")};
  width: 100%;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 2000;
  padding: 20px;
`;

export const SidebarCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const SidebarNav = styled.nav`
  margin-top: 60px;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 30px;
    }
  }
`;

export const SidebarNavLink = styled(Link)`
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? "#F48C06" : "#333")};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  transition: color 0.3s ease;
  display: block;
  padding: 8px 0;

  &:hover {
    color: #f48c06;
  }
`;
