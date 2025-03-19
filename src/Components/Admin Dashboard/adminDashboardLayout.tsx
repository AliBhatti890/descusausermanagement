import React from 'react';
import AdminSecondTobarBar from './adminSecondTobarBar';
import AdminDasboardSideBar from './adminDasboardSideBar';

type Props = {
    children?: React.ReactNode;
};

const AdminDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-gray-200'>
           
                <div className='px-16'>
                    <AdminSecondTobarBar>
                        <AdminDasboardSideBar>{children}</AdminDasboardSideBar>
                    </AdminSecondTobarBar>
                </div>
        
        </div>
    );
};

export default AdminDashboardLayout;
