import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';


const CreateAcPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [Agency, setAgency] = useState('');


  const handleCreateAccount = () => {
    const userData = {
      name,
      phone,
      email,
      password,
      company,
      Agency,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Account created successfully!")
    navigate("/MyAccount")
  }
  return (
    <PageWrapper>
      <div className="w-[375px] h-[812px] flex justify-center border-2 border-gray-300 bg-[#F7F8F9] relative">
        <h1 className="absolute top-[40px] left-[20px] text-[28px] font-medium leading-[36px] w-[188px] h-[69px] text-[#1D2226] font-rubik">
          Create your PopX account
        </h1>

        <div className='flex h-[40px] w-[335px] absolute top-[140px] left-[20px] items-center justify-center bg-transparent'>
          <label htmlFor="input" className='relative'>
            <input
              id="input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className='h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit'
              required
            />
            <span className='absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5'>
              Full Name
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>


        <div className='flex h-[40px] w-[335px] absolute top-[209px] left-[20px] items-center justify-center bg-transparent'>
          <label htmlFor="input" className='relative'>
            <input
              id="input"
              type="tel"
              pattern="[0-9]{10}"
              onChange={(e) => setEmail(e.target.value)}

              className='h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit'
              required
            />
            <span className='absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5'>
              Phone number
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>

        <div className='flex h-[40px] w-[335px] absolute top-[278px] left-[20px] items-center justify-center bg-transparent'>
          <label htmlFor="input" className='relative'>
            <input
              id="input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className='h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit'
              required
            />
            <span className='absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5'>
              Email address
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>

        <div className='flex h-[40px] w-[335px] absolute top-[347px] left-[20px] items-center justify-center bg-transparent'>
          <label htmlFor="input" className='relative'>
            <input
              id="input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className='h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit'
              required
            />
            <span className='absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5'>
              Password
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>


        <div className='flex h-[40px] w-[335px] absolute top-[416px] left-[20px] items-center justify-center bg-transparent'>
        
          <label htmlFor="input" className='relative'>
            
            <input
              id="input"
              type="text"
              onChange={(e) => setCompany(e.target.value)}
              className='h-[40px] w-[335px] px-4 py-2 text-lg outline-none border-[1px] border-[#CBCBCB] rounded-[6px] hover:border-[#CBCBCB] duration-200 peer focus:border-indigo-600 bg-inherit'
              required
            />
            <span className='absolute left-0 top-2 px-1 text-[16px] tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-[#F7F8F9] ml-[10px] peer-valid:text-sm peer-valid:-translate-y-5'>
              Company name
              
            </span>
          </label>
        </div>


        <div className="flex flex-col absolute top-[474px] left-[20px] ">
          <label className="text-sm font-medium mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                onChange={(e) => setAgency(e.target.value)}
                className="accent-purple-600 w-5 h-5"
                required
                defaultChecked
              />
              <span className="text-gray-700 text-sm">Yes</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="no"
                onChange={(e) => setAgency(e.target.value)}
                className="accent-gray-400 w-5 h-5"
                required
              />
              <span className="text-gray-700 text-sm">No</span>
            </label>
          </div>
        </div>


        <button
          onClick={handleCreateAccount}
          className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF]  rounded-[6px] text-[16px] text-[#FFFFFF] font-medium font-rubik hover:bg-[#CBCBCB] hover:text-[#1D2226] "
        >
          Create Account
        </button>
      </div>
    </PageWrapper>
  );
};

export default CreateAcPage;
