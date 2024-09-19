
import styled from 'styled-components';
import bannerImage from "../../assets/bannerImage.png"
import PropTypes from 'prop-types';
import calendarIcon from "../../assets/calender.png"
import profileIcon from "../../assets/userProfile.png"
import mailIcon from "../../assets/email.png"
import baseImageSrc from "../../assets/mailBox.png"
import statsIcon from "../../assets/state.png"
import { TypeAnimation } from 'react-type-animation';
// const HeroContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
//   background-color: #49BBBD;
//   min-height: 100vh;
//   position: relative;
//   overflow: hidden;
//   padding: 20px;

//   @media (min-width: 1024px) {
//     flex-direction: row;
//     padding: 50px 5%;
//   }
// `;

// const ContentArea = styled.div`
//   flex: 1;
//   width: 100%;
//   text-align: center;
//   z-index: 2;

//   @media (min-width: 1024px) {
//     width: 50%;
//     text-align: left;
//   }
// `;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column; /* Image first in mobile view */
  align-items: center;
  color: white;
  background-color: #49BBBD;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 20px;

  @media (min-width: 1024px) {
    flex-direction: row; /* Content left, image right in desktop view */
    padding: 50px 5%;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
  z-index: 2;
  order: 2; /* Content after image in mobile view */

  @media (min-width: 1024px) {
    order: 1; /* Content first in desktop view */
    width: 50%;
    text-align: left;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  margin-bottom: 30px; /* Add margin-bottom for spacing in mobile view */
  order: 1; /* Image first in mobile view */

  @media (min-width: 1024px) {
    order: 2; /* Image second in desktop view */
    width: 50%;
    margin-bottom: 0;
  }
`;





const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  max-width: 500px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
  }
`;

const JoinButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
`;

const WatchButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '▶';
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: white;
    color: #49BBBD;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }
`;

// const ImageArea = styled.div`
//   flex: 1;
//   width: 100%;
//   position: relative;
//   margin-top: 30px;

//   @media (min-width: 1024px) {
//     width: 50%;
//     margin-top: 0;
//   }
// `;

const StudentImage = styled.img`
  width: 100%;
  ${'' /* max-width: 400px; */}
  display: block;
  margin: 0 auto;

  @media (min-width: 1024px) {
    position: absolute;
    right:100px;
    bottom: -500px;
    max-width: 600px;
    width: 120%;
  }
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 8px 12px;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-size: 12px;
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

const AssistedStudentCard = styled(InfoCard)`
  top: 40%;
  left: 50%;
  opacity: 0.7;
`;

const UserExperienceCard = styled(InfoCard)`
  bottom: 25%;
  left: 50%;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
  opacity: 0.7;
`;

const CongratulationsCard = styled(InfoCard)`
  top: 40%;
  right: 5%;
  opacity: 0.7;
`;

const JoinNowButton = styled.button`
  background-color: #D8587E;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 5px;
`;



const StatsIcon = styled.img`
  position: absolute;
  top: 150px;
  right: 200px;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const BaseImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
`;
const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  
  span {
    color: #FF7A00;
    ${'' /* color: white; */}
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;




function Banner() {
  return (
    <HeroContainer>
      <ContentArea>
      <Title>
      <span>Studying</span> 
      <TypeAnimation
        sequence={[
          ' Online is now much easier',
          1000,
          ' Online is now much effective.',
          1000,
        ]}
        speed={50}
        style={{ color: 'white' }}  // Set the color to white
        repeat={Infinity}
      />
    </Title>


        <Subtitle>TOTC is an interesting platform that will teach you in more an interactive way</Subtitle>
        <CTAGroup>
          <JoinButton>Join for free</JoinButton>
          <WatchButton>Watch how it works</WatchButton>
        </CTAGroup>
      </ContentArea>
        <AssistedStudentCard>
          <img src={calendarIcon} alt="" width="20" height="20" /> 
          <div>
            <strong>250k</strong>
            <div>Assisted Student</div>
          </div>
        </AssistedStudentCard>
        <UserExperienceCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={profileIcon} alt="" width="20" height="20" /> 
            <div>
              <strong>User Experience Class</strong>
              <div>Today at 12.00 PM</div>
            </div>
          </div>
          <JoinNowButton>Join Now</JoinNowButton>
        </UserExperienceCard>
      <ImageArea>
        <StudentImage src={bannerImage} alt="Student" />
    
          
     
        <CongratulationsCard>
        <ImageContainer>
           <BaseImage src={baseImageSrc} alt="Base Image" />
           <OverlayImage src={mailIcon} alt="Overlay Image" />
          </ImageContainer>
          <div>
            <strong>Congratulations</strong>
            <div>Your admission completed</div>
          </div>
        </CongratulationsCard>
      </ImageArea>
      <StatsIcon src={statsIcon} alt="Stats" />
    </HeroContainer>
  );
}

Banner.propTypes = {
  headerHeight: PropTypes.string
};

export default Banner;


