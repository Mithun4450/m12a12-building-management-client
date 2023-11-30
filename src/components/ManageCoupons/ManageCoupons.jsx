import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";


const ManageCoupons = () => {

    const axiosSecure = useAxiosSecure();

    const handleSubmitCoupon = e =>{
        e.preventDefault();
        console.log(e.target.code.value)
        const code = e.target.code.value;
        const percentage = e.target.percentage.value;
        const description = e.target.description.value;
        console.log(code, percentage, description)

        const couponInfo = {
            code, 
            percentage, 
            description
        }

        axiosSecure.post('/coupons', couponInfo)
        .then(res =>{
            
            if (res.data.insertedId) {
                
                toast("You have successfully added coupon")
                e.target.reset();
                
                
            }

            
        })
    }

    const {data: coupons = [], refetch} = useQuery({
        queryKey: ['coupons'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/coupons');
            return res.data;
            
        }
    })
    console.log(coupons)

    const handleAvailable = id =>{
        axiosSecure.patch(`/coupons/available/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                swal("Good job!","You have successfully made the coupon available!", "success");
            }
        })
    }
    
    const handleUnavailable = id =>{
        axiosSecure.patch(`/coupons/unavailable/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                swal("Done","You have made the coupon unavailable!");
            }
        })
    }

    return (
        <div className="ml-4 my-14">
            <div>
                <SectionTitle heading={"Elevate Tenant Experience and Savings with Customized Offers"}
                subHeading={"Exclusive Tenant Benefits: Manage Coupons"}
                ></SectionTitle>
            </div>

            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Coupon</button>
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmitCoupon}>
                        <div className="form-control mb-5 mt-8 w-3/4 ">
                        <input type="text" name="code" placeholder="Coupon Code" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-5 w-3/4">
                            <input type="text" name="percentage" placeholder="Discount Percentage" className="input input-bordered" required />
                        </div>
                    
                        <div>
                            <textarea name="description"  placeholder="Coupon Description" className="input input-bordered mb-5" required cols="40" rows="20"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button  className="btn btn-info ">Submit Coupon</button>
                        </div>
                    </form>
                </div>
                </dialog>
            </div>

            <ToastContainer />

            <div>
                <div className="my-8">
                    <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Coupon Description</th>
                            <th>Coupon Code</th>
                            <th>Percentage of Discount</th>
                            <th>Available</th>
                            <th>Unavailable</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}

                        {
                
                            coupons.map((coupon, index) => <tr key={coupon._id}>
                                <th>{index + 1}</th>
                                <td className="text-xs">{coupon.description}</td>
                                <td className="text-xs">{coupon.code}</td>
                                <td className="text-xs">{coupon.percentage}%</td>
                                <td className="text-xs"><button onClick={() => handleAvailable(coupon._id)} className="btn btn-info">Make Available</button></td>
                                <td className="text-xs"><button onClick={() => handleUnavailable(coupon._id)}  className="btn btn-error">Make Unavailable</button></td>
                                
                            </tr>)

                        }
                        
                        
                        </tbody>
                    </table>
                    </div>
                </div>


            </div>
            


            

            
            

            
        </div>
    );
};

export default ManageCoupons;