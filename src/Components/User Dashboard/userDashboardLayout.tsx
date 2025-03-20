import React from 'react';
import UserDasboardSideBar from './userDasboardSideBar';
import Topbar from '../Bars/Topbar/Topbar';

type Props = {
    children?: React.ReactNode;
};

const UserDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-gray-200'>
            
                <div className='px-16'>
                    <Topbar>
                        <UserDasboardSideBar>{children}</UserDasboardSideBar>
                    </Topbar>
                </div>
        </div>
    );
};

export default UserDashboardLayout;
