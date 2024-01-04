import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Goal = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div className="my-14">
            <SectionTitle heading={"Elevating Concord Palace through Our Goals"}
            subHeading={"Building a Better Community Together"}   ></SectionTitle>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-5">
                <li data-aos="fade-right">
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    
                    <div className="text-lg font-black">Resident Satisfaction</div>
                    Ensuring a high level of satisfaction among residents by providing top-notch facilities, timely maintenance, and excellent service.
                    </div>
                    <hr/>
                </li>
                <li data-aos="fade-left">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    
                    <div className="text-lg font-black">Community Engagement</div>
                    Fostering a sense of community among residents through events, forums, and shared spaces within the building.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-right">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    
                    <div className="text-lg font-black">Safety and Security</div>
                    Implementing robust security measures and emergency protocols to ensure the safety of residents and their belongings.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-left">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    
                    <div className="text-lg font-black">Sustainability</div>
                    Striving towards environmentally friendly practices, such as efficient energy usage, recycling programs, and eco-conscious policies.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-right">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    
                    <div className="text-lg font-black">Efficient Management</div>
                    Streamlining administrative processes to handle agreements, payments, and maintenance requests effectively.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-left">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    
                    <div className="text-lg font-black">Continuous Improvement</div>
                    Seeking feedback and regularly evaluating services and amenities to enhance the overall living experience for residents.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-right">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    
                    <div className="text-lg font-black">Financial Stability</div>
                    Maintaining a healthy financial status to ensure the upkeep of the building, fund future improvements, and provide reliable services.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-left">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    
                    <div className="text-lg font-black">Attractiveness and Appeal</div>
                    Continuously enhancing the aesthetic appeal of the building and its surroundings to attract potential residents and retain existing ones.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-right">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                    
                    <div className="text-lg font-black">Legal Compliance</div>
                    Adhering to all legal and regulatory requirements to ensure a smooth and legally sound operation.
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-left">
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    
                    <div className="text-lg font-black">Adaptability and Innovation</div>
                    Embracing technological advancements and innovative solutions to improve services and amenities offered to residents.
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Goal;