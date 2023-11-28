import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import swal from "sweetalert";


const ManageMembers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: members = [],  refetch} = useQuery({
        queryKey: ['members'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/users/members');
            return res.data;
            
        }
    })
    console.log(members)

    const handleRemoveMember = (member) =>{

        axiosSecure.patch(`/users/remove/${member.email}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                swal("Removed!","You have removed the member!");
                
            }
        })
       
        axiosSecure.patch(`/agreements/remove/${member.email}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                console.log('member removed')
                
            }
        })

        
    }

    return (
        <div className="my-14 mx-6">
            <div>
                <SectionTitle heading={"Streamlined Management of Residential Members"} subHeading={"Manage Residents"}></SectionTitle>
            </div>

            <div className="my-8">
                

                    <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}

                        {
                
                            members.map((member, index) => <tr key={member._id}>
                                <th>{index + 1}</th>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td><button onClick={() => handleRemoveMember(member)} className="btn btn-error">Remove Member</button></td>
                            </tr>)

                        }
                        
                        
                        </tbody>
                    </table>
                    </div>
            </div>


            
        </div>
    );
};

export default ManageMembers;