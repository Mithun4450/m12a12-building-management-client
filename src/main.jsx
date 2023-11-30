import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Apartments from './components/Apartments/Apartments';
import Dashboard from './MainLayout/Dashboard';
import UserProfile from './components/UserProfile/UserProfile';
import Announcements from './components/Announcements/Announcements';
import MemberProfile from './components/MemberProfile/MemberProfile';
import MakePayment from './components/MakePayment/MakePayment';
import PaymentHistory from './components/PaymentHistory/PaymentHistory';
import AdminProfile from './components/AdminProfile/AdminProfile';
import ManageMembers from './components/ManageMembers/ManageMembers';
import MakeAnnouncements from './components/MakeAnnoucements/MakeAnnouncements';
import AgreementRequests from './components/AgreementRequests/AgreementRequests';
import ManageCoupons from './components/ManageCoupons/ManageCoupons';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/Users/Users';
import AdminRoute from './components/AdminRoute/AdminRoute';
import Users from './components/Users/Users';
import MemberRoute from './components/MemberRoute/MemberRoute';
import Payment from './components/Payment/Payment';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
        
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>
      },
      
      
    ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      // user
      {
        path: "user/myProfile",
        element: <UserProfile></UserProfile>
      },

      {
        path: "user/announcements",
        element: <Announcements></Announcements>
      },


      // member
      {
        path: "member/myProfile",
        element: <MemberRoute><MemberProfile></MemberProfile></MemberRoute>
      },
      {
        path: "member/makePayment",
        element: <MemberRoute><MakePayment></MakePayment></MemberRoute>
      },
      {
        path: "member/makePayment/payment",
        element: <MemberRoute><Payment></Payment></MemberRoute>
      },
      {
        path: "member/paymentHistory",
        element: <MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
      },
      {
        path: "member/announcements",
        element: <MemberRoute><Announcements></Announcements></MemberRoute>
      },


      // admin
      {
        path: "admin/adminProfile",
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: "admin/manageMembers",
        element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute>
      },
      {
        path: "admin/makeAnnouncements",
        element: <AdminRoute><MakeAnnouncements></MakeAnnouncements></AdminRoute>
      },
      {
        path: "admin/agreementRequests",
        element: <AdminRoute><AgreementRequests></AgreementRequests></AdminRoute>
      },
      {
        path: "admin/manageCoupons",
        element: <AdminRoute><ManageCoupons></ManageCoupons></AdminRoute>
      },

     


      
      

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
             <RouterProvider router={router} />
          </AuthProvider>
   
      </QueryClientProvider>
   </React.StrictMode>,
  


)
