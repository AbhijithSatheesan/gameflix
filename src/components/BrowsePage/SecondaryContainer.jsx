import React from 'react'
import GameList from './GameList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const games = useSelector((store) => store.gameList?.gameListContents)

  if (!games) {
    return <p>Loading ....</p>
  }

  const Main_category = games.Main_category

  return (
    <div className='py-20 bg-gray-900 text-white'>
      <h1>secondary container</h1>
      <GameList title={"Trending"} games={games.Trending_games} />
      <GameList title={"Top Rated"} games={games.Top_rated_games} />

      {/* now add dynamic categories here */}

      {Main_category && Object.entries(Main_category).map(([categoryName, games]) => (
        <GameList
        key={categoryName}
        title = {`${categoryName}`}
        games= {games}

        // if we want to make url out of the category
        category= {categoryName.toLowerCase().replace(/\s+/g, '-')}   
        />
      )) }




      {/* <GameList title={"Trending"} games={games.Main_category.Story} /> */}
      {/* the naming and the way in main category in redux should be changed */}
    </div>
  )
}

export default SecondaryContainer













// import React from 'react';
// import GameList from './GameList';
// import { useSelector } from 'react-redux';

// const SecondaryContainer = () => {
//   const games = useSelector((store) => store.gameList?.gameListContents);

//   if (!games) {
//     return (
//       <div className="py-10 px-4">
//         <div className="animate-pulse space-y-8">
//           {[...Array(3)].map((_, i) => (
//             <div key={i}>
//               <div className="h-8 w-1/4 bg-gray-700 rounded mb-4"></div>
//               <div className="flex space-x-4">
//                 {[...Array(5)].map((_, j) => (
//                   <div key={j} className="h-64 w-48 bg-gray-700 rounded-lg"></div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   const { Trending_games, Top_rated_games, Main_category } = games;

//   return (
//     <div className="py-10 px-4 bg-gradient-to-b from-gray-900 to-black">
//       <div className="max-w-7xl mx-auto">
//         <GameList 
//           title="🔥 Trending Now" 
//           games={Trending_games} 
//           category="trending"  // Add this
//         />
//         <GameList 
//           title="⭐ Top Rated" 
//           games={Top_rated_games} 
//           category="top-rated"  // Add this
//         />

//         {/* Dynamic Categories */}
//         {Main_category && Object.entries(Main_category).map(([categoryName, games]) => (
//           <GameList 
//             key={categoryName} 
//             title={`🎮 ${categoryName}`} 
//             games={games.slice(0, 10)}
//             category={categoryName.toLowerCase().replace(/\s+/g, '-')}  // Convert to URL-safe format
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecondaryContainer;







// //  simple one

// import React from 'react'
// import GameList from './GameList'
// import { useSelector } from 'react-redux'

// const SecondaryContainer = () => {

//   const games = useSelector((store) => store.gameList?.gameListContents)

//   if (!games) {
//     return <p>Loading ....</p>
//   }

//   const Main_category = games.Main_category

//   return (
//     <div className='py-25 bg-black text-white'>
//       <h1>secondary container</h1>
//       <GameList title={"Trending"} games={games.Trending_games} />
//       <GameList title={"Top Rated"} games={games.Top_rated_games} />

//       {/* now add dynamic categories here */}

//       {Main_category && Object.entries(Main_category).map(([categoryName, games]) => (
//         <GameList
//         key={categoryName}
//         title = {`${categoryName}`}
//         games= {games.slice(0, 10)}

//         // if we want to make url out of the category
//         category= {categoryName.toLowerCase().replace(/\s+/g, '-')}   
//         />
//       )) }




//       {/* <GameList title={"Trending"} games={games.Main_category.Story} /> */}
//       {/* the naming and the way in main category in redux should be changed */}
//     </div>
//   )
// }

// export default SecondaryContainer

