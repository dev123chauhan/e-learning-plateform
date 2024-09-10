import Banner from "./Banner";
import CloudSoftware from "./CloudSoftware";
import Header from "./Header";
import Success from "./Success";
import styled from "styled-components";
import WhatIsELearning from "./WhatIsELearning";
import Classroom from "./Classroom";
import ClassroomInterface from "./ClassroomInterface";
import TeachersAndLearnersTools from "./TeachersAndLearnersTools";
import Quiz from "./Quiz";
import ClassManagement from "./ClassManagement";
import OneOnOneDiscussions from "./OneOnOneDiscussion";
import Footer from "./Footer";
const AppContainer = styled.div`
  background-color: #49BBBD;
`;
export default function Home() {

  return (
    <>
    <AppContainer>
      <Header/>
      <Banner />
    </AppContainer>
      <Success/>
      <CloudSoftware/>
      <WhatIsELearning/>
      <Classroom/>
      <ClassroomInterface/>
      <TeachersAndLearnersTools/>
      <Quiz/>
      <ClassManagement/>
      <OneOnOneDiscussions/>
      <Footer/>
      </>
  )
}
