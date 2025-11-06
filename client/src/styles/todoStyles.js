import styled from 'styled-components';
export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProfileTitle = styled.h2`
  margin: 0;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 auto 10px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
`;

export const Name = styled.h3`
  margin: 0 0 5px;
`;

export const Status = styled.p`
  margin: 0;
  color: #777;
`;

export const CalendarSection = styled.div`
  margin-bottom: 20px;
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker {
    width: 100%;
    font-family: inherit;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__day {
    width: 2rem;
    line-height: 2rem;
  }
  .react-datepicker__day--selected {
    background-color: #49BBBD;
  }
`;

export const TodoSection = styled.div``;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TodoText = styled.div`
  margin-left: 10px;
`;

export const TodoTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const TodoSubtitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: #777;
`;