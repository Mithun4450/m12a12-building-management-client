import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import ApartmentCard from "../ApartmentCard/ApartmentCard";


const Apartments = () => {
    const axiosPublic = useAxiosPublic();

    const {data: apartments = []} = useQuery({
        queryKey: ['apartments'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/apartments');
            return res.data;
        }
    })

    console.log(apartments)

    return (
        <div className="my-14">
            <SectionTitle heading={"Explore and Pick Your Desired Living Space"} subHeading={"Apartment Catalog"}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
            {
                apartments.map(apartment =><ApartmentCard key={apartment._id}
                apartment={apartment}
                ></ApartmentCard>)
            }
            </div>
            
        </div>
    );
};

export default Apartments;