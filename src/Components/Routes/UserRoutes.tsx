import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Bars } from "../Bars/Bars/Bars";
import Assignbudget from "../Signin/Assignbudget";
import Budget from "../Signin/budget";
import Consent from "../Signin/Consent";
import CreatePosition from "../Signin/createposition";
import Positioncreated from "../Signin/positioncreated";
import Signin from "../Signin/Signin";
import termandcondition from "../Signin/termandcondition";
import Welcome from "../Signin/Welcome";
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

export const User: React.FC = () => {
  // @ts-ignore
  const [routes, setRoutes] = useState<any>([
    //SignIn Folder
    { path: "/SigninHRMS", component: Signin, bars: false },
    { path: "/CreatePosition", component: CreatePosition, bars: false },
    { path: "/Assignbudget", component: Assignbudget, bars: false },
    { path: "/Positioncreated", component: Positioncreated, bars: false },
    { path: "/Consent", component: Consent, bars: false },
    { path: "/Budget", component: Budget, bars: false },
    { path: "/termandcondition", component: termandcondition, bars: false },
    { path: "/Welcome", component: Welcome, bars: false },
    { path: "/", component: SignIn, bars: false },
    { path: "/SignUp", component: SignUp, bars: false },

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
