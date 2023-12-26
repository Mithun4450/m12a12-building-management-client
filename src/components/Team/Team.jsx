import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import TeamMember from "../TeamMember/TeamMember";


const Team = () => {
    const axiosPublic = useAxiosPublic();

    
    const {data: team = []} = useQuery({
        queryKey: ['team'],
        queryFn: async() =>{
            const res = await axiosPublic.get("/team")
            return res.data
        }
    })

    console.log(team)

    return (
        <div className="my-14">
            <SectionTitle heading={ "Committed Professionals Ensuring Your Comfort and Satisfaction"}
            subHeading={"Meet Our Dedicated Team"}
            ></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    team.map(person => <TeamMember key={person._id}
                    person={person}
                    ></TeamMember>)
                }

            </div>
            
        </div>
    );
};

export default Team;