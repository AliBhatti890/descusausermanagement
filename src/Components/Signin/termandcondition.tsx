import React from 'react';
import logo from '../Svg Icons/Group35.png'; // Your logo image
import terms from '../Svg Icons/terms.png'; // Your illustration image
import step1 from "../Svg Icons/step1.png"


    const termandcondition: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Left Side - Form Section */}
            <div className="w-1/2 flex flex-col justify-center items-start p-16 bg-white">
                
                {/* Header with Logo */}
                <header className="flex justify-start w-full mt-28">
                    <img src={logo} alt="Nova HR Logo" className="w-36" />
                </header>

                {/* Consent Form */}
                <div className="w-full max-w-sm text-justify ">
                    <h1 className="text-3xl font-bold mb-1">Show Your Consent</h1>
                    <p className="text-sm ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. Quisque sollicitudin orci ut elit pretium convallis. In nisl libero, dapibus sed nulla vitae, lobortis sagittis nulla. Sed scelerisque diam sit amet elit cursus, volutpat blandit lectus placerat. Nulla ut libero sed est fringilla tincidunt. Etiam posuere eu nulla ac ullamcorper. Donec quis elit metus.
                    </p>
                    <br />
                    <p className="text-base leading-relaxed ">
                        Sed nunc neque, ornare sed felis id, interdum aliquet velit. Suspendisse fringilla justo ut felis faucibus facilisis. Nam aliquam sapien in elit tristique imperdiet. Duis nec condimentum quam. Aliquam sit amet vehicula odio. Quisque eleifend turpis vel urna tempor vulputate nec eu nisl. Suspendisse iaculis diam ac leo suscipit semper. Phasellus urna nulla, facilisis sit amet sapien a, posuere commodo dui. Sed elementum ultrices pellentesque. Nunc porta elit non odio faucibus vestibulum. Donec eget venenatis dolor, ut consequat dolor. Donec lorem turpis, rhoncus a pharetra vitae, blandit eget enim. Nunc id ultrices augue. Pellentesque ut lectus eu ipsum porta dictum ac ut tellus. Donec eget diam non odio accumsan gravida quis in diam.
                    </p>     

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        {/* <button className="bg-[#F3632D] text-white rounded-md px-4 py-2 text-sm font-medium flex-1">
                            Add Another
                        </button> */}
                        <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 text-sm font-medium flex-1">
                            Accept the terms and conditions
                        </button>
                    </div>

                    {/* Info text */}
                    <p className="text-sm text-gray-500 mt-4">
                        Don't get upset! If you forgot anything, you can edit it later.
                    </p>
                </div>
            </div>

            {/* Right Side - Content Section */}
            <div className="relative w-1/2 bg-[#307D6F] flex flex-col justify-center p-8">
                {/* Step Progress */}
                <div className="text-white mt-16 w-10/12">
                    {/* <h2 className="text-xl font-bold">Step 01</h2> */}
                    {/* <div className="w-3/4 h-2 bg-white rounded-full mt-2 relative"> */}
                        {/* <div className="w-1/6 h-full bg-orange-400 rounded-full"></div> */}
                        <img src={step1} />
                    {/* </div> */}
                    <br />
                    <h3 className="absolute top-20 text-white text-2xl font-bold">What is Branding?</h3>

                    <p className="mt-6 text-sm leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque...
                    </p>
                </div>

                {/* Illustration */}
                <img src={terms} alt="HR Illustration" className="w-[600px] h-auto mt-4" />

                {/* Help Button */}
                <button className="absolute bottom-12 right-16 bg-orange-500 text-white rounded-full px-6 py-2">
                    I am always here to help you!
                </button>

                {/* Rotated Text */}
                <div className="fixed w-[991px] h-[999px] top-[32%] left-[100%] transform -translate-x-full -translate-y-1/2 rotate-90 opacity-60 font-extrabold text-[41px] leading-[65px] tracking-[-0.05em] text-white text-right">
                    MAKING HUMAN RESOURCES SIMPLE!!
                </div>
            </div>
        </div>
    );
}


export default termandcondition;
