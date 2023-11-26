import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ApartmentCard = ({apartment}) => {
    const {_id, image, block_name, floor_no, apartment_no, rent} = apartment;
    const {user} = useContext(AuthContext);

    const handleMakeAgreement = () =>{

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
                    <button className="btn btn-info">Make Agreement</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ApartmentCard;