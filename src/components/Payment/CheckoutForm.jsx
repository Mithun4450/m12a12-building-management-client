import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const CheckoutForm = ({amount, payFormData}) => {
    // console.log("in checkoutForm", amount, payFormData)
    const {rent, discount, amountToPay} = amount;
    console.log(rent, discount, amountToPay);
    const {user_email, month, floor_no, block_name, apartment_no} = payFormData;
    // console.log(user_email, month, floor_no, block_name, apartment_no);
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    console.log("in checkout client secret",clientSecret)
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (amountToPay > 0) {
            axiosSecure.post('/create-payment-intent', { amountToPay: amountToPay })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, amountToPay])

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded')
             {
                console.log('transaction id in checkoutForm', paymentIntent.id);
                setTransactionId(paymentIntent.id); 

                const payment = {
                    email: user.email,
                    rent, 
                    discount,
                    amountToPay,
                    month, 
                    floor_no, 
                    block_name, 
                    apartment_no,
                    transactionId: paymentIntent.id,
                    date: new Date(), 
                    
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved in database', res.data);

                if (res.data?.paymentResult?.insertedId) {
                    swal("Good job!","You have successfully paid your rent!", "success");
                    navigate('/dashboard/member/paymentHistory')
                }
            
            
            
            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className=" w-full md:w-3/4 lg:w-1/2 mx-auto p-5" >
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn  btn-info mx-auto my-8" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600 font-bold text-base ">{error}</p>
            {transactionId && <p className="text-green-600 font-bold text-base"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;