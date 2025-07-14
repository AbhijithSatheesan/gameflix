import React from 'react';
import { django_media_url } from '../utils/backendconfig';

const GameCard = ({ coverImagePath, name, rating }) => {
  const imageUrl = django_media_url + coverImagePath;

  return (
    <div className="min-w-[250px] max-w-[150px] bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[200px] object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/placeholder.jpg';
        }}
      />
      <div className="p-2 text-center">
        <h3 className="text-white text-sm font-semibold truncate">{name}</h3>
        <p className="text-yellow-400 text-xs mt-1">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default GameCard;





































// import React from 'react';
// import { django_media_url } from '../utils/backendconfig';

// const GameCard = ({ coverImagePath }) => {
//   const image_url = django_media_url + coverImagePath;

//   return (
//     <div className="min-w-[150px] max-w-[150px] rounded-lg overflow-hidden shadow-md bg-gray-800 hover:scale-105 transition-transform duration-200">
//       <img
//         src={image_url}
//         alt="Game"
//         className="w-full h-[200px] object-cover"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = '/placeholder.jpg'; // Add a fallback image in your public folder
//         }}
//       />
//     </div>
//   );
// };

// export default GameCard;













// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { django_media_url } from '../utils/backendconfig';

// const GameCard = ({ id, name, coverImagePath, rating }) => {
//     const navigate = useNavigate();
//     const imageUrl = `${django_media_url}${coverImagePath}`;

//     const handleClick = () => {
//         navigate(`/game/${id}`);
//     };

//     return (
//         <div 
//             className="group cursor-pointer transition-transform hover:scale-105"
//             onClick={handleClick}
//         >
//             <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-2">
//                 <img
//                     src={imageUrl}
//                     alt={name}
//                     className="w-full h-full object-cover object-center"
//                     onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = '/placeholder-game.jpg';
//                     }}
//                 />
//                 <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1">
//                     <span className="text-yellow-400 text-xs">⭐ {rating}</span>
//                 </div>
//             </div>
//             <h3 className="text-white font-medium text-sm text-center truncate px-1">
//                 {name}
//             </h3>
//         </div>
//     );
// };

// export default GameCard;



