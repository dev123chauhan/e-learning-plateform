// import { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Card, Dropdown, Menu, Modal, message } from "antd";
// import { EllipsisOutlined } from "@ant-design/icons";

// const { Meta } = Card;

// const CourseGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
//   padding: 20px;
// `;

// const StyledCard = styled(Card)`
//   .ant-card-cover img {
//     height: 150px;
//     object-fit: cover;
//   }
// `;

// function MyCourses() {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchEnrolledCourses();
//   }, []);

//   const fetchEnrolledCourses = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         "http://localhost:8000/api/enrolled-courses"
//       );
//       setEnrolledCourses(response.data);
//     } catch (error) {
//       console.error("Error fetching enrolled courses:", error);
//       setError("Failed to load courses. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRemoveCourse = async (courseId) => {
//     Modal.confirm({
//       title: "Are you sure you want to remove this course?",
//       content: "This action cannot be undone.",
//       okText: "Yes",
//       cancelText: "No",
//       onOk: async () => {
//         try {
//           await axios.delete(
//             `http://localhost:8000/api/enrolled-courses/${courseId}`
//           );
//           message.success("Course removed successfully");
//           fetchEnrolledCourses(); // Refresh the course list
//         } catch (error) {
//           console.error("Error removing course:", error);
//           message.error("Failed to remove course. Please try again.");
//         }
//       },
//     });
//   };

//   const menu = (courseId) => (
//     <Menu>
//       <Menu.Item key="1" onClick={() => handleRemoveCourse(courseId)}>
//         Remove Course
//       </Menu.Item>
//     </Menu>
//   );

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2>My Courses</h2>
//       {enrolledCourses.length === 0 ? (
//         <p>You are not enrolled in any courses yet.</p>
//       ) : (
//         <CourseGrid>
//           {enrolledCourses.map((course) => (
//             <StyledCard
//               key={course._id}
//               cover={
//                 <img alt={course.title || "Course image"} src={course.image} />
//               }
//               actions={[
//                 <Dropdown
//                   key="more"
//                   overlay={menu(course._id)}
//                   trigger={["click"]}
//                 >
//                   <EllipsisOutlined />
//                 </Dropdown>,
//               ]}
//             >
//               {/* <Link to={`/enrolled-course-detail/${course._id}`}>  */}
//               <Link to="/enrolled-course-detail">
//                 <Meta
//                   title={course.title || "Untitled Course"}
//                   description={
//                     (course.description &&
//                       course.description.substring(0, 100) + "...") ||
//                     "No description available"
//                   }
//                 />
//               </Link>
//             </StyledCard>
//           ))}
//         </CourseGrid>
//       )}
//     </div>
//   );
// }

// export default MyCourses;


// import  { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Card, Dropdown, Menu, Modal, message, Skeleton } from "antd";
// import { EllipsisOutlined } from "@ant-design/icons";

// const { Meta } = Card;

// const CourseGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
//   padding: 20px;
// `;

// const StyledCard = styled(Card)`
//   .ant-card-cover img {
//     height: 150px;
//     object-fit: cover;
//   }
// `;

// const SkeletonCard = styled(Card)`
//   .ant-card-cover {
//     height: 150px;
//     background: #f0f0f0;
//   }
// `;

// function MyCourses() {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchEnrolledCourses();
//   }, []);

//   const fetchEnrolledCourses = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         "http://localhost:8000/api/enrolled-courses"
//       );
//       setEnrolledCourses(response.data);
//     } catch (error) {
//       console.error("Error fetching enrolled courses:", error);
//       setError("Failed to load courses. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRemoveCourse = async (courseId) => {
//     Modal.confirm({
//       title: "Are you sure you want to remove this course?",
//       content: "This action cannot be undone.",
//       okText: "Yes",
//       cancelText: "No",
//       onOk: async () => {
//         try {
//           await axios.delete(
//             `http://localhost:8000/api/enrolled-courses/${courseId}`
//           );
//           message.success("Course removed successfully");
//           fetchEnrolledCourses(); // Refresh the course list
//         } catch (error) {
//           console.error("Error removing course:", error);
//           message.error("Failed to remove course. Please try again.");
//         }
//       },
//     });
//   };

//   const menu = (courseId) => (
//     <Menu>
//       <Menu.Item key="1" onClick={() => handleRemoveCourse(courseId)}>
//         Remove Course
//       </Menu.Item>
//     </Menu>
//   );

//   const renderSkeletons = () => {
//     return Array(4).fill().map((_, index) => (
//       <SkeletonCard key={index}>
//         <Skeleton.Image style={{ width: '230px', height: 150 }} active />
//         <Skeleton active>
//           <Meta title={" "} description={" "} />
//         </Skeleton>
//       </SkeletonCard>
//     ));
//   };

//   if (isLoading) {
//     return (
//       <div>
//         <h2>My Courses</h2>
//         <CourseGrid>{renderSkeletons()}</CourseGrid>
//       </div>
//     );
//   }

//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2>My Courses</h2>
//       {enrolledCourses.length === 0 ? (
//         <p>You are not enrolled in any courses yet.</p>
//       ) : (
//         <CourseGrid>
//           {enrolledCourses.map((course) => (
//             <StyledCard
//               key={course._id}
//               cover={
//                 <img alt={course.title || "Course image"} src={course.image} />
//               }
//               actions={[
//                 <Dropdown
//                   key="more"
//                   overlay={menu(course._id)}
//                   trigger={["click"]}
//                 >
//                   <EllipsisOutlined />
//                 </Dropdown>,
//               ]}
//             >
//               <Link to="/enrolled-course-detail">
//                 <Meta
//                   title={course.title || "Untitled Course"}
//                   description={
//                     (course.description &&
//                       course.description.substring(0, 100) + "...") ||
//                     "No description available"
//                   }
//                 />
//               </Link>
//             </StyledCard>
//           ))}
//         </CourseGrid>
//       )}
//     </div>
//   );
// }

// export default MyCourses;



import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Dropdown,  Modal, message, Skeleton } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  .ant-card-cover img {
    height: 150px;
    object-fit: cover;
  }
`;

const SkeletonCard = styled(Card)`
  .ant-card-cover {
    height: 150px;
    background: #f0f0f0;
  }
`;

function MyCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/enrolled-courses"
      );
      setEnrolledCourses(response.data);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveCourse = async (courseId) => {
    Modal.confirm({
      title: "Are you sure you want to remove this course?",
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk: async () => {
        try {
          await axios.delete(
            `http://localhost:8000/api/enrolled-courses/${courseId}`
          );
          message.success("Course removed successfully");
          fetchEnrolledCourses(); // Refresh the course list
        } catch (error) {
          console.error("Error removing course:", error);
          message.error("Failed to remove course. Please try again.");
        }
      },
    });
  };

  const getMenuItems = (courseId) => [
    {
      key: '1',
      label: 'Remove Course',
      onClick: () => handleRemoveCourse(courseId),
    },
  ];

  const renderSkeletons = () => {
    return Array(4).fill().map((_, index) => (
      <SkeletonCard key={index}>
        <Skeleton.Image style={{ width: '230px', height: 150 }} active />
        <Skeleton active>
          <Meta title={" "} description={" "} />
        </Skeleton>
      </SkeletonCard>
    ));
  };

  if (isLoading) {
    return (
      <div>
        <h2>My Courses</h2>
        <CourseGrid>{renderSkeletons()}</CourseGrid>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>My Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>You are not enrolled in any courses yet.</p>
      ) : (
        <CourseGrid>
          {enrolledCourses.map((course) => (
            <StyledCard
              key={course._id}
              cover={
                <img alt={course.title || "Course image"} src={course.image} />
              }
              actions={[
                <Dropdown
                  key="more"
                  menu={{ items: getMenuItems(course._id) }}
                  trigger={["click"]}
                >
                  <EllipsisOutlined />
                </Dropdown>,
              ]}
            >
              <Link to="/enrolled-course-detail">
                <Meta
                  title={course.title || "Untitled Course"}
                  description={
                    (course.description &&
                      course.description.substring(0, 100) + "...") ||
                    "No description available"
                  }
                />
              </Link>
            </StyledCard>
          ))}
        </CourseGrid>
      )}
    </div>
  );
}

export default MyCourses;