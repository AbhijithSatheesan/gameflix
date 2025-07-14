import React from "react";
import GameCard from "./GameCard";



const GameList = ({title, games}) => {
    if (!games || games.length === 0) return null;

    return (
        <div className="mb-10 px-4">
            <h2 className="text-xl font-bold text-white mb-3 ">
                {title}</h2>
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                {games.map((game) => (
                    <GameCard 
                    key={game.id}
                    coverImagePath={game.cover_image}
                    name = {game.name}
                    rating = {game.rating}
                    />
                ) )}
            </div>

        </div>
    );
};

export default GameList;














// import React from 'react';
// import GameCard from './GameCard';

// const GameList = ({ title, games }) => {
//   if (!games || games.length === 0) return null;

//   return (
//     <div className="my-8 px-4">
//       <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>

//       {/* Make sure this container scrolls */}
//       <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
//         {games.map((game) => (
//           <div key={game.id} className="min-w-[150px]">
//             <GameCard
//               id={game.id}
//               name={game.name}
//               coverImagePath={game.cover_image}
//               rating={game.rating}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameList;

