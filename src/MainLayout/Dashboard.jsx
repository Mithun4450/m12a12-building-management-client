import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";


const Dashboard = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();

    return (
        <>
        <Navbar></Navbar>

        <div className="flex flex-col md:flex-row lg:flex-row">


            {/* dashboard side bar */}
            <div className="w-full md:w-1/4 lg:w-1/4 min-h-screen bg-sky-600 text-white p-8 space-y-3">
                
                {
                    user && !isAdmin && !isMember && <>
                        <h1 className="text-xl font-bold">USER DASHBOARD</h1>
                        <ul className="space-y-3" >
                            
                            
                            <li>
                                <NavLink to="/dashboard/user/myProfile">My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/user/announcements">Announcements</NavLink>
                            </li>
                                
                        </ul>
                    
                    
                    </>
                }
                {
                    isMember && !isAdmin && <>
                        <h1 className="text-xl font-bold">MEMBER DASHBOARD</h1>
                        <ul className="space-y-3" >
                            <li>
                                <NavLink to="/dashboard/member/myProfile">My Profile</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/member/makePayment">Make Payment</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/member/paymentHistory">Payment History</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/member/announcements">Announcements</NavLink>
                            </li>

                            
                        </ul>
                    
                    
                    </>
                }

                {
                    isAdmin && !isMember && <>
                       <h1 className="text-xl font-bold">ADMIN DASHBOARD</h1>
                        <ul className="space-y-3" >
                            <li>
                                <NavLink to="/dashboard/admin/adminProfile">Admin Profile</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/admin/manageMembers">Manage Members</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/admin/makeAnnouncements">Make Announcements</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/admin/agreementRequests">Agreement Requests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/manageCoupons">Manage Coupons</NavLink>
                            </li>

                        
                        </ul>
                    
                    
                    </>
                }


            </div>


            {/* dashboard children */}
            <div className="w-full md:w-3/4 lg:w-3/4">
                <Outlet></Outlet>
            </div>

       </div>

       <Footer></Footer>

       </>
    );
};

export default Dashboard;