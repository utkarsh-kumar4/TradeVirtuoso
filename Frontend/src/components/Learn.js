import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';

const Learn = () => {
    const {user} = useSelector(store=>store.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const logoutHandler =  async() => {
    try {
      const res=await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate('/login');
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
        <header className='fixed flex items-center justify-end py-8 mr-20 w-[100%]'>
            <Link to="/" className='flex items-center py-2 px-5 hover:cursor-pointer hover:text-[#323e8a] w-fit'>
                <h1 className='font-bold text-xl mr-10'>Home</h1>
            </Link>
            <Link to={`/profile/${user?._id}`} className='flex items-center py-2 px-5 hover:cursor-pointer hover:text-[#323e8a] w-fit'>
                <h1 className='font-bold text-xl mr-10'>Profile</h1>
            </Link>
            <Link onClick={logoutHandler} className='flex items-center py-2 px-5 hover:cursor-pointer hover:text-[#323e8a] w-fit'>
                <h1 className='font-bold text-xl mr-10'>Logout</h1>
            </Link>
        </header>
        <div className='flex items-center justify-center'>
            <div className='flex-column items-center justify-center w-[75%] min-h-screen'>
                <div>
                    <h1 className='font-extrabold text-7xl mt-40 mb-10 text-[#323e8a]'>Modules</h1>
                </div>
                <div className='pb-10 border-b-2 border-gray-100 py-10'>
                    <div className='flex items-end justify-start'>
                        <div>
                            <h1 className='font-extrabold text-7xl text-[black] leading-10'>1</h1>
                        </div>
                        <div className='w-[25%] border-2 border-[#323e8a]'></div>
                    </div>
                    <Link to="https://zerodha.com/varsity/module/introduction-to-stock-markets/">
                        <h1 className='font-extrabold text-5xl py-8 text-[black] hover:text-[#323e8a]'>Stock Market Basics</h1>
                    </Link >
                    <div className='flex items-center justify-between'>
                        <Link to="https://zerodha.com/varsity/chapter/why-should-you-invest/">
                            <p className="font-normal text-[#323e8a] text-lg hover:cursor-pointer hover:text-black">Watch videos</p>
                        </Link>
                    </div>
                </div>
                <div className='pb-10 border-b-2 border-gray-100 py-10'>
                    <div className='flex items-end justify-start'>
                        <div>
                            <h1 className='font-extrabold text-7xl text-[black] leading-10'>2</h1>
                        </div>
                        <div className='w-[25%] border-2 border-[#323e8a]'></div>
                    </div>
                    <Link to="https://zerodha.com/varsity/module/technical-analysis/">
                        <h1 className='font-extrabold text-5xl py-8 text-[black] hover:text-[#323e8a]'>Technical Analysis</h1>
                    </Link>
                    <div className='flex items-center justify-between'>
                        <Link to="https://zerodha.com/varsity/chapter/fundamental-analysis-vs-technical-analysis/">
                            <p className="font-normal text-[#323e8a] text-lg hover:cursor-pointer hover:text-black">Watch videos</p>
                        </Link>
                    </div>
                </div>
                <div className='pb-10 border-b-2 border-gray-100 py-10'>
                    <div className='flex items-end justify-start'>
                        <div>
                            <h1 className='font-extrabold text-7xl text-[black] leading-10'>3</h1>
                        </div>
                        <div className='w-[25%] border-2 border-[#323e8a]'></div>
                    </div>
                    <Link to="https://zerodha.com/varsity/module/fundamental-analysis/">
                        <h1 className='font-extrabold text-5xl py-8 text-[black] hover:text-[#323e8a]'>Fundamental Analysis</h1>
                    </Link>
                    <div className='flex items-center justify-between'>
                        <Link to="https://zerodha.com/varsity/chapter/introduction-to-fundamental-analysis/">
                            <p className="font-normal text-[#323e8a] text-lg hover:cursor-pointer hover:text-black">Watch videos</p>
                        </Link>
                    </div>
                </div>
                <div className='pb-10 border-b-2 border-gray-100 py-10'>
                    <div className='flex items-end justify-start'>
                        <div>
                            <h1 className='font-extrabold text-7xl text-[black] leading-10'>4</h1>
                        </div>
                        <div className='w-[25%] border-2 border-[#323e8a]'></div>
                    </div>
                    <Link to="https://zerodha.com/varsity/module/futures-trading/">
                        <h1 className='font-extrabold text-5xl py-8 text-[black] hover:text-[#323e8a]'>Futures Trading</h1>
                    </Link>
                    <div className='flex items-center justify-between'>
                        <Link to="https://zerodha.com/varsity/chapter/introduction-to-forwards-market/">
                            <p className="font-normal text-[#323e8a] text-lg hover:cursor-pointer hover:text-black">Watch videos</p>
                        </Link>
                    </div>
                </div>
                <div className='pb-10 border-b-2 border-gray-100 py-10'>
                    <div className='flex items-end justify-start'>
                        <div>
                            <h1 className='font-extrabold text-7xl text-[black] leading-10'>5</h1>
                        </div>
                        <div className='w-[25%] border-2 border-[#323e8a]'></div>
                    </div>
                    <Link to="https://zerodha.com/varsity/module/option-theory/">
                        <h1 className='font-extrabold text-5xl py-8 text-[black] hover:text-[#323e8a]'>Options Theory for Professional Trading</h1>
                    </Link>
                    <div className='flex items-center justify-between'>
                        <Link to="https://zerodha.com/varsity/chapter/introduction-to-options/">
                            <p className="font-normal text-[#323e8a] text-lg hover:cursor-pointer hover:text-black">Watch videos</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learn