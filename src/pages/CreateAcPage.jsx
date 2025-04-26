import React from 'react';
import PageWrapper from '../Components/PageWrapper';
const CreateAcPage = () => {
  return (
    <PageWrapper>
      <div className="w-[375px] h-[812px] flex justify-center border-2 border-gray-300 bg-[#F7F8F9] relative">
        <h1 className="absolute top-[40px] left-[20px] text-[28px] font-medium leading-[36px] w-[188px] h-[69px] text-[#1D2226] font-rubik">
          Create your PopX account
        </h1>

        <input type="text" placeholder='Full Name' className='h-[40px] w-[335px] absolute left-[20px] top-[140px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <input type="text" placeholder='Phone number' className='h-[40px] w-[335px] absolute left-[20px] top-[209px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <input type="text" placeholder='Enter email address' className='h-[40px] w-[335px] absolute left-[20px] top-[278px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <input type="password" placeholder='Enter password' className='h-[40px] w-[335px] absolute left-[20px] top-[347px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <input type="text" placeholder='Company name' className='h-[40px] w-[335px] absolute left-[20px] top-[416px] rounded-[6px] border-[1px] border-[#CBCBCB] p-3 '/>

        <button
          className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF]  rounded-[6px] text-[16px] text-[#FFFFFF] font-medium font-rubik hover:bg-[#CBCBCB] hover:text-[#1D2226] "
        >
          Create Account
        </button>
      </div>
    </PageWrapper>
  );
};

export default CreateAcPage;
