import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




const Apartments = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    const axiosPublic = useAxiosPublic();

    const [currentPage, setCurrentPage] = useState(0);

    const {data:apartmentsCount=null} = useQuery({
        queryKey: ['apartmentsCount'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/apartmentsCount');
            console.log(res.data.count);
            return res.data.count;
            
        }
    })

   console.log(apartmentsCount)

   const numberOfPages = Math.ceil(apartmentsCount / 6);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);


    const {data: apartments = [],  refetch} = useQuery({
        queryKey: ['apartments'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/apartments?page=${currentPage}&size=6`);
            return res.data;
            
        }
    })
    refetch();
    console.log(apartments);
   

    return (
        <div className="my-14">
            <SectionTitle heading={"Explore and Pick Your Desired Living Space"} subHeading={"Apartment Catalog"}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 " data-aos="fade-down">
            {
                apartments.map(apartment =><ApartmentCard key={apartment._id}
                apartment={apartment}
                
                ></ApartmentCard>)
            }
            </div>

            <div className="w-3/4 md:w-1/2 lg:w-1/4 mx-auto my-8 pagination">
                
               
                <div className="join">
                {
                    pages.map(page => <button
                        onClick={() => {
                            setCurrentPage(page);
                            
                            
                        }}
                       
                        className={currentPage === page ? 'join-item btn selected btn-info' : 'join-item btn'}
                       
                        
                        
                        key={page}
                    >{page +1 }</button>)
                }

                </div>
                 
                
            </div>
            
        </div>
    );
};

export default Apartments;