import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Courses from "./pages/Courses";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Careers from "./pages/Careers";  
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Meeting from "./pages/Meeting";
import EnrolledCourse from "./components/EnrolledCourse/EnrolledCourse";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import { ArrowUp } from "lucide-react";

export default function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop
        className="scrollToTop"
        smooth
        component={<ArrowUp strokeWidth={1} size={25} className="upArrow" />}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="career" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="meeting" element={<Meeting />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/enrolled-course-detail" element={<PrivateRoute element={EnrolledCourse} />} />
      </Routes>
    </>
  );
}