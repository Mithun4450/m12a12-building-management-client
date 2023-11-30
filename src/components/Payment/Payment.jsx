
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../SectionTitle/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);



const Payment = () => {

    const axiosSecure = useAxiosSecure();
    // const [appliedCode, setAppliedCode] = useState(null);
    const [coupon, setCoupon] = useState(null);
    
    const [discountRate, setDiscountRate] = useState(null);
    const {user} = useAuth();
    console.log(user.email)

    // const { refetch, data: coupon = [] } = useQuery({
    //     queryKey: ['payFormData'],
    //     queryFn: async() => {
    //         const res = await axiosSecure.get(`/coupons/${appliedCode}`);
    //         return res.data;
    //     }
    // })

    

    const { data: payFormData = [] } = useQuery({
        queryKey: ['payFormData', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/paymentFormData/${user.email}`);
            return res.data;
        }
    })

    
   
    const handleApplyCode = e =>{
        e.preventDefault();
        const appliedCode = e.target.appliedCode.value; 
        console.log(appliedCode)
        // setAppliedCode(appliedCode);
        

        axiosSecure.get(`/coupons/${appliedCode}`)
        .then(res => {
            console.log(res.data)
            setCoupon(res.data)
        })

        if(coupon){
            setDiscountRate(parseInt(coupon.percentage))
            return
            
        }

        
        
    
    }

    // const discountRate = parseInt(coupon.percentage);
    console.log(payFormData)
    const month = payFormData.month;
    const rent = payFormData.rent;
    console.log(month, rent)    
    const discount = rent * discountRate /100;
    const amountToPay = rent - discount;
    const amount = {rent, discount, amountToPay};
    console.log(amount)



   

    return (
        <div className="my-8">
            <div className="mb-10">
                <SectionTitle heading={"Pay Rent, Enjoy Discounts at Concord Palace"}
                subHeading={"Secure and Seamless Transactions"}
                ></SectionTitle>
            </div>
            <form onSubmit={handleApplyCode} className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="form-control">
                    
                    <input type="text" name="appliedCode" placeholder="Write here coupon code...." className="input input-bordered w-72" />
                </div>
                <div>
                <button className="btn btn-info">Apply Code</button>
                </div>
            </form>

            <div className="w-3/4 lg:w-1/3 mx-auto my-5 p-4 space-y-2">
                <p className="text-xl "><span className="font-semibold">Rent of {month}:  </span> Tk.{rent}</p>
                <p className="text-xl "><span className="font-semibold">Discount Amount:  </span> Tk.{discount}</p>
                <p className="text-xl "><span className="font-semibold"> Amount to pay:  </span> Tk.{amountToPay}</p>
                
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    amount={amount}
                    payFormData={payFormData}
                    ></CheckoutForm>
                </Elements>
            </div>

            
                        
        </div>

        
    );
};

export default Payment;