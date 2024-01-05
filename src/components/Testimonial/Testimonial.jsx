import rabi from "../../assets/rabi.png"
import nazrul from "../../assets/nazrul.png"
import sajib from "../../assets/sajib.png"
import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonial = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div className="my-24">
            <SectionTitle heading={"Hear What Our Community Says About Living at Concord Palace"} subHeading={"Residents' Voices"}></SectionTitle>
            
            <figure className="max-w-screen-md mx-auto text-center mb-14" data-aos="fade-down" >
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-xl md:text-2xl italic font-medium text-gray-900 dark:text-white">"Living in Concord Palace has been an absolute delight! The staff is incredibly friendly and responsive, and the amenities exceed my expectations. I love the sense of community here."</p>
                </blockquote>
                <figCaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse" data-aos="fade-down">
                    <img className="w-6 h-6 rounded-full" src={rabi} alt="" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Rabindranath Tagore</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Apartment No: G1001</cite>
                    </div>
                </figCaption>
            </figure>
            <figure className="max-w-screen-md mx-auto text-center mb-14" data-aos="fade-down">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className=" text-xl md:text-2xl italic font-medium text-gray-900 dark:text-white">"I'm thrilled to call Concord Palace home. The management team goes above and beyond, and the building's facilities are top-notch. It's more than just a place to live; it's a community."</p>
                </blockquote>
                <figCaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src={nazrul} alt="" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Nazrul</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Apartment No: T602</cite>
                    </div>
                </figCaption>
            </figure>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-xl md:text-2xl italic font-medium text-gray-900 dark:text-white">"The atmosphere here is fantastic! From the beautifully maintained common areas to the helpful staff, living here has made my relocation stress-free. I couldn't have asked for a better place."</p>
                </blockquote>
                <figCaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src={sajib} alt="" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Sajib Saifullah</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Apartment No: A102</cite>
                    </div>
                </figCaption>
            </figure>

            
        </div>
    );
};

export default Testimonial;