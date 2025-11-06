import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

export const TextContent = styled.div`
  max-width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 50%;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  
  span:first-child {
    color: #00bcd4;
  }
  
  span:last-child {
    color: #3f51b5;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 45%;
    margin-bottom: 0;
  }
`;

export const StudentImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50% 50% 0 50%;
`;

export const BackgroundCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #ff7675;
  border-radius: 50%;
  top: -50px;
  right: -50px;
  z-index: -1;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const FloatingIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${props => props.color};
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;