import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RentedAgreementCard from "../RentedAgreementCard/RentedAgreementCard";


const MemberProfile = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: rentedAgreements = [],  refetch} = useQuery({
        queryKey: ['rentedAgreements'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/agreements/rented/${user.email}`);
            return res.data;
            
        }
    })

    console.log(rentedAgreements)

    return (
        <div className="mb-14 mx-5">
            <div className="flex flex-col md:flex-row p-8 items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-4">My Profile</h1>
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

            <div>
                {
                    rentedAgreements.map(rentedAgreement =><RentedAgreementCard key={rentedAgreement._id}
                    rentedAgreement={rentedAgreement}
                    ></RentedAgreementCard>)
                }
            </div>




        </div>
    );
};

export default MemberProfile;