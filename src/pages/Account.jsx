import React from 'react';
import SavedShows from '../components/SavedShows';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <>
        <div className='w-full text-white'>
          <img
            className='w-full h-[400px] object-cover'
            src='https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/714ed48c-041d-4dfa-9155-f842a707b120/VE-en-20230403-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            alt='/'
          />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
        <SavedShows />
      </>
    );
  } else {
    return <Navigate to='/login' />;
  }
};

export default Account;
