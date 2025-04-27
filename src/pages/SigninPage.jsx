import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';

const SigninPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    console.log('Stored User:', storedUser); // Debugging: Check what's stored in localStorage
    console.log('Entered Email:', email);  // Debugging: Check entered email
    console.log('Entered Password:', password);  // Debugging: Check entered password

    if(storedUser) {
      if(storedUser.email === email && storedUser.password === password){
        console.log('Login successful! Navigating to /MyAccount');
        navigate('/MyAccount');
      } else {
        alert('Incorrect email or password.');
      }
    } else {
      alert('Please create your account first.');
    }
  };

  return (
    <PageWrapper>
      <div className="w-[375px] h-[812px] flex justify-center bg-[#F7F8F9] relative">
        <h1 className="absolute top-[40px] left-[20px] text-[28px] font-medium leading-[36px] w-[188px] h-[69px] text-[#1D2226] font-rubik">
          Signin to your PopX account
        </h1>

        <p className="absolute top-[123px] left-[20px] text-[18px] w-[232px] h-[48px] text-[#1D2226] font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="flex h-[40px] w-[335px] absolute top-[204px] left-[20px] items-center justify-center bg-transparent">
          <label htmlFor="email" className="relative">
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit"
              required
            />
            <span className="absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5">
              Enter email
            </span>
          </label>
        </div>

        <div className="flex h-[40px] w-[335px] absolute top-[267px] left-[20px] items-center justify-center bg-transparent">
          <label htmlFor="password" className="relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit"
              required
            />
            <span className="absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5">
              Password
            </span>
          </label>
        </div>

        <button
          onClick={handleLogin}
          className="absolute top-[321px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px] text-[16px] text-[#1D2226] font-medium font-rubik hover:bg-[#6C25FF] hover:text-white"
        >
          Login
        </button>
      </div>
    </PageWrapper>
  );
};

export default SigninPage;
