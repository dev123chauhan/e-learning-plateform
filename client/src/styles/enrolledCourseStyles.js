import styled from 'styled-components';
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  overflow-y: auto;
  max-height: 300px;

  @media (min-width: 768px) {
    width: 300px;
    max-height: none;
    height: 100vh;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavButton = styled.button`
  padding: 8px 16px;
  margin: 5px 0;
  background-color: #BFD3FE;
  color: #1D58D8;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const VideoContainer = styled.div`
  color: black;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const CourseTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Instructor = styled.p`
  font-size: 14px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const AccordionSection = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.$isOpen ? '#49BBBD' : 'inherit'};
`;

export const AccordionContent = styled.div`
  padding-left: 20px;
  max-height: ${props => (props.$isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

export const LessonItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: ${props => props.$active ? '#49BBBD' : '#666'};
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  font-size: 14px;
  cursor: pointer;
`;

export const LessonIcon = styled.span`
  margin-right: 10px;
  color: #49BBBD;
`;

export const SidebarTitle = styled.h2`
  color: #49BBBD;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

