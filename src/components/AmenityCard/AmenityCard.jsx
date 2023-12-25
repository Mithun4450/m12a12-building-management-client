

const AmenityCard = ({amenity}) => {
    const {name, description, icon} = amenity;
    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="w-full h-56" src={icon} alt="Image of apartment" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p> <span>{description}</span></p>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default AmenityCard;