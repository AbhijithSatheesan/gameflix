import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';

const VideoBackground = () => {
  const nowPlaying = useSelector(
    (store) => store.browsePage?.browsePageContents?.Trending_game
  );
  if (!nowPlaying) return null;

  const { trailer_1 } = nowPlaying;

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <ReactPlayer
        url={trailer_1}
        // playing
        playing 
        loop
        muted
        width="100%"
        height="100%"
        className="!absolute !top-0 !left-0 !w-full !h-full object-cover"
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
          },
        }}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
};

export default VideoBackground;























// import React from 'react';
// import { useSelector } from 'react-redux';

// const VideoBackground = () => {
//   const nowPlaying = useSelector(
//     (store) => store.browsePage?.browsePageContents?.Trending_game
//   );
//   if (!nowPlaying) return null;

//   const { trailer_1 } = nowPlaying;

//   const getEmbedUrl = (url) => {
//     const videoId = url?.split('v=')[1]?.split('&')[0];
//     return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`;
//   };

//   const embedUrl = getEmbedUrl(trailer_1);

//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden">
//       <iframe
//         className="absolute top-0 left-0 w-full h-full"
//         src={embedUrl}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//       ></iframe>

//       {/* Optional overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
//     </div>
//   );
// };

// export default VideoBackground;



