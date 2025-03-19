import React from "react";
import logo from '../Svg Icons/Group35.png';
import SignInChild from "../Child Component/SignInChild";
import { useNavigate } from "react-router-dom";

const Team: React.FC = () => {

  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/organizationDetails');
  };



  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative bg-gray-50 p-8">
        <div className="absolute top-14 left-14">
          <img src={logo} alt="Nova HR Logo" className="w-48" />
        </div>
        <div className="grid w-full  justify-start items-center h-full px-20">
          <form className="w-full">
            <h1 className="font-bold text-2xl text-[#393939] mb-1">Create your team!!</h1>
            <label className="block  text-[15px] mb-1"> Invite & assign a role to users</label>

            <div className="flex  items-center border border-gray-300 rounded-md px-4 py-2 mb-4">
              <input
                type="text"
                placeholder="1. Enter email address"
                className="w-72 h-full border-none outline-none" />

              <select className="ml-4 border-none outline-none text-gray-500">
                <option>Role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 mb-4">
              <input
                type="text"
                placeholder="2. Enter email address"
                className="w-full border-none outline-none"
              />
              <select className="ml-4 border-none outline-none text-gray-500">
                <option>Role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>
            <div className="flex justify-center items-center mb-2 border-dashed border-2 text-gray-500 rounded">
              <button className="text-4xl text-gray-400 ">+</button>
            </div>
            <div className="flex gap-2">
              <button className="bg-white hover:bg-[#307D6F] hover:text-white text-[#307D6F] border border-[#307D6F] rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handlePrevious}
              > Previous</button>
              <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
              // onClick={handleNavigation}
              > Next</button>
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>


      <SignInChild backgroundImage="'/team.png'" stepNumber={3} percentage={60} heading="Create your team with specified access" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet." />





    </div>
  );
};

export default Team;


