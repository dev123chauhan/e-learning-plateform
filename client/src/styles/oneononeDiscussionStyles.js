import styled from 'styled-components';
export const Container = styled.div`
  background: linear-gradient(135deg, #e0f7fa 0%, #80deea 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 40px;
    margin: 40px auto;
  }
`;

export const CallCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #e0f7fa;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4757;
  }
`;

export const Title = styled.h1`
  color: #3a4a5b;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  color: #5d6d7e;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CardText = styled.p`
  color: #3a4a5b;
  font-size: 14px;
  margin: 5px 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;