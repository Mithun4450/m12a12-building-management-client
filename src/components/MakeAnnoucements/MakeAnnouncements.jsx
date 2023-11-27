import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MakeAnnouncements = () => {

    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();

    const handleMakeAnnouncement = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        console.log(title, date, description)

        const announcement = {title, date, description};

        axiosSecure.post('/announcements', announcement)
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                swal("Good job!","You have successfully made your announcement!", "success");
                form.reset();
                
                
            }

        })
        
        
    }

    return (
        <div className="hero min-h-screen  my-14" >
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                       
            </div>
            <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleMakeAnnouncement} className="card-body ">
                <h1 className='text-3xl text-center font-bold mb-8'>You can make announcement here!!!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-8">
                    <div className="form-control ">

                       <label className="label">
                            <span className="label-text">Announcement Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required  />
                    </div>

                    <div className="form-control">
                        <label className="label">
                                <span className="label-text">Select Announcement Date</span>
                        </label>
                        <DatePicker name='date' selected={startDate} onChange={(date) => setStartDate(date)}  />
                    </div>

                   
                </div>

                <div className="form-control">
                    <label className="label">
                            <span className="label-text">Announcement Description</span>
                    </label>
                    <textarea className="border p-4 rounded-lg" name="description" placeholder="Write announcement description here...." id="" cols="30" rows="10" required></textarea>
                   
                </div>
                

                <div className="form-control mt-6">
                <button className="btn btn-info lg:w-1/2 mx-auto">Make Announcement</button>
                </div>
            </form>
            </div>
        </div>

       
    </div>
    
    );
};

export default MakeAnnouncements;