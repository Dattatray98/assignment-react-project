import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/signin');
  };

  const handleCreateAccount = () => {
    navigate('/createAc');
  };

  return (
    <div className="w-[375px] h-[812px] flex justify-center border-2 border-gray-300 bg-[#F7F8F9] relative">
      <h1 className="absolute top-[549px] left-[20px] text-[28px] font-medium leading-[17px] w-[231px] h-[33px] text-[#1D2226] font-rubik">
        Welcome to PopX
      </h1>

      <p className="absolute top-[592px] left-[20px] text-[18px] w-[232px] h-[48px] text-[#1D2226] font-rubik">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button 
        onClick={handleCreateAccount}
        className="absolute top-[669px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-[16px] text-white font-medium font-rubik">
        Create Account
      </button>

      <button
        onClick={handleLoginRedirect}
        className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] text-[16px] text-[#1D2226] font-medium font-rubik"
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default LoadingScreen;
