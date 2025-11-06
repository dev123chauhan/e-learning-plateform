import styled from 'styled-components';
export const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; 
  background-color: #000;
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const VideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  transition: opacity 0.3s;
  opacity: ${props => props.$isHovered ? 1 : 0};

  @media (max-width: 768px) {
    padding: 3px;
  }
`;

export const VideoButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin: 0 2px;
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }

  @media (max-width: 768px) {
    padding: 3px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin: 5px 0;
  }
`;

export const ProgressBar = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: white;
    margin-top: -4px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }

  &::-moz-range-thumb {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: white;
    border: none;
  }
`;

export const TimeDisplay = styled.span`
  color: white;
  font-size: 12px;
  margin-left: 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
`;