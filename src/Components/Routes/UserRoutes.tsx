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
import Team from "../Signup/createteam";
import organizationDetails from "../Signup/organizationDetails";
import organizationSetup from "../Signup/organizationSetup";
import Signup from "../Signup/signup";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import AdminDashboard from "../Admin Dashboard/adminDashboard";
import AddNewTask from "../Admin Dashboard/addNewTask";
import AdminUserList from "../Admin Dashboard/userList";
import AddNewCandidate from "../Admin Dashboard/addNewUser";
import ManagerDashboard from "../Manager Dashboard/managerDashboard";
import ManagerAddNewTask from "../Manager Dashboard/addNewTask";
import ManagerUserList from "../Manager Dashboard/userList";
import ManagerAddewuser from "../Admin Dashboard/addNewUser";
import UserDashboard from "../User Dashboard/userDashboard";
import UserAddNewTask from "../User Dashboard/addNewTask";
import AdminAddNewTask from "../Admin Dashboard/addNewTask";
import AdminAddewuser from "../Admin Dashboard/addNewUser";

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

    //SignUp Folder
    { path: "/Team", component: Team, bars: false },
    {
      path: "/OrganizationDetails",
      component: organizationDetails,
      bars: false,
    },
    {
      path: "/OrganizationSetup",
      component: organizationSetup,
      bars: false,
    },
    { path: "/SignUpHRMS", component: Signup, bars: false },

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
      component: ManagerAddewuser,
      bars: false,
    },





    {
        path: "/User/Dashboard",
        component: UserDashboard,
        bars: false,
      },

      {
        path: "/User/UserAddNewTask",
        component: UserAddNewTask,
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
