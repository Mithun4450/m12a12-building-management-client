import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IoMdLogIn } from "react-icons/io";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {

    const { logOut, user} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }

    return (
        <div className='mx-auto px-8 py-2'>
            <div className="navbar bg-base-100">
                <div className="navbar-start ">
                    
                    <div className='mr-24' >
                        <img className='w-20 mx-auto' src={logo} alt="" />
                        <p className="text-xl text-sky-600 font-bold text-center">Concord Palace</p>
                        
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </label>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/apartments">Apartments</Link></li>

                      </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg font-semibold'><Link to="/">Home</Link></li>
                        <li className='text-lg font-semibold'><Link to="/apartments">Apartments</Link></li>                   
                    </ul>
                </div>
                <div className="navbar-end">
                        {
                            user? 
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                     {
                                        user.photoURL? <img src={user.photoURL} /> : <img src=""></img>

                                     }
                                </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                
                                    <li className='pointer-events-none text-sky-600 font-bold'><h2>{user.displayName}</h2></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><button onClick={handleLogOut}>LogOut</button></li>
                                </ul>
                           </div> 
                           :
                           <Link to="/login"><IoMdLogIn className='text-3xl' /></Link>
                        }
                        
                       
                    
                   
                </div>
            </div>

            
            
        </div>
    );
};

export default Navbar;