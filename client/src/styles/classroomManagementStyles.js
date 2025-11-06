import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;

  span:first-child {
    color: #00bcd4;
  }
  
  span:last-child {
    color: #3f51b5;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const GradebookSection = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const GradebookCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const GradebookHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StarIcon = styled.div`
  background-color: #ffd700;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const GradebookTitle = styled.h3`
  font-size: 20px;
  color: white;
  background-color: #2196f3;
  padding: 10px 20px;
  border-radius: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StudentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const StudentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ScoreBar = styled.div`
  height: 10px;
  border-radius: 5px;
  flex-grow: 1;
  background-color: ${props => props.color};
  width: ${props => props.percentage}%;
`;

export const Score = styled.span`
  background-color: ${props => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: 10px;
`;

export const ExportButton = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: -20px;
  right: 20px;

  @media (max-width: 767px) {
    position: static;
    margin-top: 20px;
  }
`;