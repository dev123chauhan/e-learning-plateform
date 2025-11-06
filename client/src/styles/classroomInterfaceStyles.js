import styled from 'styled-components';
export const Container = styled.div`   
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative; 
  max-width: 1400px;
  margin: 0 auto;
  @media(min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  @media(min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 65%;
  }
`;

export const UserCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
`;

export const UserStatus = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin-right: 5px;
`;

export const InstructorCard = styled(UserCard)`
  grid-column: span 2;
  grid-row: span 2;
  @media(min-width: 1024px) {
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;

export const InstructorLabel = styled.div`
  background-color: #4285f4;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const PresentButton = styled(Button)`
  background-color: #4285f4;
`;

export const CallButton = styled(Button)`
  background-color: #ea4335;
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  @media(min-width: 1024px) {
    width: 30%;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  color: #333;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: bold;
  span {
    color: #00C9A7;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const InfoIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  margin-right: 15px;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
`;

export const InfoText = styled.p`
  color: #555;
  font-size: 16px;
  margin: 0;
`;

export const BackgroundCircle = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #E8F5E9;
  z-index: -1;
`;

export const SmallCircle = styled.div`
  position: absolute;
  top: 20px;
  right: 100px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2196F3;
`;