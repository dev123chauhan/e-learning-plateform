import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import {useAuth} from "../../context/AuthContext";
import { IoMdTime } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { CardGrid, SkeletonCard } from '../../styles/cardStyles';
import Card from '../../common/Card';
import { courseService } from '../../api/services/courseService';

function cropText(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.substring(0, maxLength) + '...';
}

const CoursesList = ({ searchTerm, subjectFilter }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
         const data = await courseService.getAllCourses();
        let filteredCourses = data;

        if (searchTerm) {
          filteredCourses = filteredCourses.filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        if (subjectFilter && subjectFilter !== 'All') {
          filteredCourses = filteredCourses.filter((course) =>
            course.tag.toLowerCase().includes(subjectFilter.toLowerCase())
          );
        }

        setCourses(filteredCourses);
      } catch (error) {
        console.error('Error fetching the courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [searchTerm, subjectFilter]);

  const handleCardClick = (courseId) => {
    if (courseId) {
      navigate(`/course/${courseId}`);
    } else {
      console.error("Course ID is undefined");
    }
  };

  const renderSkeletons = () => {
    return Array(8).fill().map((_, index) => (
      <SkeletonCard key={index}>
        <Skeleton.Image style={{ width: '100%', height: 160 }} />
        <div style={{ padding: '20px' }}>
          <Skeleton active paragraph={{ rows: 2 }} />
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <Skeleton.Avatar active size="large" />
          <Skeleton.Input style={{ width: 100 }} active size="small" />
        </div>
      </SkeletonCard>
    ));
  };

  if (loading) {
    return <CardGrid>{renderSkeletons()}</CardGrid>;
  }

  return (
    <CardGrid>
      {courses.map(course => (
        <Card
          key={course?._id}
          variant="course"
          image={course.image}
          title={course.title}
          description={cropText(course.description, 65)}
          tags={[
            { 
              icon: <RxDashboard fontSize={20} />, 
              text: course.tag 
            },
            { 
              icon: <IoMdTime fontSize={20} />, 
              text: course.duration 
            }
          ]}
          footer={{
            profileImage: user?.profileImage,
            profileName: user?.username,
            price: course.price
          }}
          onClick={() => handleCardClick(course?._id)}
        />
      ))}
    </CardGrid>
  );
};

export default CoursesList;