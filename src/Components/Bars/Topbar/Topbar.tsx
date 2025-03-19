import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// Type for Topbar props
interface TopbarProps {
    setHideBar: React.Dispatch<React.SetStateAction<boolean>>;
    hideBar: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({ }) => {
 
 

    useEffect(() => {
        // Any other effects if needed
    }, []);

   

    // @ts-ignore
    const topIcons = [
        { name: "User", icon: () => <EmployeeInfo /> },
        { name: "Bell", icon: () => <div></div> },
        { name: "Message", icon: () => <div></div> },
        { name: "9SocialIcon", icon: () => <div></div> },
    ];

    // const handleMessangerLogin = () => {
    //     if (User?.employeeinfo[0]?.employeeid) {
    //         window.open(`http://192.168.10.50:8080/${encodeURIComponent(JSON.stringify(User?.token))}`, '_blank');
    //     }
    // }

    // const handleSocialLogin = () => {
    //     if (User?.employeeinfo[0]?.employeeid) {
    //         window.open(`http://192.168.10.50:3001/Home/${User?.token}`, '_blank');
    //     }
    // }

    return (
            <div className="w-full items-center justify-center py-1">
                <div className="flex-row flex items-center justify-between px-5 gap-5">
                 <div className='w-[200px]'>LOGO</div>
                 <div className=' w-full flex justify-between items-center'>
                    <div>Dashboard</div>
                    <div></div>
                 </div>
            </div>
        </div>
    )
}

const EmployeeInfo: React.FC = () => {

    // @ts-ignore
    const [User, setUser] = useState<any>(JSON.parse(localStorage.getItem("User") || "{}"));
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const handleLogout = () => { navigate('/'); localStorage.clear(); }
    const handleMyProfile = () => { navigate(`/MyProfile/${User?.employeeinfo[0]?.employeeid}`) }
    const handleMySetting = () => { navigate(`/Settings`) }

    const userOptions = [
        { name: "Logout", link: "/", method: handleLogout },
        { name: "My Profile", link: "/", method: handleMyProfile },
        { name: "Settings", link: "/", method: handleMySetting },
    ];

    return (
        <div onClick={() => setShowOptions(!showOptions)} className=" flex items-center gap-2 px-1 cursor-pointer ">
            {/* <div className="text-sm font-semibold 2xl:text-xl">{User?.employeeinfo[0]?.name}</div> */}
            {false ? (
                <img className="h-10 w-10 2xl:w-[60px] 2xl:h-[50px] object-cover rounded-full" src={User.employeeinfo[0].image} alt="User Avatar" />
            ) : (
                <div className="h-8 w-8 2xl:w-[60px] 2xl:h-[50px] object-cover rounded-full ">
                    User Image
                </div>
            )}
            {showOptions &&  (
                <div className="absolute top-[40px] 2xl:top-[60px] right-1 z-50 bg-white flex flex-col gap-1 text-sm py-1 rounded-lg border shadow-xl">
                    {userOptions.map(u => (
                        <div key={u.name} onClick={u.method} className="hover:bg-gray-200 whitespace-nowrap px-10 2xl:text-xl">{u.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
}
