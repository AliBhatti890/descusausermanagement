import React from 'react';
import HeaderBg from '../Svg Icons/HeaderBg.svg';
import HandWaving from '../SVG/HandWaving.png';

type Props = {
  children?: React.ReactNode
};


const UserSecondTobarBar: React.FC<Props> = ({ children }: any) => {
  return (

    <>
      <div className="w-auto my-5">
        <div className="flex items-center justify-between bg-white rounded-lg w-auto shadow-lg h-20">
          <div className="w-full flex items-center justify-start gap-2">
            <div className='px-5 py-3'>
              <h1 className='text-2xl font-[400]'>User Dashboard</h1>
            </div>
            <div className=''>
              <img src={HeaderBg} className='h-20' />
            </div>
          </div>
          <div className='border-[#F3632D] border-2 rounded-lg px-4   bg-[#084E41] text-white text-xs flex items-center gap-x-2 justify-center whitespace-nowrap'>
            I am here to help you
            <img src={HandWaving} alt="Hand Waving" className="h-10 w-10 rotate-20" />
          </div>
        </div>
      </div>
      {children}
    </>


  )
}

export default UserSecondTobarBar

