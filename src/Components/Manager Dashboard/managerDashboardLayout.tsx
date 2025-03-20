import React from 'react';
import ManagerDasboardSideBar from './managerDasboardSideBar';
import Topbar from '../Bars/Topbar/Topbar';

type Props = {
    children?: React.ReactNode;
};

const ManagerDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-gray-200'>       
                <div className='px-16'>
                    <Topbar>
                        <ManagerDasboardSideBar>{children}</ManagerDasboardSideBar>
                    </Topbar>
                </div>      
        </div>
    );
};

export default ManagerDashboardLayout;
