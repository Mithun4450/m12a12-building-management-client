

const ApartmentCard = ({apartment}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-56" src={apartment.image} alt="Image of apartment" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{apartment.block_name}</h2>
                    <p>Floor No. <span>{apartment.floor_no}</span></p>
                    <p>Apartment No. <span>{apartment.apartment_no}</span></p>
                    <p>Rent: Tk.<span>{apartment.rent}</span></p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-info">Make Agreement</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ApartmentCard;