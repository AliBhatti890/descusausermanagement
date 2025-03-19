import React from 'react';
import logo from '../Svg Icons/Group35.png'; // Your logo image
import { useNavigate } from 'react-router-dom';
import SignInChild from '../Child Component/SignInChild';
// import SignInChild from '../Child Component/SignInChild';



    const Positioncreated: React.FC = () => {

      const navigate = useNavigate();
      const handleNavigation = () => {
          navigate('/Consent');    
      };

     
    

    return (

      <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative bg-gray-50 p-8">
        <div className="absolute top-14 left-14">
          <img src={logo} alt="Nova HR Logo" className="w-48" />
        </div>
        <div className="grid  justify-center items-end h-full w-full">
        <form className="w-full   ">
          <h1 className="font-bold text-xl text-[#393939] mb-3">Position Created!!</h1>
          <label className="block  text-[12px] mb-1">You can create , other positions from your dashboard if you want to add now simply click on add</label>


          <div className="grid grid-cols-4 gap-1 mb-2 w-full">
          
            <button className="w-full bg-[#F3632D] text-[#FFFFFF] rounded-md col-span-1 px-4 py-2 mt-4 text-[12px]">Add Folder</button>
            <button className="w-full bg-[#307D6F] text-[#FFFFFF] rounded-md col-span-3 px-4 py-2 mt-4 text-[12px]" onClick={handleNavigation}>Next</button>

          </div>



          <div>

        


          </div>
        </form>
<div className='flex justify-center '>
<p className="mt-36 text-[12px] text-[#393939] text-center">
          Dont get upset!! if you forgot anything you can edit it later
                    </p>
</div>
      


        </div>
        
      </div>
      <SignInChild backgroundImage="'/team.png'" stepNumber={3} percentage={60} heading="What is Branding ?" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. " />
    </div>
      
    );
};

export default Positioncreated;
