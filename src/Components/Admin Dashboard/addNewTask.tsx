import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL, EndPoints, getUrl } from '../../helpers/constants';
import { organizations } from '../Types/Organization';
import WYSIWYGEditor from '../Child Component/Editor';
import AdminDashboardLayout from './adminDashboardLayout';

const AddNewTask: React.FC = () => {
    const [organization, setOrganization] = useState<organizations>({} as any);

    const status = [
        { label: 'Pending', value: '1' },
        { label: 'Contine', value: '2' },
        { label: 'Drop', value: '3' },
        { label: 'Complete', value: '4' },
        ];
    const organizationInputs = [
        { name: 'Task Subject', key: 'task_subject', type: 'text' },
        { name: 'Task Detail', key: 'task_detail', type: 'textarea' },
        {
            name: 'Assginee To',
            key: 'assignee_to',
            type: 'dropdown',
            options: status
        },
        {
            name: 'Status',
            key: 'fiscalYearEnd',
            type: 'dropdown',
            options: status
        },
       
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    const user = useSelector((state: { auth: AuthState }) => state.auth.user);

    useEffect(() => {
        const fetchPositions = async () => {
            if (id === null) return;
            try {
                const response = await axios.get(
                    `${getUrl(API_URL)}${EndPoints.getOrganizationById}/${id}`
                );
                response.data &&
                    setOrganization({
                        organizationName: response.data.organizationName,
                        natureOfWork: response.data.natureOfWork,
                        fiscalYearStart: response.data.fiscalYearStart,
                        fiscalYearEnd: response.data.fiscalYearEnd,
                        generalPolicy: response.data.generalPolicy,
                        isActive: response.data.isActive
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
        if (organization.organizationName.length > 20) {
            return alert('Organization Name should be less than 20 characters');
        }
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
                organization.id = id || 'null';
                organization.updatedBy = user?.userName as any;
                await axios.put(
                    `${getUrl(API_URL)}${EndPoints.updateOrganization}`,
                    organization
                );
            } else {
                organization.createdBy = user?.userName as any;
                await axios.post(
                    `${getUrl(API_URL)}${EndPoints.createOrganization}`,
                    organization
                );
            }
            Swal.fire({
                title: 'Organization saved successfully',
                icon: 'success',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Organizations');
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
                                {mode} Task
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
                                            value={
                                                (organization[
                                                    input.key as keyof organizations
                                                ] as any) || ''
                                            }
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
                                                Select Status
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
                                    ) :  input.type === 'textarea' ? (
                                        <WYSIWYGEditor
                                            key={input.key}
                                            id={input.key}
                                            name={input.key}
                                            placeholder={`Enter ${input.name}...`}
                                            value={
                                                (organization[
                                                    input.key as keyof organizations
                                                ] as any) || ''
                                            }
                                            onChange={(value: string) =>
                                                handleChange(input.key, value)
                                            }
                                        />
                                    ) : (
                                        <input
                                            id={input.key}
                                            name={input.key}
                                            type={input.type}
                                            placeholder={` ${input.name}`}
                                            value={
                                                (organization[
                                                    input.key as keyof organizations
                                                ] as any) || ''
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
                                    onClick={() => navigate('/Admin/Dashboard')}
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
export default AddNewTask;
