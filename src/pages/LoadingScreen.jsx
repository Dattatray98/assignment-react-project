import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';

const LoadingScreen = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="w-[375px] h-[812px] flex justify-center bg-[#F7F8F9] relative">
        <h1 className="absolute top-[549px] left-[20px] text-[28px] font-medium leading-[17px] w-[231px] h-[33px] text-[#1D2226] font-rubik">
          Welcome to PopX
        </h1>

        <p className="absolute top-[592px] left-[20px] text-[18px] w-[232px] h-[48px] text-[#1D2226] font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate('/createAc')}
          className="absolute top-[669px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-[16px] text-white font-medium font-rubik">
          Create Account
        </button>

        <button
          onClick={() => navigate('/signin')}
          className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] text-[16px] text-[#1D2226] font-medium font-rubik"
        >
          Already Registered? Login
        </button>
      </div>
    </PageWrapper>
  );
};

export default LoadingScreen;
