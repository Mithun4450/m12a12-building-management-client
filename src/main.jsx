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
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
             <RouterProvider router={router} />
          </AuthProvider>
   
      </QueryClientProvider>
   </React.StrictMode>
  ,


)
