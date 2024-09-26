import  { useState } from 'react';
import styled from 'styled-components';
import { CheckSquare, Edit2 } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../../hooks/useAuth';
import noProfile from "../../assets/noProfile.jpg";

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileTitle = styled.h2`
  margin: 0;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 auto 10px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 0 0 5px;
`;

const Status = styled.p`
  margin: 0;
  color: #777;
`;

const CalendarSection = styled.div`
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

const TodoSection = styled.div``;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoText = styled.div`
  margin-left: 10px;
`;

const TodoTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const TodoSubtitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: #777;
`;

const SidebarTodo = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <ProfileSection>
        <ProfileHeader>
          <ProfileTitle>Profile</ProfileTitle>
          <Edit2 size={18} />
        </ProfileHeader>
        <ProfileImage
          src={
            user?.profileImage
              ? `http://localhost:8000/uploads/${user.profileImage}`
              : noProfile
          }
          alt={user?.username || "Profile"}
        />
        <Name>{user?.username}</Name>
        <Status>{user?.email}</Status>
      </ProfileSection>

      <CalendarSection>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          inline
        />
      </CalendarSection>

      <TodoSection>
        <h3>To Do List</h3>
        {[
          { title: 'Developing Restaurant Apps', subtitle: 'Programming 08:00 AM' },
          { title: 'Integrate API' },
          { title: 'Slicing Home Screen' },
          { title: 'Research Objective User', subtitle: 'Product Design 02:40 PM' },
        ].map((item, index) => (
          <TodoItem key={index}>
            <CheckSquare size={18} color="#777" />
            <TodoText>
              <TodoTitle>{item.title}</TodoTitle>
              {item.subtitle && <TodoSubtitle>{item.subtitle}</TodoSubtitle>}
            </TodoText>
          </TodoItem>
        ))}
      </TodoSection>
    </Container>
  );
};

export default SidebarTodo;