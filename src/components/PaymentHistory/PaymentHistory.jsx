
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";



const PaymentHistory = () => {
    const [search, setSearch] = useState('');
    // console.log(search)
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user.email, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}&search=${search}`)
            return res.data;
        }
    })

    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
        refetch();
    }

    

    return (
        <div className="mx-5 my-8">

            <SectionTitle heading={"Track Your Transactions and Payments"}
            subHeading={"Payment History"}
            ></SectionTitle>

           <div className="my-8">
                <form className="md:w-1/2 mx-auto flex flex-col md:flex-row gap-4 " onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Write here month name" className="input input-bordered" id="" />
                    <input type="submit" value="Search" className="btn btn-info"/>
                </form>
           </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Month</th>
                            <th>Rent</th>
                            <th>Discount</th>
                            <th>Amount Paid</th>
                            <th>Transaction Id</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <td>{index + 1}</td>
                            <td>{payment.month}</td>
                            <td>{payment.rent}</td>
                            <td>{payment.discount}</td>
                            <td>{payment.amountToPay}</td>
                            <td>{payment.transactionId}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;