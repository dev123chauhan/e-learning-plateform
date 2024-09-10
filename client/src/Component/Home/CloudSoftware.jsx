import styled from 'styled-components';
import PropTypes from 'prop-types';
const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  
  span {
    color: #49BBBD;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #696984;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  svg {
    width: 40px;
    height: 40px;
    fill: #FFFFFF;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #2F327D;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #696984;
`;

const Feature = ({ icon, title, description, color }) => (
  <FeatureCard>
    <IconCircle style={{ backgroundColor: color }}>{icon}</IconCircle>
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureDescription>{description}</FeatureDescription>
  </FeatureCard>
);
Feature.propTypes = {
    icon: PropTypes.node.isRequired, // `node` because it can be anything renderable
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  };

const CloudSoftware = () => {
  return (
    <Section>
      <Title>All-In-One <span>Cloud Software.</span></Title>
      <Subtitle>
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </Subtitle>
      <FeaturesContainer>
        <Feature
          icon={<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 5V3.5L18.5 9H13V7zM8 17h8v2H8v-2zm0-4h8v2H8v-2zm0-4h5v2H8V9z"/></svg>}
          title="Online Billing, Invoicing, & Contracts"
          description="Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
          color="#4D4CAC"
        />
        <Feature
          icon={<svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>}
          title="Easy Scheduling & Attendance Tracking"
          description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          color="#49BBBD"
        />
        <Feature
          icon={<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>}
          title="Customer Tracking"
          description="Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization"
          color="#5B72EE"
        />
      </FeaturesContainer>
    </Section>
  );
};

export default CloudSoftware;