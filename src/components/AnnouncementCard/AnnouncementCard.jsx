

const AnnouncementCard = ({announcement}) => {

    const {title, date, description} = announcement;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    
                    <h2 className="card-title text-center">{title}</h2>
                    <p className="text-center">{date}</p>
                    
                    <p className="text-justify">{description}</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default AnnouncementCard;