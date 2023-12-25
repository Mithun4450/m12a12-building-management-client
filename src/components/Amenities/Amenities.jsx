import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import AmenityCard from "../AmenityCard/AmenityCard";


const Amenities = () => {

    // const axiosPublic = useAxiosPublic();

    // const {data: apartments = [],  refetch} = useQuery({
    //     queryKey: ['apartments'], 
    //     queryFn: async() =>{
    //         const res = await axiosPublic.get(`/apartments?page=${currentPage}&size=6`);
    //         return res.data;
            
    //     }
    // })
    // refetch();
    // console.log(apartments);

    const axiosPublic = useAxiosPublic();

    const {data: amenities = []} = useQuery({
        queryKey: ['amenities'],
        queryFn: async() =>{
            const res = await axiosPublic.get("/amenities")
            return res.data
        }
    })
    console.log(amenities)

    return (
        <div>
            <SectionTitle heading={"Experience a Lifestyle of Comfort and Convenience"} subHeading={"Discover Our Exceptional Amenities"}></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    amenities.map(amenity =><AmenityCard key={amenity._id}
                    amenity={amenity}
                    ></AmenityCard>)
                }
            </div>
            
        </div>
    );
};

export default Amenities;