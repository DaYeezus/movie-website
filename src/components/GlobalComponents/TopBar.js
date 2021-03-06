import React from 'react'
import { BsBell, BsSearch } from 'react-icons/bs'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { RiMic2Line } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function TopBar() {
  return (
    <div
      className={`flex   justify-between items-center py-5 sm:px-5  w-full  md:px-10`}
    >
      <div className="flex  items-center px-16 justify-center mx-auto sm:mx-0 space-x-3 md:space-x-6 lg:space-x-16">
        {/* //! next and prev button to change banner movie */}
        {/* //! for search bar << it should be responsive too >>  */}
        <div className="relative flex  items-center   justify-start">
          <BsSearch className="absolute left-3  " />
          <input
            type="text"
            placeholder="Search..."
            className="border-2 focus:border-red-600 transition-all duration-500  w-full rounded-full outline-none bg-transparent py-2.5 px-9"
          />
          <RiMic2Line className="absolute right-5 cursor-pointer hover:text-red-600 transition-all transform hover:scale-125 duration-500 " />
        </div>
      </div>

      <div className=" hidden sm:flex  items-center justify-start sm:space-x-5 md:space-x-10 lg:space-x-16 text-xl md:text-2xl lg:text-3xl">
        <Link to={'/notification'}>
          <BsBell className="cursor-pointer" />
        </Link>
        <AiOutlineMessage className=" cursor-pointer" />
        <Link
          to="/settings/"
          className="flex text-base cursor-pointer w-10  h-10 md:w-16 md:h-16 md:text-lg items-center justify-center space-x-2  "
        >
          <img
            className="rounded-full  border-2 p-2"
            src="https://www.bing.com/th/id/OIP.KodEEM5freDj16hH50aVXQAAAA?pid=ImgDet&rs=1"
            alt="user profile"
          />
        </Link>
      </div>
    </div>
  )
}

export default TopBar
