import React, { useState } from "react";
import logo from "../../img/descusa-logo.png";
import { Logins } from "../Types/Login";
import Swal from "sweetalert2";
import axios from "axios";
import { API_URL, EndPoints, getUrl } from "../../helpers/constants";
import { setCredentials } from "../../Component/Appview/Store/ReduxToolkit/ReduxToolkit/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";

const SignIn: React.FC = () => {
  const [login, setLogin] = useState<Logins>({} as any);
  const dispatch = useDispatch();

  const inputFields = [
    { name: "email", key: "email", type: "email" },
    { name: "password", key: "password", type: "password" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    Swal.fire({
      title: "Logging...",
      text: "Please wait.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    try {
      console.log(login);
      const Response = await axios.post(
        `${getUrl(API_URL)}${EndPoints.authenticate}`,
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
     
  
      dispatch(
        setCredentials({
          user: Response.data.data,
          token: Response.data.token,
        })
      );
  
      Swal.fire({
        title: "Logged in successfully",
        icon: "success",
        showConfirmButton: false,
      });
  
      console.log(Response);
  
      // Redirect based on user role
      const role = Response.data.data.user_type;
      let redirectUrl = "/";
      
      switch (role) {
        case "Admin":
          redirectUrl = "/Admin/Dashboard";
          break;
        case "Manager":
          redirectUrl = "/Manager/Dashboard";
          break;
        case "User":
          redirectUrl = "/User/Dashboard"; // Fixed redirection
          break;
        default:
          console.warn("Unknown role:", role);
          Swal.fire({
            title: "Error",
            text: "Invalid user role.",
            icon: "error",
          });
          return;
      }
  
      setTimeout(() => window.open(redirectUrl, "_self"), 1000);
  
    } catch (error: any) {
      console.error("Login error:", error.response || error.message);
      Swal.fire({
        title: "An error occurred",
        text: error.response?.data?.message || "Unable to log in. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center ">
                <a
                  href="#"
                  className="flex items-center  text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  <img src={logo} className="w-32" alt="Logo" />
                </a>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {inputFields.map((field) => (
                  <div key={field.key} className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {field.name}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.key}
                      placeholder={field.name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full text-white bg-[#307D6F] hover:bg-[#2c8a79]   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
