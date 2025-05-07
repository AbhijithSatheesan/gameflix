import React from 'react';
import logo from '../assets/images/logo.png';
import { removeUser } from './utils/redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-2 h-30 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md">
      <img
        className="max-h-full object-contain"
        src={logo}
        alt="logo"
      />

      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://cdn-icons-png.flaticon.com/128/10307/10307911.png"
          alt="usericon"
        />
        <button
          className="px-4 py-1 bg-white text-black rounded-lg hover:bg-gray-200 transition font-semibold"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;










// import React from 'react';
// import logo from '../assets/images/logo.png';
// import { removeUser } from './utils/redux/userSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     dispatch(removeUser());
//     navigate('/');
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-2 h-20 bg-gradient-to-b from-black shadow-md">
//       <img
//         className="w-44 object-contain"
//         src={logo}
//         alt="logo"
//       />

//       <div className="flex items-center space-x-4">
//         <img
//           className="w-12 h-12 object-cover"
//           src="https://cdn-icons-png.flaticon.com/128/10307/10307911.png"
//           alt="usericon"
//         />
//         <button
//           className="text-white font-semibold hover:underline"
//           onClick={handleSignOut}
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;




