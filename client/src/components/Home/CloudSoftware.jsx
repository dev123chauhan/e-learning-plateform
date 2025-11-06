import Card from '../../common/Card';
import { cloudSoftwareFeatureLists } from '../../lib/cloudSoftwareFeatureLists';
import { FeaturesContainer, Section, Subtitle, Title } from '../../styles/cloudSoftwareStyles';
const CloudSoftware = () => {
  return (
    <Section>
      <Title>All-In-One <span>Cloud Software.</span></Title>
      <Subtitle>
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </Subtitle>
      <FeaturesContainer>
        {cloudSoftwareFeatureLists.map((feature, index) => {
          const icon = (
            <svg viewBox="0 0 24 24" fill={feature.color}>
              <path d={feature.iconPath} />
            </svg>
          );
          return (
            <Card
              key={index}
              variant="feature"
              icon={icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          );
        })}
      </FeaturesContainer>
    </Section>
  );
};

export default CloudSoftware;