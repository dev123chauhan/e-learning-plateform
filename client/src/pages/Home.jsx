import Banner from "../components/Home/Banner";
import ClassManagement from "../components/Home/ClassManagement";
import Classroom from "../components/Home/Classroom";
import ClassroomInterface from "../components/Home/ClassroomInterface";
import CloudSoftware from "../components/Home/CloudSoftware";
import OneOnOneDiscussions from "../components/Home/OneOnOneDiscussion";
import Quiz from "../components/Home/Quiz";
import Success from "../components/Home/Success";
import TeachersAndLearnersTools from "../components/Home/TeachersAndLearnersTools";
import WhatIsELearning from "../components/Home/WhatIsELearning";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #49BBBD;
`;

export default function Home() {
  return (
    <>
      <AppContainer className='curve'>
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
    </>
  )
}