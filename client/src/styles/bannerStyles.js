import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column; 
  align-items: center;
  color: white;
  background-color: #49BBBD;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 20px; 

  @media (min-width: 1024px) {
    flex-direction: row; 
    padding: 50px 5%;
    align-items: center;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
  z-index: 2;
  order: 2; 

  @media (min-width: 1024px) {
    order: 1; 
    width: 50%;
    text-align: left;
  }
`;

export const ImageArea = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  margin-bottom: 30px; 
  order: 1; 
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    order: 2; 
    width: 50%;
    margin-bottom: 0;
    min-height: 600px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  max-width: 500px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
  }
`;

export const JoinButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
`;

export const WatchButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '▶';
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: white;
    color: #49BBBD;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }
`;

export const StudentImage = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    max-width: 500px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
  }
`;

export const InfoCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 8px 12px;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-size: 12px;
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const AssistedStudentCard = styled(InfoCard)`
  top: 20%;
  left: 5%;

  @media (min-width: 1024px) {
    top: 30%;
    left: 50%;
  }
`;

export const UserExperienceCard = styled(InfoCard)`
  bottom: 20%;
  left: 5%;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    bottom: 15%;
    left: 45%;
  }
`;

export const CongratulationsCard = styled(InfoCard)`
  top: 20%;
  right: 5%;

  @media (min-width: 1024px) {
    top: 30%;
    right: 10%;
  }
`;

export const JoinNowButton = styled.button`
  background-color: #D8587E;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 5px;
`;

export const StatsIcon = styled.img`
  position: absolute;
  top: 150px;
  right: 50px;
  width: 80px;
  height: 80px;
  z-index: 5;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    right: 100px;
  }

  @media (min-width: 1024px) {
    right: 150px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const BaseImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  
  span {
    color: #FF7A00;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;