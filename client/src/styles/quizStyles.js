import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f7ff;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

export const QuizCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 45%;
    padding: 30px;
    margin-bottom: 0;
  }
`;

export const QuestionLabel = styled.div`
  background-color: #e8eeff;
  color: #5468ff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 15px;
`;

export const Question = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.div`
  background-color: #e6f7f0;
  color: #00c853;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const IconCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -15px;
  right: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    top: -20px;
    right: 30px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 45%;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;

  span {
    color: #00c853;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;