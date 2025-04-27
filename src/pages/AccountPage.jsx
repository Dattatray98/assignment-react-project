import React, {useEffect, useState} from 'react';
import PageWrapper from '../Components/PageWrapper';


const AccountPage = () => {
  const [user, setUser] = useState({name:'', email: ''});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if(storedUser) {
      setUser({name: storedUser.name, email: storedUser.email});
    }
  }, []);

  return (
    <PageWrapper>
      <div className='w-[375px] h-[812px] flex justify-center border-2 border-gray-300 bg-[#F7F8F9] relative'>
      <div className='absolute top-0 left-0 w-[371px] h-[68px] bg-white box-shadow opacity-100'>

        <h1 className='w-[146px] h-[22px] ml-[15px] mt-[27px] font-medium font-rubik capitalize'>Account Settings</h1>
      </div>

      <div className='bg-gray-600 w-[76px] h-[76px] rounded-full absolute top-[98px] left-[20px]  '>
      </div>
      <img src="/camera.png" alt="camera" className='absolute left-[79px] top-[147px] w-[21px] h-[23px] ' />

      <h1 className='absolute top-[98px] left-[116px] text-[#1D2226] text-[15px] leading-[19px] text-left font-medium font-rubik capitalize'>{user.name}</h1>

      <h1 className='absolute top-[122px] left-[116px] text-[14px] leading-[19px] text-left text-[#1D2226] tracking-normal font-normal font-rubik'>{user.email}</h1>

      <p className='absolute left-[20px] top-[204px] text-[14px] leading-[22px] text-left text-[#1D2226] font-normal font-rubik capitalize tracking-normal w-[337px] '>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </p>

    </div>
    </PageWrapper>
  );
};

export default AccountPage;
