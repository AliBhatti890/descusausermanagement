import React from 'react';
import ManagerSecondTobarBar from './managerSecondTobarBar';
import ManagerDasboardSideBar from './managerDasboardSideBar';

type Props = {
    children?: React.ReactNode;
};

const ManagerDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-gray-200'>       
                <div className='px-16'>
                    <ManagerSecondTobarBar>
                        <ManagerDasboardSideBar>{children}</ManagerDasboardSideBar>
                    </ManagerSecondTobarBar>
                </div>      
        </div>
    );
};

export default ManagerDashboardLayout;
