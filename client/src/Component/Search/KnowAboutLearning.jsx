import styled from 'styled-components';
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import bgImage from "../../assets/bgCourse.png"; // Import the image
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const ContainerDiv = styled.div`
   background: url(${bgImage});  // Set the background image
`;


const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #49BBBD;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const InstructorCard = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InstructorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InstructorName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  font-size: 12px;
`;

const ActionButton = styled.button`
  background-color: ${props => props.color};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const KnowAboutLearning = () => {
  return (
    <ContainerDiv>
    <Container>
      <LeftSection>
        <Title>Know about learning learning platform</Title>
        <FeatureList>
          <FeatureItem>Free E-book, video & consolation</FeatureItem>
          <FeatureItem>Top instructors from around world</FeatureItem>
          <FeatureItem>Top courses from your team</FeatureItem>
        </FeatureList>
        <Button>Start learning now</Button>
      </LeftSection>
      <RightSection>
        <InstructorCard>
          <InstructorImage src={person1} alt="Eveny Howard" />
          <InstructorName>Eveny Howard</InstructorName>
        </InstructorCard>
        <InstructorCard>
          <InstructorImage src={person2} alt="Tamara Clark" />
          <InstructorName>Tamara Clark</InstructorName>
        </InstructorCard>
        <InstructorCard>
          <InstructorImage src={person3} alt="Adam Levin" />
          <InstructorName>Adam Levin</InstructorName>
        </InstructorCard>
        <InstructorCard>
          <InstructorImage src={person4} alt="Humbert Hule" />
          <InstructorName>Humbert Hule</InstructorName>
        </InstructorCard>
        <InstructorCard>
          <InstructorImage src={person5} alt="Patricia Mendoza" />
          <InstructorName>Patricia Mendoza</InstructorName>
        </InstructorCard>
      </RightSection>
        <ActionButton color="#3465E1">Present</ActionButton>
        <ActionButton color="#E13468">Call</ActionButton>
    </Container>
   </ContainerDiv>
  );
};

export default KnowAboutLearning;