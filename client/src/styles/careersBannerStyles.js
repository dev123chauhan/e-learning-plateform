import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const CourseCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const CourseInfo = styled.div`
  padding: 15px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const CourseName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const InstructorAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`;

export const InstructorName = styled.span`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ProgressBar = styled.div`
  background-color: #e0e0e0;
  height: 5px;
  margin-top: 10px;

  @media (max-width: 480px) {
    margin-top: 8px;
  }
`;

export const Progress = styled.div`
  width: 70%;
  height: 100%;
  background-color: #49BBBD;
`;

export const LessonInfo = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;