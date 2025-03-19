import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    children?: React.ReactNode;
};

const UserDasboardSideBar: React.FC<Props> = ({ children }) => {
    const input = [
        { name: 'Task', key: '/Admin/Dashboard' },    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='flex flex-row mt-2 w-auto h-[75vh] '>
                <div className='bg-[#1F7973] basis-1/6 rounded-xl w-fit h-full overflow-hidden px-4'>
                    <table className='text-start text-white w-full'>
                        <tbody>
                            {input.map((item, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td
                                            className=' w-full border-b border-gray-400 px-4 py-2 grid cursor-pointer'
                                            onClick={() => navigate(item.key)}
                                        >
                                            {item.name}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='flex-auto bg-[#edebeb] w-full rounded-xl  ml-2 overflow-auto'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default UserDasboardSideBar;
