import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SlCalender } from "react-icons/sl";

const PaymentForm = ({payAgreement}) => {
    const {user_email, rent, floor_no, apartment_no, block_name} = payAgreement;

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    return (
        <div className="hero min-h-screen" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                        
                </div>
                <div className="card flex-shrink-0 w-full ">
                <form className="card-body ">
                    
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
                    <button className="btn btn-info lg:w-1/2 mx-auto">Pay Now</button>
                    </div>
                </form>
                </div>
            </div>

       
        </div>
    );
};

export default PaymentForm;