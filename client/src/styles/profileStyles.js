import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SidebarColumn = styled.div`
  width: 16.666%; // corresponds to lg={2} in Grid
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentColumn = styled.div`
  width: 83.333%; // corresponds to lg={10} in Grid
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SidebarPaper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

export const BackLink = styled(Link)`
  padding-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #49BBBD;
  margin-bottom: 1rem;
  text-decoration: none;

  &:hover {
    color: #3a9a9c;
  }
`;