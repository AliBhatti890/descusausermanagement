import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { clearCredentials } from '../../../Component/Appview/Store/ReduxToolkit/ReduxToolkit/AuthSlice/AuthSlice';
import { persistor } from '../../../Component/Appview/Store/ReduxToolkit/ReduxToolkit/Store/Store';
import NoUserLogout from '../../../Component/Appview/Store/Log/NoUserLogout';

type Props = {
  children?: React.ReactNode
};


const Topbar: React.FC<Props> = ({ children }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state: { auth: AuthState }) => state.auth.user);


  const handleLogout = () => {
      Swal.fire({
          title: 'Success!',
          text: 'Log out successful!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
      });

      dispatch(clearCredentials());
      localStorage.clear();
      sessionStorage.clear();
      persistor.purge();
      setTimeout(() => window.open('/', '_self'), 1000);
  };

  return (

   <div className=''>
      <NoUserLogout />
    <div className="w-auto my-10">
      <div className="flex items-center justify-between bg-white rounded-lg w-auto shadow-lg h-20 px-5">
        <div className="w-full flex items-center gap-2">
          <h1 className="text-2xl font-medium">{user?.user_type} Dashboard</h1>
        </div>
        
        {/* Username with dropdown */}
        <div className="relative">
          <button
            className="text-sm font-semibold 2xl:text-xl p-3 rounded-full text-white bg-[#1F7973] whitespace-nowrap"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {user?.name}
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg overflow-hidden">
              <button
                className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    {children}
   </div>


  )
}

export default Topbar

