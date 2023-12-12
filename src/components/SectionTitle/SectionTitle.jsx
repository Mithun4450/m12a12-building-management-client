import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SectionTitle = ({subHeading, heading}) => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div data-aos="fade-down"  className="my-5">
            <h3 className=" text-lg md:text-xl text-center font-semibold text-sky-600">***{subHeading}***</h3>
            <h1 className=" text-2xl md:text-4xl text-center font-bold ">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;