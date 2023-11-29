import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({payAgreement}) => {
    const {user_email, rent, floor_no, apartment_no, block_name} = payAgreement;
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    

    const handlePaymentFormData = e =>{
        e.preventDefault();
        const form = e.target;
        console.log(form.month.value);
        const month = form.month.value;

        const paymentFormData = {user_email, rent, floor_no, apartment_no, block_name, month};

        axiosSecure.post('/paymentFormData', paymentFormData)
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                console.log(res.data.insertedId)
                navigate("/dashboard/member/makePayment/payment")
                
                
            }

        })
        
        
    }



    return (
        <div className="hero min-h-screen" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                        
                </div>
                <div className="card flex-shrink-0 w-full ">

                <form onSubmit={handlePaymentFormData} className="card-body "  >
                    
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-8">
                       
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Member Email</span>
                            </label>
                            <input type="text" name="title" value={user_email} readOnly className="input input-bordered w-72" required  />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Block Name</span>
                            </label>
                            <input type="text" name="title" value={block_name} readOnly className="input input-bordered w-72" required  />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Floor No</span>
                            </label>
                            <input type="text" name="title" value={floor_no} readOnly className="input input-bordered w-72" required  />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Apartment No</span>
                            </label>
                            <input type="text" name="title" value={apartment_no} readOnly className="input input-bordered w-72" required  />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Rent Per Month in Tk.</span>
                            </label>
                            <input type="text" name="title" value={rent} readOnly className="input input-bordered w-72" required  />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                    <span className="label-text text-xl font-bold">Select Month</span>
                            </label>
                            
                            <DatePicker
                            name='month'
                            
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showMonthYearPicker
                            dateFormat="MMMM"
                            locale="en"
                            className="input input-bordered w-72" 
                            required
                            placeholderText='January'
                            
                            
                            > </DatePicker>
                        </div>

                    
                    </div>

                    <div className="form-control mt-6">
                    
                    <button  className="btn btn-info lg:w-1/2 mx-auto">Pay Now</button>
                    </div>
                </form>
                </div>
            </div>

       
        </div>
    );
};

export default PaymentForm;