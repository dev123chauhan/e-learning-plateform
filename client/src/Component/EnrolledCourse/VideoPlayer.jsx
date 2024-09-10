import { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
`;

const VideoButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0 5px;
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

const ProgressBar = styled.input`
  flex-grow: 1;
  margin: 0 10px;
`;

const VolumeControl = styled(VideoButton)`
  margin-left: auto;
`;

const FullscreenButton = styled(VideoButton)``;

export default function VideoPlayerEnrolledCourse({ videoSrc, onVideoComplete }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const updateProgress = () => {
      if (videoElement.duration) {
        setProgress((videoElement.currentTime / videoElement.duration) * 100);
      }
    };
    videoElement.addEventListener('timeupdate', updateProgress);
    return () => videoElement.removeEventListener('timeupdate', updateProgress);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.src = videoSrc;
    videoElement.load();
    setIsPlaying(false);
    setProgress(0);
  }, [videoSrc]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
      if (onVideoComplete) {
        onVideoComplete();
      }
    };
    videoElement.addEventListener('ended', handleEnded);
    return () => videoElement.removeEventListener('ended', handleEnded);
  }, [onVideoComplete]);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(e => setError("Failed to play video: " + e.message));
    }
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleVolumeToggle = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreenToggle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      playerRef.current.requestFullscreen();
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <VideoPlayer ref={playerRef}>
      <StyledVideo ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
      {error && <div>Error: {error}</div>}
      <VideoControls>
        <VideoButton onClick={handleRewind}>
          <svg viewBox="0 0 24 24"><path d="M12.5 3C17.15 3 21.08 6.03 22.47 10.22L20.1 11C19.05 7.81 16.04 5.5 12.5 5.5C10.54 5.5 8.77 6.22 7.38 7.38L10 10H3V3L5.6 5.6C7.45 4 9.85 3 12.5 3M10 12V22H8V14H6V12H10M18 14V20C18 21.11 17.11 22 16 22H14C12.9 22 12 21.1 12 20V14C12 12.9 12.9 12 14 12H16C17.11 12 18 12.9 18 14M14 14V20H16V14H14Z" /></svg>
        </VideoButton>
        <VideoButton onClick={handlePlayPause}>
          {isPlaying ? 
            <svg viewBox="0 0 24 24"><path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg> :
            <svg viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
          }
        </VideoButton>
        <VideoButton onClick={handleForward}>
          <svg viewBox="0 0 24 24"><path d="M11.5 3C6.85 3 2.92 6.03 1.53 10.22L3.9 11C4.95 7.81 7.96 5.5 11.5 5.5C13.46 5.5 15.23 6.22 16.62 7.38L14 10H21V3L18.4 5.6C16.55 4 14.15 3 11.5 3M10 12V22H8V14H6V12H10M18 14V20C18 21.11 17.11 22 16 22H14C12.9 22 12 21.1 12 20V14C12 12.9 12.9 12 14 12H16C17.11 12 18 12.9 18 14M14 14V20H16V14H14Z" /></svg>
        </VideoButton>
        <ProgressBar 
          type="range" 
          min="0" 
          max="100" 
          value={progress}
          onChange={handleProgressChange}
        />
        <VolumeControl onClick={handleVolumeToggle}>
          {isMuted ? 
            <svg viewBox="0 0 24 24"><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg> :
            <svg viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
          }
        </VolumeControl>
        <FullscreenButton onClick={handleFullscreenToggle}>
          <svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
        </FullscreenButton>
      </VideoControls>
    </VideoPlayer>
  );
}

VideoPlayerEnrolledCourse.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  onVideoComplete: PropTypes.func
};
