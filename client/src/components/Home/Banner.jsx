import bannerImage from "../../../public/assets/bannerImage.png"
import calendarIcon from "../../../public/assets/calender.png"
import profileIcon from "../../../public/assets/userProfile.png"
import mailIcon from "../../../public/assets/email.png"
import baseImageSrc from "../../../public/assets/mailBox.png"
import statsIcon from "../../../public/assets/state.png"
import { TypeAnimation } from 'react-type-animation';
import { AssistedStudentCard, BaseImage, CongratulationsCard, ContentArea, CTAGroup, HeroContainer, ImageArea, ImageContainer, JoinButton, JoinNowButton, OverlayImage, StatsIcon, StudentImage, Subtitle, Title, UserExperienceCard, WatchButton } from "../../styles/bannerStyles";
function Banner() {
  return (
    <HeroContainer className='curve'>
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
        style={{ color: 'white' }}  
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

export default Banner;


