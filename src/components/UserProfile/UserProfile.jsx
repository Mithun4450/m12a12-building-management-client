import useAuth from "../../hooks/useAuth";


const UserProfile = () => {
    const {user} = useAuth();

    return (
        <div className="flex flex-col md:flex-row  p-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">My Profile</h1>
                <div className="mb-8">
                    <label  className="btn btn-ghost btn-circle avatar w-32">
                    <div className="w-32 rounded-full">
                        {
                        user.photoURL? <img src={user.photoURL} /> : <img src=""></img>

                        }
                    </div>
                    </label>
                </div>

           </div>
           <div className="ml-8" >
            <p className="text-base font-bold">Full Name</p>
            <h1 className="text-xl mb-5 ">{user.displayName}</h1>
            <p className="text-base font-bold ">Email Address</p>
            <h1 className="text-xl mb-8">{user.email}</h1>
            <p className="text-xl mb-8"> <span className="font-bold ">Agreement accept date: </span>none</p> 
            
            <h1 className="text-xl font-bold ">Rented apartment info:</h1>
            <p className="text-base">Block Name: none </p> 
            <p className="text-base">Floor no: none</p> 
            <p className="text-base">Room no: none</p> 
           </div>
        </div>
    );
};

export default UserProfile;