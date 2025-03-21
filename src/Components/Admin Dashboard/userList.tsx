import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL, EndPoints, getUrl } from '../../helpers/constants';
import Loader from '../Loader/Loader';
import AdminDashboardLayout from './adminDashboardLayout';
import { Users } from '../Types/Users';

const AdminUserList: React.FC = () => {
    const navigate = useNavigate();
    const [Organization, setOrganization] = useState<Users[]>([]);
    const [loading, setLoading] = useState(true);
   
    const input = [
        { name: 'Sr.', key: '_id' },
        { name: 'User Name', key: 'first_name' },
        { name: 'Contact', key: 'contact' },
    ];

    useEffect(() => {
        const fetchOrganization = async () => {
            try {
                const response = await axios.get(
                    getUrl(API_URL) +
                    EndPoints.getAllUser 
                    
                );
                setOrganization(response.data.body.data);
                console.log(response.data.body.data, 'response');
            
                // setTotalPages(response.data.pagination.totalItems ?? 10);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchOrganization();
    }, []);

    const handleDelete = async (id: string) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton:
                    'bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mx-2 w-40',
                cancelButton:
                    'bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mx-2 w-40'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await axios.delete(`${getUrl(API_URL)}${EndPoints.deleteUser}/?_id=${id}`);
                        swalWithBootstrapButtons
                            .fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success'
                            })
                            .then(() => {
                                window.location.reload();
                            });
                    } catch (error) {
                        swalWithBootstrapButtons.fire({
                            title: 'Error',
                            text: 'There was a problem deleting the file. Please try again.',
                            icon: 'error'
                        });
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire({
                        title: 'Cancelled',
                        text: 'Your file is safe',
                        icon: 'error'
                    });
                }
            });
    };


    console.log(Organization, 'Organization');
    
    if (loading)
        return (
            <div>
                <Loader />
            </div>
        );
    return (
        <AdminDashboardLayout>
            <div className='border rounded-lg shadow-inner  space-y-5  p-8 relative bg-white '>
                <div className='flex justify-between items-start w-full'>
                    <div className='text-xl font-bold'>User List</div>
                    <div>
                        {/* <button type="button" className='bg-[#1F7973] text-white rounded-lg px-10 pt-2  pb-3' onClick={handleForgetPasswordClick}> */}
                        <button
                            type='button'
                            className='bg-[#1F7973] text-white rounded-lg px-10 pt-2  pb-3'
                            onClick={() =>
                                navigate(
                                    '/Admin/AddNewUser?mode=Add'
                                )
                            }
                        >
                            + Add New
                        </button>
                    </div>
                </div>
                <div className=''>
                    <table className=' w-full   border-2  '>
                        <thead>
                            <tr className='rounded-t-xl bg-[#1F7973]  text-[#FFFFFF]'>
                                {input.map((item) => (
                                    <th className='border-b border-gray-400 px-4 py-2 text-start'>
                                        {item.name}
                                    </th>
                                ))}
                                <th className='border-b border-gray-400 px-4 py-2 '>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Organization.map((Organization: any) => (
                                <tr
                                    key={Organization._id}

                                
                                    className='border-b border-gray-400'
                                    
                                    
                                >
                                    {input.map((item) => (
                                        <td
                                            key={item.key}
                                            className='px-4 py-2'
                                            onClick={() =>  console.log(Organization._id, 'Organization') }
                                            
                                        >
                                            {Organization[item.key] as string}
                                        </td>
                                    ))}
                                    <td className=' border-gray-400  py-2  flex justify-center items-center gap-3'>
                                        <div className='bg-[#1F7973] rounded-lg px-2 py-2   flex  justify-center  items-center cursor-pointer'>
                                            <FaEye
                                                color='white'
                                                size={20}
                                                onClick={() =>
                                                    navigate(
                                                        `/Admin/AddNewUser/?id=${Organization._id}&mode=View`
                                                    )
                                                }
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type='button'
                                                className='bg-[#F3632D] text-white rounded-lg px-8 pt-1  pb-2 '
                                                onClick={() =>
                                                    navigate(
                                                        `/Admin/AddNewUser/?id=${Organization._id}&mode=Edit`
                                                  
                                                     
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                type='button'
                                                className='bg-[#E14640] text-white rounded-lg px-8 pt-1  pb-2 '
                                                onClick={() =>
                                                    handleDelete(
                                                        Organization._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               
            </div>
        </AdminDashboardLayout>
    );
};
export default AdminUserList;
