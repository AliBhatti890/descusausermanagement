import React from 'react';
import logo from '../Svg Icons/Group35.png';
import { useNavigate } from 'react-router-dom';
import SignInChild from '../Child Component/SignInChild';

const CreatePosition: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/Assignbudget');
  };
  const handlePrevious = () => {
    navigate('/SignIn');
  };


  return (

    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative bg-gray-50 p-8">
        <div className="absolute top-14 left-14">
          <img src={logo} alt="Nova HR Logo" className="w-48" />
        </div>
        <div className="grid  justify-center items-center h-full w-full">
          <form >
            <h1 className="font-bold text-2xl text-[#393939] mb-3">Create A Position </h1>

            <div className="grid grid-cols-4 gap-1 mb-2">
              <input type="text" placeholder="Currency" className="col-span-2 w-full border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Tax Category" className="col-span-2 w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="grid grid-cols-4 gap-1 mb-2">
              <input type="text" placeholder="Currency" className="col-span-4 w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="grid grid-cols-4 gap-1 mb-2">
              <textarea  placeholder="Currency" rows={3} className="col-span-2 w-full border border-gray-300 rounded-md px-4 py-2" ></textarea>
              <textarea placeholder="Tax Category" rows={3} className="col-span-2 w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
            </div>

            <div className="flex gap-2">
              <button className="bg-white hover:bg-[#307D6F] hover:text-white text-[#307D6F] border border-[#307D6F] rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handlePrevious}> Previous</button>
              <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handleNavigation}> Next</button>
            </div>
          </form>

        </div>
      </div>


      <SignInChild backgroundImage="'/team.png'" stepNumber={1} percentage={20} heading="What is Branding ?" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. " />




    </div>



  );
};


export default CreatePosition;
