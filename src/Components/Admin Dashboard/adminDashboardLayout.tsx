import React from 'react';
import AdminDasboardSideBar from './adminDasboardSideBar';
import Topbar from '../Bars/Topbar/Topbar';

type Props = {
    children?: React.ReactNode;
};

const AdminDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-gray-200'>
           
                <div className='px-16'>
                    <Topbar>
                        <AdminDasboardSideBar>{children}</AdminDasboardSideBar>
                    </Topbar>
                </div>
        
        </div>
    );
};

export default AdminDashboardLayout;
