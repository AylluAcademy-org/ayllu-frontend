import React from 'react';
import ReactPlayer from 'react-player';
import { useSignedUrl } from './useSignedUrl';

const VideoPlayer = ({ bucket, keyVideo }) => {
  const isYouTubeUrl = keyVideo.includes('youtube.com') || keyVideo.includes('youtu.be');

  // Si es YouTube, no usar URL firmada
  const url = isYouTubeUrl ? keyVideo.trim() : useSignedUrl(bucket, keyVideo);

  return (
    <div className="about-video-box">
      <div className="image">
        {/* Imagen de fondo opcional */}
      </div>

      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />

      <div className="shape10">
        <img src="/images/shape9.png" alt="image" />
      </div>
    </div>
  );
};

export default VideoPlayer;

/*import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';

const videoPlayer = (image,video) => {
  return (  <center>
    <div className="video-player-container">    
        <ReactPlayer
          url="https://www.youtube.com/watch?v=XoOXOKew-uY"
          controls={true}
          width="100%"
          height="350px"
        />
       
  </div> 
  </center>
     
  );
};

export default videoPlayer;
*/