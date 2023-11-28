import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PaymentForm from "../PaymentForm/PaymentForm";
import SectionTitle from "../SectionTitle/SectionTitle";


const MakePayment = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payAgreements = [],  refetch} = useQuery({
        queryKey: ['payAgreements'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/agreements/pay/${user.email}`);
            return res.data;
            
        }
    })

    console.log(payAgreements)


    return (

        <div className="my-14">
            <SectionTitle heading={"Hassle-Free Rent Submission"} 
            subHeading={"Pay Now"}></SectionTitle>
            <div className="mb-8">
                {
                    payAgreements.map(payAgreement =><PaymentForm key={payAgreement._id}
                    payAgreement={payAgreement}
                    ></PaymentForm>)
                }
            </div>
        </div>
       
    );
};

export default MakePayment;