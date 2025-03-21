import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API_URL, EndPoints, getUrl } from "../../helpers/constants";
import Loader from "../Loader/Loader";
import ManagerDashboardLayout from "./managerDashboardLayout";
import { Tasks } from "../Types/Task";

const ManagerDashboard: React.FC = () => {
  const navigate = useNavigate();
    const [Organization, setOrganization] = useState<Tasks[]>([]);
    const [status, setStatus] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [loading, setLoading] = useState(true);
  
    const input = [
      { name: "Tak Subject", key: "task_subject" },
      { name: "Tssk Detail", key: "task_detail" },
      { name: "Assignee To", key: "first_name" },
      { name: "Status", key: "status" },
      { name: "Created Date", key: "created_at" },
    ];
  
    useEffect(() => { 
      const fetchOrganization = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `${getUrl(API_URL)}${EndPoints.getAllTask}`
          );
  
          if (response.data?.body?.data) {
            const formattedData = response.data.body.data.map(
              (task: { created_at: string | number | Date; }) => {
                const formatDate = (dateString: string | number | Date) => {
                  const date = new Date(dateString);
                  return date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).replace(/ /g, "-"); // Converts to "dd-MMM-yyyy"
                };
  
                return {
                  ...task,
                  original_created_at: task.created_at, // Store original date
                  created_at: formatDate(task.created_at), // Formatted date for display
                };
              }
            );
  
            // Convert `fromDate` to Date object
            const fromDateObj = fromDate ? new Date(fromDate) : null;
            const toDateObj = new Date(); // Today's date
  
            let filteredData = formattedData;
            
            // Filter by status
            if (status !== "All" && status !== "") {
              filteredData = filteredData.filter((task: any) => task?.status === status);
            }
  
            // Filter by date range
            if (fromDateObj) {
              filteredData = filteredData.filter((task: any) => {
                const taskDate = new Date(task.original_created_at);
                return taskDate >= fromDateObj && taskDate <= toDateObj;
              });
            }
  
            setOrganization(filteredData);
          } else {
            console.warn("No data found in response");
            setOrganization([]); 
          }
        } catch (error) {
          console.error("Error fetching tasks:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchOrganization();
    }, [status, fromDate]);
  
  
  
    const handleDelete = async (id: string) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            "bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mx-2 w-40",
          cancelButton:
            "bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mx-2 w-40",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.delete(
                `${getUrl(API_URL)}${EndPoints.deleteTask}/?_id=${id}`
              );
              swalWithBootstrapButtons
                .fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                })
                .then(() => {
                  window.location.reload();
                });
            } catch (error) {
              swalWithBootstrapButtons.fire({
                title: "Error",
                text: "There was a problem deleting the file. Please try again.",
                icon: "error",
              });
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your file is safe",
              icon: "error",
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
    <ManagerDashboardLayout>
            <div className="border rounded-lg shadow-inner  space-y-5  p-8 relative bg-white ">
              <div className="flex justify-between items-start w-full">
                <div className="text-xl font-bold">Task List</div>
                <div className="flex gap-4">
                  <div className="flex gap-4 items-center">
                  <label
                      htmlFor=""
                      className="text-[#1F7973] text-[17px] font-semibold"
                    >
                      From Date
                    </label>
                      <input
                          type="date"
                          className="border p-2 rounded-lg w-40"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)} />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label
                      htmlFor=""
                      className="text-[#1F7973] text-[17px] font-semibold"
                    >
                      Status
                    </label>
                    <select
                      className="border p-2 rounded-lg w-40"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="All">All</option>
                      <option value="Pending">Pending</option>
                      <option value="Continue">Continue</option>
                      <option value="Drop">Drop</option>
                      <option value="Complete">Complete</option>
      
                    </select>
                  </div>
      
                  <button
                    type="button"
                    className="bg-[#1F7973] text-white rounded-lg px-10 pt-2  pb-3"
                    onClick={() => navigate("/Manager/AddNewTask?mode=Add")}
                  >
                    + Add New
                  </button>
                </div>
              </div>
              <div className="">
                <table className=" w-full border-2  ">
                  <thead>
                    <tr className="rounded-t-xl bg-[#1F7973]  text-[#FFFFFF]">
                      {input.map((item) => (
                        <th className="border-b border-gray-400 px-4 py-2 text-start">
                          {item.name}
                        </th>
                      ))}
                      <th className="border-b border-gray-400 px-4 py-2 ">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Organization.map((Organization: any) => (
                      <tr key={Organization._id} className="border-b border-gray-400">
                        {input.map((item) => (
                          <td key={item.key} className="px-4 py-2">
                            {Organization[item.key] as string}
                          </td>
                        ))}
                        <td className=" border-gray-400  py-2  flex justify-center items-center gap-3">
                          <div className="bg-[#1F7973] rounded-lg px-2 py-2   flex  justify-center  items-center cursor-pointer">
                            <FaEye
                              color="white"
                              size={20}
                              onClick={() =>
                                navigate(
                                  `/Manager/AddNewTask/?id=${Organization._id}&mode=View`
                                )
                              }
                            />
                          </div>
                          <div>
                            <button
                              type="button"
                              className="bg-[#F3632D] text-white rounded-lg px-8 pt-1  pb-2 "
                              onClick={() =>
                                navigate(
                                  `/Manager/AddNewTask/?id=${Organization._id}&mode=Edit`
                                )
                              }
                            >
                              Edit
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="bg-[#E14640] text-white rounded-lg px-8 pt-1  pb-2 "
                              onClick={() => handleDelete(Organization._id)}
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
    </ManagerDashboardLayout>
  );
};
export default ManagerDashboard;
