import React from 'react';
import UserSecondTobarBar from './userSecondTobarBar';
import UserDasboardSideBar from './userDasboardSideBar';

type Props = {
    children?: React.ReactNode;
};

const UserDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-gray-200'>
            
                <div className='px-16'>
                    <UserSecondTobarBar>
                        <UserDasboardSideBar>{children}</UserDasboardSideBar>
                    </UserSecondTobarBar>
                </div>
        </div>
    );
};

export default UserDashboardLayout;
