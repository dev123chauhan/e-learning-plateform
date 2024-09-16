// import styled from 'styled-components';
// import noProfile from "../../assets/noProfile.jpg";
// import useAuth from "../../hooks/useAuth";
// import { IoMdTime } from "react-icons/io";
// import { RxDashboard } from "react-icons/rx";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

// // Styled components for the card
// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
//   padding: 60px;

//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//     padding: 40px;
//   }

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//     padding: 20px;
//   }
// `;

// const Card = styled.div`
//   background: #FFFFFF;
//   border: 1px solid #E0E0E0;
//   box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
//   border-radius: 16px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 160px;
//   object-fit: cover;

//   @media (max-width: 900px) {
//     height: 140px;
//   }

//   @media (max-width: 600px) {
//     height: 120px;
//   }
// `;

// const CardBody = styled.div`
//   padding: 20px;

//   @media (max-width: 600px) {
//     padding: 15px;
//   }
// `;

// const CardTitle = styled.h5`
//   margin: 0;
//   font-size: 18px;
//   font-weight: bold;

//   @media (max-width: 600px) {
//     font-size: 16px;
//   }
// `;

// const CardText = styled.p`
//   font-size: 14px;
//   color: #666;
//   margin: 10px 0 20px;

//   @media (max-width: 600px) {
//     font-size: 12px;
//     margin: 8px 0 16px;
//   }
// `;

// const CardFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px 20px;

//   @media (max-width: 600px) {
//     padding: 0 15px 15px;
//   }
// `;

// const Tag = styled.span`
//   border-radius: 8px;
//   padding: 5px 10px;
//   font-size: 12px;
//   color: #333;
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   @media (max-width: 600px) {
//     font-size: 10px;
//     padding: 4px 8px;
//   }
// `;

// const Price = styled.div`
//   font-size: 16px;
//   font-weight: bold;
//   color: #49BBBD;

//   @media (max-width: 600px) {
//     font-size: 14px;
//   }
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 45px;
//   height: 45px;
//   object-fit: cover;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     box-shadow: 0 0 0 2px #53bfba;
//   }

//   @media (max-width: 600px) {
//     width: 35px;
//     height: 35px;
//   }
// `;

// function cropText(text, maxLength) {
//   if (text?.length <= maxLength) {
//     return text;
//   }
//   return text?.substring(0, maxLength) + '...';
// }

// // Main component
// const CourseCards = ({ searchTerm, subjectFilter }) => {
//   const [courses, setCourses] = useState([]);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/courses`);
//         let filteredCourses = response.data;

//         if (searchTerm) {
//           filteredCourses = filteredCourses.filter((course) =>
//             course.title.toLowerCase().includes(searchTerm.toLowerCase())
//           );
//         }

//         if (subjectFilter && subjectFilter !== 'All') {
//           filteredCourses = filteredCourses.filter((course) =>
//             course.tag.toLowerCase().includes(subjectFilter.toLowerCase())
//           );
//         }

//         setCourses(filteredCourses);
//       } catch (error) {
//         console.error('Error fetching the courses:', error);
//       }
//     };

//     fetchCourses();
//   }, [searchTerm, subjectFilter]);

//   const handleCardClick = (courseId) => {
//     if (courseId) {
//       navigate(`/course/${courseId}`);
//     } else {
//       console.error("Course ID is undefined");
//     }
//   };

//   return (
//     <CardGrid>
//       {courses.map(course => (
//         <Card key={course?._id} onClick={() => handleCardClick(course?._id)}>
//           <CardImage src={course.image} alt={course.image} />
//           <CardBody>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//               <Tag><RxDashboard fontSize={20} />{course.tag}</Tag>
//               <Tag><IoMdTime fontSize={20} />{course.duration}</Tag>
//             </div>
//             <CardTitle>{course.title}</CardTitle>
//             <CardText>{cropText(course.description, 65)}</CardText>
//           </CardBody>
//           <CardFooter>
//             <ProfileImage src={user?.profileImage ? `http://localhost:8000/uploads/${user.profileImage}` : noProfile} /> {user?.username}
//             <Price>{course.price}</Price>
//           </CardFooter>
//         </Card>
//       ))}
//     </CardGrid>
//   );
// };

// CourseCards.propTypes = {
//   searchTerm: PropTypes.string,
//   subjectFilter: PropTypes.string,
// };

// export default CourseCards;


import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Skeleton } from 'antd';
import noProfile from "../../assets/noProfile.jpg";
import useAuth from "../../hooks/useAuth";
import { IoMdTime } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import axios from "axios";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Styled components for the card
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 60px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;

  @media (max-width: 900px) {
    height: 140px;
  }

  @media (max-width: 600px) {
    height: 120px;
  }
`;

const CardBody = styled.div`
  padding: 20px;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h5`
  margin: 0;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0 20px;

  @media (max-width: 600px) {
    font-size: 12px;
    margin: 8px 0 16px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;

  @media (max-width: 600px) {
    padding: 0 15px 15px;
  }
`;

const Tag = styled.span`
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #49BBBD;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 2px #53bfba;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

const SkeletonCard = styled(Card)`
  .ant-skeleton-image {
    width: 100% !important;
    height: 160px !important;
  }
`;

function cropText(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.substring(0, maxLength) + '...';
}

// Main component
const CourseCards = ({ searchTerm, subjectFilter }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/courses`);
        let filteredCourses = response.data;

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
        <CardBody>
          <Skeleton active paragraph={{ rows: 2 }} />
        </CardBody>
        <CardFooter>
          <Skeleton.Avatar active size="large" />
          <Skeleton.Input style={{ width: 100 }} active size="small" />
        </CardFooter>
      </SkeletonCard>
    ));
  };

  if (loading) {
    return <CardGrid>{renderSkeletons()}</CardGrid>;
  }

  return (
    <CardGrid>
      {courses.map(course => (
        <Card key={course?._id} onClick={() => handleCardClick(course?._id)}>
          <CardImage src={course.image} alt={course.title} />
          <CardBody>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Tag><RxDashboard fontSize={20} />{course.tag}</Tag>
              <Tag><IoMdTime fontSize={20} />{course.duration}</Tag>
            </div>
            <CardTitle>{course.title}</CardTitle>
            <CardText>{cropText(course.description, 65)}</CardText>
          </CardBody>
          <CardFooter>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ProfileImage src={user?.profileImage ? `http://localhost:8000/uploads/${user.profileImage}` : noProfile} alt={user?.username} />
              <span>{user?.username}</span>
            </div>
            <Price>{course.price}</Price>
          </CardFooter>
        </Card>
      ))}
    </CardGrid>
  );
};

CourseCards.propTypes = {
  searchTerm: PropTypes.string,
  subjectFilter: PropTypes.string,
};

export default CourseCards;