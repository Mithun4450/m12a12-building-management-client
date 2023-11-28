import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ApartmentCard = ({apartment}) => {
    const {_id, image, block_name, floor_no, apartment_no, rent} = apartment;
    
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const today = new Date();
    const agreement_request_date = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${today.getFullYear()} `;
    console.log(agreement_request_date)
    

    const handleAgreementRequest = () => {
        
        if (user && user.email) {
            
            const agreementRequest = {
                apartment_id: _id,
                user_name: user.displayName,
                user_email: user.email,
                status: "pending",
                role: "user",
                agreement_request_date,
                block_name,
                floor_no,
                apartment_no,
                rent
                
            }

            axiosSecure.post('/agreements', agreementRequest)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You have successfully made request for agreement",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        
                        
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to make request for agreement",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        

    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-56" src={image} alt="Image of apartment" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{block_name}</h2>
                    <p>Floor No. <span>{floor_no}</span></p>
                    <p>Apartment No. <span>{apartment_no}</span></p>
                    <p>Rent: Tk.<span>{rent}</span></p>
                    <div className="card-actions justify-end">
                    <button onClick={handleAgreementRequest} className="btn btn-info">Request for Agreement</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ApartmentCard;