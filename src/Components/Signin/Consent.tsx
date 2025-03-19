import React from 'react';
import logo from '../Svg Icons/Group35.png'; // Your logo image
//import SignInChild from '../Child Component/SignInChild';
import { useNavigate } from 'react-router-dom';
import SignInChild from '../Child Component/SignInChild';



    const Consent: React.FC = () => {

      const navigate = useNavigate();
      const handleNavigation = () => {
        navigate('/Welcome');
      }
      
      const handleNavigationBack = () => {
        navigate('/Positioncreated');
      }

    return (

      <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative bg-gray-50 p-8">
        <div className="absolute top-14 left-14">
          <img src={logo} alt="Nova HR Logo" className="w-48" />
        </div>
        <div className="flex  justify-center items-center h-full w-full">
        <form className="w-full  ">
          <h1 className="font-bold text-xl text-[#393939] mb-3">Show Your Consent</h1>
          <label className="block  text-[12px] mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. Quisque sollicitudin orci ut elit pretium convallis. In nisl libero, dapibus sed nulla vitae, lobortis sagittis nulla. Sed scelerisque diam sit amet elit cursus, volutpat blandit lectus placerat. Nulla ut libero sed est fringilla tincidunt. Etiam posuere eu nulla ac ullamcorper. Donec quis elit metus.
          Sed nunc neque, ornare sed felis id, interdum aliquet velit. Suspendisse fringilla justo ut felis faucibus facilisis. Nam aliquam sapien in elit tristique imperdiet. Duis nec condimentum quam. Aliquam sit amet vehicula odio. Quisque eleifend turpis vel urna tempor vulputate nec eu nisl. Suspendisse iaculis diam ac leo suscipit semper. Phasellus urna nulla, facilisis sit amet sapien a, posuere commodo dui. Sed elementum ultrices pellentesque. Nunc porta elit non odio faucibus vestibulum. Donec eget venenatis dolor, ut consequat dolor. Donec lorem turpis, rhoncus a pharetra vitae, blandit eget enim. Nunc id ultrices augue. Pellentesque ut lectus eu ipsum porta dictum ac ut tellus. Donec eget diam non odio accumsan gravida quis in diam.
            </label>
            <div className="flex gap-2">
              <button className="bg-white hover:bg-[#307D6F] hover:text-white text-[#307D6F] border border-[#307D6F] rounded-md px-4 py-2 w-full  text-sm font-medium"
                 onClick={handleNavigationBack}  > Previous</button>
              <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
              onClick={handleNavigation}    > Next</button>
            </div>
        </form>


      


        </div>
        
      </div>
      <SignInChild backgroundImage="'/terms.png'" stepNumber={4} percentage={80} heading="Accept the consent" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. " />
    </div>
      
    );
};

export default Consent;
