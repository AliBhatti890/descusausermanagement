import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import AdminDashboard from "../Admin Dashboard/adminDashboard";
import AdminUserList from "../Admin Dashboard/userList";
import ManagerDashboard from "../Manager Dashboard/managerDashboard";
import ManagerAddNewTask from "../Manager Dashboard/addNewTask";
import ManagerUserList from "../Manager Dashboard/userList";
import UserDashboard from "../User Dashboard/userDashboard";
import AdminAddNewTask from "../Admin Dashboard/addNewTask";
import AdminAddewuser from "../Admin Dashboard/addNewUser";
import ManagerAddNewuser from "../Manager Dashboard/addNewUser";
import UserAddNewComponent from "../User Dashboard/addNewTask";
import { Bars } from "../../Component/Appview/Bars/Bars/Bars";

export const User: React.FC = () => {
  // @ts-ignore
  const [routes, setRoutes] = useState<any>([
    //SignIn Folder
    {
      path: "/",
      component: SignIn,
      bars: false,
    },
    {
      path: "/Admin/Dashboard",
      component: AdminDashboard,
      bars: false,
    },

    {
      path: "/Admin/AddNewTask",
      component: AdminAddNewTask,
      bars: false,
    },

    {
      path: "/Admin/UserList",
      component: AdminUserList,
      bars: false,
    },

    {
      path: "/Admin/AddNewUser",
      component: AdminAddewuser,
      bars: false,
    },

    {
      path: "/Manager/Dashboard",
      component: ManagerDashboard,
      bars: false,
    },

    {
      path: "/Manager/AddNewTask",
      component: ManagerAddNewTask,
      bars: false,
    },
    {
      path: "/Manager/UserList",
      component: ManagerUserList,
      bars: false,
    },
    {
      path: "/Manager/AddNewTask",
      component: ManagerAddNewTask,
      bars: false,
    },
    {
      path: "/Manager/AddNewUser",
      component: ManagerAddNewuser,
      bars: false,
    },





    {
        path: "/User/Dashboard",
        component: UserDashboard,
        bars: false,
      },


      {
        path: "/User/AddNewTask",
        component: UserAddNewComponent,
        bars: false,
      },





  ]);

  return (
    <Routes>
      {routes.map(
        ({
          path,
          component: Component,
          bars,
        }: {
          path: string;
          component: React.ComponentType<any>;
          bars: boolean;
        }) => (
          <Route
            key={path}
            path={path}
            element={
              bars ? (
                <Bars>
                  {" "}
                  <Component />{" "}
                </Bars>
              ) : (
                <Component />
              )
            }
          />
        )
      )}

      <Route path="*" element={<></>} />
    </Routes>
  );
};
