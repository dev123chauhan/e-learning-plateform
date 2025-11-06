import  { useState } from 'react';
import { CheckSquare, Edit2 } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../../hooks/useAuth';
import noProfile from "../../../public/assets/noProfile.jpg";
import { CalendarSection, Container, Name, ProfileHeader, ProfileImage, ProfileSection, ProfileTitle, Status, TodoItem, TodoSection, TodoSubtitle, TodoText, TodoTitle } from '../../styles/todoStyles';

const Todo = () => {
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

export default Todo;