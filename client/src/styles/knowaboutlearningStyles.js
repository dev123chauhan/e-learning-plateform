import bgImage from "../../public/assets/bgCourse.png";
import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerDiv = styled.div`
   background: url(${bgImage});  
`;


export const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px;
`;

export const RightSection = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #49BBBD;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

export const InstructorCard = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const InstructorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InstructorName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  font-size: 12px;
`;

export const ActionButton = styled.button`
  background-color: ${props => props.color};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;