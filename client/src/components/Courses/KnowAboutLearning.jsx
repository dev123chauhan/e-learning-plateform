import person1 from "../../../public/assets/person1.png";
import person2 from "../../../public/assets/person2.png";
import person3 from "../../../public/assets/person3.png";
import person4 from "../../../public/assets/person4.png";
import person5 from "../../../public/assets/person5.png";
import { ContainerDiv, Container, LeftSection, Title, FeatureList, FeatureItem, Button, RightSection, InstructorCard, InstructorImage, InstructorName, ActionButton } from "../../styles/knowaboutlearningStyles";
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