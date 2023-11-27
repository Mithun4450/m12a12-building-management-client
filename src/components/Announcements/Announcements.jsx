import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import AnnouncementCard from "../AnnouncementCard/AnnouncementCard";


const Announcements = () => {
    const axiosSecure = useAxiosSecure();

    const {data: announcements = [],  refetch} = useQuery({
        queryKey: ['announcements'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/announcements');
            return res.data;
            
        }
    })
    console.log(announcements)

    return (
       
        <div className="my-14 mx-6">
            <SectionTitle 
            subHeading={"Announcements & Insights"} 
            heading={"Catch Up on Our Latest Developments and Announcements"}>
            </SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                announcements.map(announcement => <AnnouncementCard key={announcement._id}
                announcement={announcement}
                ></AnnouncementCard>)
            }
            </div>

        </div>
        

        
        
        
        
        
    );
};

export default Announcements;