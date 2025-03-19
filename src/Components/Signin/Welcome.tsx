import logo from '../Svg Icons/Group35.png'; // Your logo image
import React from 'react';

    const Welcome: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center relative">
    {/* Logo Section */}
    <img src={logo} alt="Nova HR Logo" className="w-40 mb-8" />

    {/* Welcome Text */}
    <h1 className="text-3xl font-bold text-gray-800 mb-2">
        We welcome you <span className="bg-gradient-to-r from-[#F25C2C] via-[#FCB23F] to-[#1F7973] bg-clip-text text-transparent">TechNova </span> Global
    </h1>
    <p className="text-xl text-gray-600 mb-6">Please hold, magic is happening!!</p>

    {/* Loading Spinner Dots */}
    <div className="flex gap-2 justify-center mb-8">
        <div className="w-5 h-5 rounded-full animate-pulse bg-red-500"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-blue-500"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-green-500"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-yellow-500"></div>
    </div>

    {/* Footer Text */}
    <p className="text-sm text-gray-500 absolute bottom-4 w-full text-center">Once Done!! It will be redirected to your dashboard</p>
</div>

    );
};

export default Welcome;

