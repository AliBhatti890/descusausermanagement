import React from 'react';
import logo from '../Svg Icons/Group35.png';
import { useNavigate } from 'react-router-dom';
import SignInChild from '../Child Component/SignInChild';

const Assignbudget: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/Positioncreated');
  };
  const handlePrevious = () => {
    navigate('/CreatePosition');
  };


  const inputFields = [
    { name: 'Basic Salary per month',  type: 'text' },
    { name: 'House rent per month',  type: 'text' },
    { name: 'Medical allowance per month',  type: 'text' },
    { name: 'Gross salary per month',  type: 'text' },
    { name: 'Select Benefit category',  type: 'text' },
    { name: 'Total Budget of the position', type: 'text' },
  ];

  return (

    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative bg-gray-50 p-8">
        <div className="absolute top-14 left-14">
          <img src={logo} alt="Nova HR Logo" className="w-48" />
        </div>
        <div className="grid  justify-s items-center h-full w-full">
          <form className="w-full p-6 ">
            <h1 className="font-bold text-2xl text-[#393939] mb-3">Assign Budget</h1>

            {inputFields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.name}
          className="w-full flex items-center border border-gray-300 rounded-md px-4 py-2 mb-1"
          //value={formData[field.name]} // Bind to the corresponding value in formData
         // onChange={handleChange} // Call handleChange to update state
        />
      ))}
            <div className="flex gap-2">
              <button className="bg-white hover:bg-[#307D6F] hover:text-white text-[#307D6F] border border-[#307D6F] rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handlePrevious}> Previous</button>
              <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handleNavigation}> Next</button>
            </div>
          </form>

        </div>
      </div>
      <SignInChild backgroundImage="'/team.png'" stepNumber={2} percentage={40} heading="What is Branding ?" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. " />
    </div>
  );
};
export default Assignbudget;
