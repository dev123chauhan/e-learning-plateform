import styled from "styled-components";
export const AppContainer = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f7fa;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

export const SidebarItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    ${"" }
  }
  ${(props) =>
    props.$active &&
    `
    background-color: #49BBBD;
    color: white;
  `}
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchBar = styled.div`
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

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;



export const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
`;



export const LeaderBoard = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;