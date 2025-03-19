import React, { useState } from 'react'
import logo from '../Svg Icons/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { Logins } from '../Types/Login';
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL, EndPoints, getUrl } from '../../helpers/constants';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState<Logins>({} as any);
    const inputFields = [

        // { name: "First Name", key: "FirstName", type: "text" },
        // { name: "Last Name", key: "LastName", type: "text" },
        { name: "User Name", key: "username", type: "text", value: "", canShow: true },
        { name: "User Category", key: "UserType", type: "text", value: "Admin", canShow: false },
        { name: "Phone Number", key: "phoneNumber", type: "tel", value: "", canShow: true },
        { name: "Email", key: "email", type: "email", value: "", canShow: true },
        { name: "Password", type: "Password", key: "password", value: "", canShow: true },
        { name: "Confirm Password", key: "confirmPassword", type: "password", value: "", canShow: true },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setRegister((prevState) => ({
                ...prevState,
                [name]: checked ? "Y" : "N",
            }));
        } else {
            setRegister((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (register.password !== register.confirmPassword) {
            Swal.fire({
                title: "Passwords do not match",
                text: "Please ensure both password fields match.",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return;
        }
        delete register.confirmPassword;
        Swal.fire({
            title: "creating account...",
            text: "Please wait.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        try {
            await axios.post(`${getUrl(API_URL)}${EndPoints.register}`, register);
            Swal.fire({
                title: "Account created successfully",
                icon: "success",
                confirmButtonText: "Ok",
            }).then(() => {
                navigate('/');

            });
        } catch (error) {
            Swal.fire({
                title: "An error occurred",
                text: "Unable to create account. Please try again.",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className='flex justify-center'>
                                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                    <img src={logo} className="w-72" alt="Logo" />
                                </a>
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    {inputFields.slice(0, 9).map((field: any) => (
                                        <div key={field.key} className="flex flex-col">
                                            <label htmlFor={field.key} className="text-sm font-medium text-gray-900 dark:text-white">
                                                {field.name}
                                            </label>
                                            <input type={field.type} name={field.key} id={field.key} placeholder={field.name}
                                                key={field.key} value={(register[field.key as keyof Logins] as any) || ""}
                                                onChange={handleChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="font-light text-gray-500 dark:text-gray-300">
                                            I accept the{" "}
                                            <a
                                                className="font-medium text-[#307D6F] hover:underline dark:text-primary-500"
                                                href="#">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#307D6F] hover:bg-[#2c8a79]   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <a className="font-medium text-[#307D6F] hover:underline dark:text-primary-500" href='#' onClick={() => navigate("/")}> Login here </a>
                                </p>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp;
