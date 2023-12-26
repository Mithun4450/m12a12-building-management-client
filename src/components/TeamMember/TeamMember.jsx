

const TeamMember = ({person}) => {
    const {name, position, bio, email, phone, photo } = person;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full h-full"  src={photo} alt=""/></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-semibold text-sm">{position}</p>
                    <p className="text-sm">{bio}</p>
                    <p className="text-xs">Email: {email}</p>
                    <p className="text-xs">Phone: {phone}</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default TeamMember;