import SectionTitle from "../SectionTitle/SectionTitle";
import map from "../../assets/map.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const BuildingLocation = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div className="my-24" id="contact">
            <SectionTitle 
                subHeading={"Reach Out to Us at"}
                heading={"Location & Contact Information"}
            >
            </SectionTitle>

            <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-5">
                <div className="w-3/4 lg:w-1/2" data-aos="fade-down">
                    <img className="w-full rounded-xl mb-4" src={map} alt="" />
                </div>
                <div className="w-3/4 lg:w-1/2 " data-aos="fade-down">
                    <address className="text-xl lg:text-2xl">
                    Concord Palace <br />
                    Block: SE (F), Plot:03, <br />
                    Gulshan Avenue, Gulshan-1, <br />
                    Dhaka:1212, Bangladesh <br />
                    Tel # +88 02 55045700 <br />
                    Fax # +88 02 55045709 <br />
                    E-mail # info@concordpalacebd.com
                    </address>
                </div> 
            </div>
            
        </div>
    );
};

export default BuildingLocation;