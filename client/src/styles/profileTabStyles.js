import styled from "styled-components";
export const SidebarContainer = styled.div`
  padding: 16px;
  height: 100vh;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.h6`
  margin-top: 8px;
  font-size: 1.2rem;
  color: #333;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 15rem;
  @media(max-width:992px){
    margin-bottom: 7rem;
  }
`;

export const NavItem = styled.li`
  ${"" }
  margin-bottom: 8px;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#49BBBD" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#333")};
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.selected ? "#49BBBD" : "#d4fff1")};
  }
   @media(max-width:992px){
    display: flex;
    justify-content: center;
  }
`;

export const Divider = styled.hr`
  margin: 16px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #49bbbd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3d9d9d;
  }
`;
export const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #40E0D0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;