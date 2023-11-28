import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AgreementCard = ({agreement, refetch}) => {

    const axiosSecure = useAxiosSecure();

    const today = new Date();
    const agreement_accept_date = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${today.getFullYear()} `;
    console.log(agreement_accept_date)
    
    const handleAcceptAgreement = agreement =>{
        

        axiosSecure.patch(`/agreements/accept/${agreement._id}`, {agreement_accept_date})
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                swal("Good job!","You have successfully accepted agreement request!", "success");
            }
        })

        axiosSecure.patch(`/users/accept/${agreement.user_email}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                console.log('user has become member')
                
            }
        })
    }


    const handleRejectAgreement = (agreement) =>{
       
        axiosSecure.patch(`/agreements/reject/${agreement._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                swal("Rejected!","You have rejected agreement request!");
            }
        })

        axiosSecure.patch(`/users/reject/${agreement.user_email}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                console.log('member has become user')
                
            }
        })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    
                    <h2 className="text-xl text-center capitalize"><span className="font-semibold">Agreement Request Status: </span>{agreement.status}</h2>
                    <p className="text-left capitalize"><span className="font-semibold">User Role: </span>{agreement.role}</p>
                    <p className="text-left"><span className="font-semibold">User Name: </span>{agreement.user_name}</p>
                    <p className="text-left"><span className="font-semibold">User Email: </span>{agreement.user_email}</p>
                    <p className="text-left"><span className="font-semibold">Block Name: </span>{agreement.block_name}</p>
                    <p className="text-left"><span className="font-semibold">Floor No: </span>{agreement.floor_no}</p>
                    <p className="text-left"><span className="font-semibold">Room No: </span>{agreement.apartment_no}</p>
                    <p className="text-left"><span className="font-semibold">Rent: </span>Tk.{agreement.rent}</p>
                    <p className="text-left"><span className="font-semibold">Agreement Request Date: </span>{agreement.agreement_request_date}</p>
                    
                    <div className="flex gap-4">
                    <button onClick={() => handleAcceptAgreement(agreement)} className="btn btn-info">Accept</button>
                    <button onClick={() => handleRejectAgreement(agreement)} className="btn btn-error">Reject</button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default AgreementCard;