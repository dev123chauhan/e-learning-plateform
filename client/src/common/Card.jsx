import { 
  CardContainer, 
  CardImage, 
  CardBody, 
  CardTitle, 
  CardText, 
  CardFooter, 
  Tag, 
  Price, 
  ProfileImage,
  IconCircle 
} from '../styles/cardStyles'
const Card = ({
  variant = 'course',
  image,
  title,
  description,
  tags = [],
  footer,
  onClick,
  color,
  icon,
  progress,
  customStyles = {}
}) => {
  const renderTags = () => {
    if (!tags || tags.length === 0) return null;
    
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        {tags.map((tag, index) => (
          <Tag key={index} style={tag.style}>
            {tag.icon}
            {tag.text}
          </Tag>
        ))}
      </div>
    );
  };

  const renderFooter = () => {
    if (!footer) return null;

    switch (variant) {
      case 'course':
      case 'recommended':
        return (
          <CardFooter>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ProfileImage 
                src={footer.profileImage} 
                alt={footer.profileName} 
              />
              <span>{footer.profileName}</span>
            </div>
            {footer.price && (
              <Price>
                {footer.originalPrice && (
                  <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '5px' }}>
                    ${footer.originalPrice}
                  </span>
                )}
                <span>${footer.price}</span>
              </Price>
            )}
          </CardFooter>
        );

      case 'career':
        return (
          <CardFooter>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ProfileImage 
                src={footer.profileImage} 
                alt={footer.profileName} 
              />
              <span>{footer.profileName}</span>
            </div>
            {progress && (
              <div style={{ width: '100%', marginTop: '10px' }}>
                <div style={{ 
                  backgroundColor: '#e0e0e0', 
                  height: '5px', 
                  borderRadius: '5px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${progress.percentage}%`, 
                    height: '100%', 
                    backgroundColor: '#49BBBD' 
                  }} />
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#666', 
                  textAlign: 'right', 
                  marginTop: '5px' 
                }}>
                  Lesson {progress.current} of {progress.total}
                </div>
              </div>
            )}
          </CardFooter>
        );

      default:
        return null;
    }
  };


  if (variant === 'feature') {
    return (
      <CardContainer style={customStyles} onClick={onClick}>
        {icon && (
          <IconCircle style={{ backgroundColor: color }}>
            {icon}
          </IconCircle>
        )}
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </CardContainer>
    );
  }


  if (variant === 'category') {
    return (
      <CardContainer style={customStyles} onClick={onClick}>
        <div style={{ textAlign: 'center' }}>
          {image && (
            <div style={{ 
              backgroundColor: color, 
              padding: '10px', 
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              margin: '0 auto 10px'
            }}>
              <img 
                src={image} 
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
          <CardTitle>{title}</CardTitle>
          <CardText style={{ color: '#666', fontSize: '14px' }}>
            {description}
          </CardText>
        </div>
      </CardContainer>
    );
  }


  return (
    <CardContainer style={customStyles} onClick={onClick}>
      {image && <CardImage src={image} alt={title} />}
      <CardBody>
        {renderTags()}
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      {renderFooter()}
    </CardContainer>
  );
};

export default Card;