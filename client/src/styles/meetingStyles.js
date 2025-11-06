import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  padding: 10px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
    margin-top: 4rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex: 2;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const RightSection = styled.div`
  flex: 1.5;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BackButton = styled.button`
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  margin: 5px 0 0 0;
  color: #666;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SettingsIcon = styled.span`
  font-size: 24px;
  color: #666;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const MainVideo = styled.img`
  width: 100%;
  display: block;
`;

export const ParticipantContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

export const ParticipantImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  gap: 1rem;
  transform: translateX(-50%);
  width: 90%;

  @media (min-width: 768px) {
    width: auto;
    bottom: 20px;
  }
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  img {
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const CourseContents = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CourseSection = styled.div`
  margin-bottom: 15px;
`;

export const SectionTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LessonItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BookSection = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BookCard = styled.div`
  background-color: #f0f4f8;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;