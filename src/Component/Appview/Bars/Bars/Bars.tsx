// import { Sidebar } from "./Sidebar";
// import { Topbar } from "./Topbar";

import { useState, ReactNode } from "react";
// import { useNavigate } from 'react-router-dom';
import { Sidebar } from "../Sidbar/Sidbar";
// import { Topbar } from "../Bars/Topbar";


export const Bars = ({ children }: { children: ReactNode }) => {
  //@ts-ignore
  const [hideBar, setHideBar] = useState<boolean>(true);
  // const [User, setUser] = useState<any>(() => JSON.parse(localStorage.getItem('User') || 'null'));

  // const navigate = useNavigate();

//   useEffect(() => {
//     if (User === undefined || User === null) {
//       navigate('/');
//     }
//   }, [User]);

  return (
    <div className="h-screen w-screen flex text-[#40444C]">
      <div className="flex flex-col w-full">
        {/* <div className="fixed w-full bg-[#2C2C2C] text-white"><Topbar setHideBar={setHideBar} hideBar={hideBar} /></div> */}
        <div className="pt-8  flex h-full">
          <div className="z-10 text-white bg-[#444343]"><Sidebar hideBar={hideBar} /></div>
          <div className={`w-full`}>{children}</div>
        </div>
      </div>
      {/* // ${ hideBar ? `pl-[30px]` : `pl-[60px]` } */}
    </div>
  );
};
