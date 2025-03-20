import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL, EndPoints, getUrl } from '../../helpers/constants';
import WYSIWYGEditor from '../Child Component/Editor';
import AdminDashboardLayout from './adminDashboardLayout';
import { Users } from '../Types/Users';



const AdminAddewuser: React.FC = () => {
    const [organization, setOrganization] = useState<Partial<Users>>({});

    const usertType = [
        { label: 'Admin', value: 'Admin' },
        { label: 'Manager', value: 'Manager' },
        { label: 'User', value: 'User' },
       
    ];
    const organizationInputs = [
        { name: 'Full Name', key: 'first_name', type: 'text' },
        { name: 'Department', key: 'department', type: 'text' },
        { name: 'contact', key: 'contact', type: 'text' },
        { name: 'email', key: 'email', type: 'text' },
        { name: 'password', key: 'password', type: 'text' },   
        {
            name: 'User Type',
            key: 'user_type',
            type: 'dropdown',
            options: usertType
        },
    
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');


    useEffect(() => {
        console.log(id, 'id');
        console.log(mode, 'id');
        
        const fetchPositions = async () => {
      
console.log(id, 'id');


            if (id === null) return;
            
            try {
                const response = await axios.get(
                    `${getUrl(API_URL)}${EndPoints.getUserById}?_id=${id}`
                );
                console.log(response.data.data, 'response');
                
                response.data &&
                    setOrganization({
                        first_name: response.data.data.first_name,
                        department: response.data.data.department,
                        contact: response.data.data.contact,
                        email: response.data.data.email,
               password: response.data.data.password,
                        user_type: response.data.data.user_type,

                    } as any);
            } catch (err) {}
        };
        fetchPositions();
    }, [id]);

    console.log(organization);

    const handleChange = (key: string, value: string) => {
        setOrganization((prev : any) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
            Swal.fire({
                title: 'Logging...',
                text: 'Please wait.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            if (mode === 'Edit') {
                organization._id = id || 'null';
              const response =   await axios.put(
                    `${getUrl(API_URL)}${EndPoints.updateUser}`,
                    organization
                );

                console.log(response, 'response');
              
                
            } else {
              
                await axios.post(
                    `${getUrl(API_URL)}${EndPoints.createUser}`,
                    organization
                );
            }

            Swal.fire({
                title: 'User saved successfully',
                icon: 'success',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Admin/UserList');
                }
            });
        } catch (error: any) {
            Swal.close();
            Swal.fire({
                title: 'An error occurred',
                text:
                    error.response?.data?.message || 'Please try again later.',
                icon: 'error',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <AdminDashboardLayout>
            <div className=' border rounded-lg shadow-inner h-dvh  p-8 relative bg-white'>
                <div className='grid grid-cols-2 w-full '>
                    <div className='grid gap-3'>
                        <div className='flex justify-between  w-full '>
                            <h2 className='text-lg font-bricolage font-bold'>
                                {mode} User
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} className='grid gap-3'>
                            {organizationInputs.map((input) => (
                                <div
                                    key={input.key}
                                    className='flex items-center gap-7 whitespace-nowrap'
                                >
                                    <label
                                        htmlFor={input.key}
                                        className='text-gray-700 w-1/4 text-left text-[15px] font-semibold'
                                    >
                                        {input.name === 'IsActive'
                                            ? 'Active'
                                            : input.name}
                                    </label>

                                    {input.type === 'dropdown' ? (
                                        <select
                                            id={input.key}
                                            name={input.key}
                                            // value={
                                            //     (organization[
                                            //         input.key as keyof organizations
                                            //     ] as any) || ''
                                            // }
                                            onChange={(e) => {
                                                handleChange(
                                                    input.key,
                                                    e.target.value
                                                );
                                            }}
                                            className={`border border-gray-300 p-2 rounded-lg h-10 w-full text-[15px] text-[#7D7D7D] ${
                                                mode === 'View'
                                                    ? 'cursor-not-allowed bg-gray-100'
                                                    : ''
                                            }`}
                                            disabled={mode === 'View'}
                                        >
                                            <option value='' disabled>
                                                Select Usert Type
                                            </option>
                                            {input.options?.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : input.type === 'textarea' ? (
                                        <WYSIWYGEditor
                                                    key={input.key}
                                                    id={input.key}
                                                    name={input.key}
                                                    placeholder={`Enter ${input.name}...`}
                                                    // value={
                                                    //     (organization[
                                                    //         input.key as keyof organizations
                                                    //     ] as any) || ''
                                                    // }
                                                    onChange={(value: string) => handleChange(input.key, value)} value={''}                                        />
                                    ) : (
                                        <input
                                            id={input.key}
                                            name={input.key}
                                            type={input.type}
                                            placeholder={` ${input.name}`}
                                            value={
                                                (organization[input.key as keyof Partial<Users>] || '')
                                            }
                                            onChange={(e) =>
                                                handleChange(
                                                    input.key,
                                                    e.target.value
                                                )
                                            }
                                            className={`border border-gray-300 p-2 rounded-lg h-10 w-full text-[15px] text-[#7D7D7D] ${
                                                mode === 'View'
                                                    ? 'cursor-not-allowed bg-gray-100'
                                                    : ''
                                            }`}
                                            readOnly={mode === 'View'}
                                        />
                                    )}
                                </div>
                            ))}
                            <div className='flex gap-3'>
                                <button
                                    type='button'
                                    className='bg-#white text-[#1F7973] border-[#1F7973] border px-4 py-2 rounded-lg w-full hover:bg-[#1F7973] hover:text-white'
                                    onClick={() => navigate('/Admin/UserList')}
                                >
                                    Back
                                </button>
                                <button
                                    type='submit'
                                    className='bg-[#1F7973] text-white px-4 py-2 rounded-lg w-full'
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
};
export default AdminAddewuser;
