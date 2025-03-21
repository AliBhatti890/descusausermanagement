import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL, EndPoints, getUrl } from '../../helpers/constants';
import WYSIWYGEditor from '../Child Component/Editor';
import ManagerDashboardLayout from './managerDashboardLayout';


interface Task {
    _id?: string;
    task_subject: string;
    task_detail: string;
    assignee_to: string;
    status: string;
  }
  
  interface DropdownOption {
    label: string;
    value: string;
  }
  

const ManagerAddNewTask: React.FC = () => {

      const [taskData, setTaskData] = useState<Task>({
        task_subject: "",
        task_detail: "",
        assignee_to: "",
        status: "",
      });
    
      const [organizationInputs, setOrganizationInputs] = useState([
        { name: "Task Subject", key: "task_subject", type: "text" },
        { name: "Task Detail", key: "task_detail", type: "textarea" },
        { name: "Assignee To", key: "assignee_to", type: "dropdown", options: [] },
        { name: "Status", key: "status", type: "dropdown", options: [] },
      ]);
    
      const navigate = useNavigate();
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const id = searchParams.get("id");
      const mode = searchParams.get("mode");
    
      const statusOptions: DropdownOption[] = [
        { label: "Pending", value: "Pending" },
        { label: "Continue", value: "Continue" },
        { label: "Drop", value: "Drop" },
        { label: "Complete", value: "Complete" },
      ];
    
      useEffect(() => {
        if (id) {
          const fetchTaskById = async () => {
            try {
              const response = await axios.get(
                `${getUrl(API_URL)}${EndPoints.getTaskById}?_id=${id}`
              );
              if (response.data) {
                setTaskData({
                  task_subject: response.data.data.task_subject,
                  task_detail: response.data.data.task_detail,
                  assignee_to: response.data.data.assignee_to,
                  status: response.data.data.status,
                });
              }
            } catch (error) {
              console.error("Error fetching task:", error);
            }
          };
          fetchTaskById();
        }
      }, [id]);
    
      useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(`${getUrl(API_URL)}${EndPoints.getAllUser}`);
            const users = response.data.body.data.map((user: any) => ({
              label: user.first_name,
              value: user._id,
            }));
    
            setOrganizationInputs((prevInputs) =>
              prevInputs.map((input) =>
                input.key === "assignee_to" ? { ...input, options: users } : input
              )
            );
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
    
        fetchUsers();
      }, []);
    
      useEffect(() => {
        setOrganizationInputs((prevInputs : any) =>
          prevInputs.map((input : any) =>
            input.key === "status" ? { ...input, options: statusOptions } : input
          )
        );
      }, []);
    
      const handleChange = (key: string, value: string) => {
        setTaskData((prev) => ({ ...prev, [key]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
    
        try {
          Swal.fire({
            title: "Processing...",
            text: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });
    
          if (mode === "Edit" && id) {
            await axios.put(`${getUrl(API_URL)}${EndPoints.updateTask}`, {
              ...taskData,
              _id: id,
            });
          } else {
            await axios.post(`${getUrl(API_URL)}${EndPoints.createTask}`, taskData);
          }
    
          Swal.fire({
            title: "Success",
            text: "Task saved successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            navigate("/Manager/Dashboard");
          });
        } catch (error: any) {
          Swal.fire({
            title: "Error",
            text: error.response?.data?.message || "Something went wrong. Try again!",
            icon: "error",
          });
        }
      };
    
   

    return (
        <ManagerDashboardLayout>
           <div className="border rounded-lg shadow-inner h-dvh p-8 bg-white">
        <h2 className="text-lg font-bold">{mode} Task</h2>
        <form onSubmit={handleSubmit} className="grid  gap-4 mt-4">
          {organizationInputs.map((input) => (
            <div key={input.key} className="flex items-center gap-4">
              <label htmlFor={input.key} className="w-1/4 text-gray-700 font-semibold">
                {input.name}
              </label>

              {input.type === "dropdown" ? (
                <select
                  id={input.key}
                  name={input.key}
                  value={taskData[input.key as keyof Task] || ""}
                  onChange={(e) => handleChange(input.key, e.target.value)}
                  className={`border p-2 rounded-lg w-full  ${
                    mode === "View" ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  disabled={mode === "View"}
                >
                  <option value="" disabled>
                    Select {input.name}
                  </option>
                  {input.options?.map((option: DropdownOption) => (
                    <option key={option.value} value={option.value} >
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : input.type === "textarea" ? (
                <WYSIWYGEditor
                  id={input.key}
                  name={input.key}
                  placeholder={`Enter ${input.name}...`}
                  value={taskData[input.key as keyof Task] || ""}
                  onChange={(value: string) => handleChange(input.key, value)}
                />
              ) : (
                <input
                  id={input.key}
                  name={input.key}
                  type={input.type}
                  placeholder={`Enter ${input.name}`}
                  value={taskData[input.key as keyof Task] || ""}
                  onChange={(e) => handleChange(input.key, e.target.value)}
                  className={`border p-2 rounded-lg w-full ${
                    mode === "View" ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  readOnly={mode === "View"}
                />
              )}
            </div>
          ))}

          <div className="flex gap-3">
            <button
              type="button"
              className="border px-4 py-2 rounded-lg w-full hover:bg-gray-200"
              onClick={() => navigate("/Manager/Dashboard")}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-[#1F7973] text-white px-4 py-2 rounded-lg w-full"
              disabled={mode === "View"}
            >
              Save
            </button>
          </div>
        </form>
      </div>
        </ManagerDashboardLayout>
    );
};
export default ManagerAddNewTask;
