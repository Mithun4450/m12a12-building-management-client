import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AgreementCard from "../AgreementCard/AgreementCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const AgreementRequests = () => {

    const axiosSecure = useAxiosSecure();

    const {data: agreements = [],  refetch} = useQuery({
        queryKey: ['agreements'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/agreements');
            return res.data;
            
        }
    })
    console.log(agreements)

    return (
        <div className="my-14 mx-6">
            <div>
                <SectionTitle subHeading={"Agreement Approval Status"}
                heading={"Acceptance or Rejection of Rental Agreement"}
                >

                </SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    agreements.map(agreement =><AgreementCard key={agreement._id}
                    agreement={agreement}
                    refetch={refetch}
                    ></AgreementCard>)
                }
            </div>
            
        </div>
    );
};

export default AgreementRequests;