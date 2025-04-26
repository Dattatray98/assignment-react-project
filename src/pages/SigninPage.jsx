import React from 'react';
import PageWrapper from '../components/PageWrapper';

const SigninPage = () => {
  return (
    <PageWrapper>
      <div className="w-[375px] h-[812px] flex justify-center border-2 border-gray-300 bg-[#F7F8F9] relative">
        <h1 className="absolute top-[40px] left-[20px] text-[28px] font-medium leading-[36px] w-[188px] h-[69px] text-[#1D2226] font-rubik">
          Signin to your PopX account
        </h1>

        <p className="absolute top-[123px] left-[20px] text-[18px] w-[232px] h-[48px] text-[#1D2226] font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <input type="text" placeholder='Enter email address' className='h-[40px] w-[335px] absolute left-[20px] top-[204px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <input type="password" placeholder='Enter password' className='h-[40px] w-[335px] absolute left-[20px] top-[267px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <button
          className="absolute top-[321px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB]  rounded-[6px] text-[16px] text-[#1D2226] font-medium font-rubik hover:bg-[#6C25FF] hover:text-white "
        >
          Login
        </button>
      </div>
    </PageWrapper>
  );
};

export default SigninPage;
