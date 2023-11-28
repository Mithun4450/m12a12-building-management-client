import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GiSpookyHouse } from "react-icons/gi";
import { BsFillHouseLockFill, BsFillHouseAddFill  } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";


const AdminProfile = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {data:apartmentsCount=null} = useQuery({
        queryKey: ['apartmentsCount'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/apartmentsCount');
            console.log(res.data.count);
            return res.data.count;
            
        }
    })

   console.log(apartmentsCount)

   const {data:usersCount=null} = useQuery({
        queryKey: ['usersCount'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/usersCount');
            console.log(res.data.count);
            return res.data.count;
            
        }
    })

   console.log(usersCount)

   

    

    const {data: members = [],  refetch} = useQuery({
        queryKey: ['members'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/users/members');
            return res.data;
            
        }
    })
    console.log(members)

    let rentedRooms = Math.floor(members.length*100/apartmentsCount);
    let availableRooms = 100 -rentedRooms;
    let users = usersCount - members.length -1;

     
    

    return (
        <div className="p-8">
            <div className="flex flex-col md:flex-row  items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Admin Profile</h1>
                    <div className="mb-4">
                        <label  className="btn btn-ghost btn-circle avatar w-32">
                        <div className="w-32 rounded-full">
                            {
                            user.photoURL? <img src={user.photoURL} /> : <img src=""></img>

                            }
                        </div>
                        </label>
                    </div>

                </div>
                <div className="ml-8" >
                    <p className="text-base font-bold">Full Name</p>
                    <h1 className="text-xl mb-5 ">{user.displayName}</h1>
                    <p className="text-base font-bold ">Email Address</p>
                    <h1 className="text-xl ">{user.email}</h1>
                    
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                <div className="stats shadow ">
  
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                         <GiSpookyHouse className="text-sky-600 text-5xl" />
                        </div>
                        <div className="stat-title">Total Number of Rooms</div>
                        <div className="stat-value">{apartmentsCount}</div>
                        
                    </div>
                  
                </div>
                <div className="stats shadow ">
  
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <BsFillHouseLockFill className="text-sky-600 text-5xl" />
                        </div>
                        <div className="stat-title">Rented Rooms</div>
                        <div className="stat-value">{rentedRooms}%</div>
                        
                    </div>
                  
                </div>
                <div className="stats shadow ">
  
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                         <BsFillHouseAddFill className="text-sky-600 text-5xl"  />
                        </div>
                        <div className="stat-title">Available Rooms</div>
                        <div className="stat-value">{availableRooms}%</div>
                        
                    </div>
                  
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
                <div className="stats shadow ">
  
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FaUsers className="text-sky-600 text-5xl" />
                        </div>
                        <div className="stat-title">Number of Users</div>
                        <div className="stat-value">{users}</div>
                        
                    </div>
                  
                </div>
                <div className="stats shadow ">
  
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FaUserSecret className="text-sky-600 text-5xl"  />
                        </div>
                        <div className="stat-title">Number of Members</div>
                        <div className="stat-value">{members.length}</div>
                        
                    </div>
                  
                </div>
            </div>
            
        </div>
    );
};

export default AdminProfile;