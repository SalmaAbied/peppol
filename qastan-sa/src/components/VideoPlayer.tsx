import React from "react";
import { useTranslation } from "react-i18next";
import YouTube from "react-youtube";

const Video: React.FC = () => {
  const { t } = useTranslation();
  const videoId = `${t('Home.Intro.Video')}`;

  const opts = {
    height: "100%", 
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <YouTube videoId={videoId} opts={opts} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default Video;

