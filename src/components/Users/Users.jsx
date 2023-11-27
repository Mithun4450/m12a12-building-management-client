import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Users = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch } = useQuery({
        queryKey: ['apartments'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/users');
            return res.data;
            
        }
    })
    console.log(users)
    refetch();

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                   {
                    users.map(user =>  <tr key={user._id}>
                        <th>{user.name}</th>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        
                    </tr>)
                   }
                    
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Users;