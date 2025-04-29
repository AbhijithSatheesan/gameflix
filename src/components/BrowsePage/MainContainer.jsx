import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    // give ?.(optional chaining) for browse page, or  else it will give error if not present
    const nowPlaying = useSelector((store) => store.browsePage?.browsePageContents?.Trending_game || [])
  return (
    <div>
        <VideoBackground></VideoBackground>
        <VideoTitle></VideoTitle>
        
    </div>
  )
}

export default MainContainer






// {
//     user: {
//       username: 'classmate1',
//       access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NzQ2OTIyLCJpYXQiOjE3NDU2NjA1MjIsImp0aSI6ImZhYmU5NTFmMGFjNDQ5MTJhOTYwYTZlN2Y3NmNmZGViIiwidXNlcl9pZCI6OX0.8N-XXioYWCIfpRV8rgxdsWM6fPlC1x2CUcoBI6IDPiM',
//       refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NTc0NjkyMiwiaWF0IjoxNzQ1NjYwNTIyLCJqdGkiOiJhMmE4Y2Q4ZjI0ZDg0ZTNmOTBmZmM3OTU2Yzg4ODg2YyIsInVzZXJfaWQiOjl9.rC9XZLXoO3QGhjzFeqnbhcARVV509VMfkNUVDO5hONc',
//       _persist: {
//         version: -1,
//         rehydrated: true
//       }
//     },
//     browsePage: {
//       browsePageContents: {
//         Trending_game: {
//           id: 20,
//           name: 'Sekiro: Shadows Die Twice',
//           description: 'A challenging action-adventure game set in feudal Japan, where players control a shinobi named Wolf on a quest for revenge. The game features intense sword combat, stealth, and a resurrection mechanic.',
//           cover_image: '/media/6251820-sekiro-shadows-die-twice-xbox-one-front-cover.jpeg',
//           release_year: 2019,
//           tags: 'Feudal Japan, Parry Combat, Stealth',
//           free_to_play: false,
//           rating: 9.6,
//           developer: 'FromSoftware',
//           publisher: 'Activision',
//           price: 5999
//         },
//         Top_rated_games: [
//           {
//             id: 1,
//             name: 'Red Dead Redemption 2',
//             description: 'An epic tale set in the dying days of the American Wild West, following outlaw Arthur Morgan.',
//             cover_image