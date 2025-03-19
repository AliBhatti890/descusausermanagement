import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL, EndPoints, getUrl } from '../../helpers/constants';
import TablePagination from '../Child Component/TablePagination';
import Loader from '../Loader/Loader';
import { organizations } from '../Types/Organization';
import UserDashboardLayout from './userDashboardLayout';
const UserDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [Organization, setOrganization] = useState<organizations[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(10);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const input = [
        { name: 'Sr.', key: 'srNo' },
        { name: 'Organization Name', key: 'organizationName' },
        { name: 'No. of Employee', key: 'employeeCount' },
    ];

    useEffect(() => {
        const fetchOrganization = async () => {
            try {
                const response = await axios.get(
                    getUrl(API_URL) +
                    EndPoints.getAllOrganizations +
                    `?page=${currentPage}&pageSize=${10}`
                );
                setOrganization(response.data.data);
                setTotalPages(response.data.pagination.totalItems ?? 10);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchOrganization();
    }, [currentPage, totalPages]);

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
                        await axios.delete(
                            `${getUrl(API_URL)}${EndPoints.deleteOrganization
                            }/${id}`
                        );
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
    if (loading)
        return (
            <div>
                <Loader />
            </div>
        );
    return (
        <UserDashboardLayout>
            <div className='border rounded-lg shadow-inner  space-y-5  p-8 relative bg-white '>
                <div className='flex justify-between items-start w-full'>
                    <div className='text-xl font-bold'>Task List</div>
                    <div>
                        {/* <button type="button" className='bg-[#1F7973] text-white rounded-lg px-10 pt-2  pb-3' onClick={handleForgetPasswordClick}> */}
                        <button
                            type='button'
                            className='bg-[#1F7973] text-white rounded-lg px-10 pt-2  pb-3'
                            onClick={() =>
                                navigate(
                                    '/User/AddNewTask?mode=Add'
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
                                    key={Organization.id}
                                    className='border-b border-gray-400'
                                >
                                    {input.map((item) => (
                                        <td
                                            key={item.key}
                                            className='px-4 py-2'
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
                                                        `/User/AddNewTask/?id=${Organization.id}&mode=View`
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
                                                        `/User/AddNewTask/?id=${Organization.id}&mode=Edit`
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
                                                        Organization.id
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
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </UserDashboardLayout>
    );
};
export default UserDashboard;
