

const AgreementCard = ({agreement}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    
                    <h2 className="card-title text-center capitalize"><span className="font-semibold">Agreement Request Status: </span>{agreement.status}</h2>
                    <p className="text-left capitalize"><span className="font-semibold">User Role: </span>{agreement.role}</p>
                    <p className="text-left"><span className="font-semibold">User Name: </span>{agreement.user_name}</p>
                    <p className="text-left"><span className="font-semibold">User Email: </span>{agreement.user_email}</p>
                    <p className="text-left"><span className="font-semibold">Block Name: </span>{agreement.block_name}</p>
                    <p className="text-left"><span className="font-semibold">Floor No: </span>{agreement.floor_no}</p>
                    <p className="text-left"><span className="font-semibold">Room No: </span>{agreement.apartment_no}</p>
                    <p className="text-left"><span className="font-semibold">Rent: </span>Tk.{agreement.rent}</p>
                    <p className="text-left"><span className="font-semibold">Agreement Request Date: </span>{agreement.agreement_request_date}</p>
                    
                    <div className="flex gap-4">
                    <button className="btn btn-info">Accept</button>
                    <button className="btn btn-error">Reject</button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default AgreementCard;