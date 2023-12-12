import SectionTitle from "../SectionTitle/SectionTitle";
import building from "../../assets/building.png"


const About = () => {
    return (
        <div className="my-14">
            <SectionTitle 
                subHeading={"About Concord Palace"}
                heading={"Where Luxury Meets Lifestyle"}
            >
            </SectionTitle>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-5">
                <div className="w-3/4 lg:w-1/2" data-aos="fade-down">
                    <img className="w-full rounded-xl mb-4" src={building} alt="" />
                </div>
                <div className="w-3/4 lg:w-1/2 " data-aos="fade-down">
                    <p className="text-justify">Concord Palace stands as an architectural marvel, an embodiment of contemporary elegance nestled in a vibrant neighborhood. Boasting a collection of modern, thoughtfully designed apartments, it offers an unparalleled living experience. Each unit is a sanctuary of comfort and style, crafted with meticulous attention to detail. <br /> 

                    The apartments showcase sleek, open-concept layouts with expansive windows, inviting natural light to dance across the chic interiors. High-end finishes, from polished hardwood floors to designer fixtures, elevate the ambiance. Spacious kitchens adorned with state-of-the-art appliances beckon culinary enthusiasts to indulge their gastronomic passions. <br /> 

                    For those seeking relaxation, bedrooms offer serene retreats, while luxurious bathrooms adorned with premium fittings promise a spa-like experience. Select units feature private balconies or terraces, providing enchanting views of the cityscape or lush surroundings. <br /> 

                    Concord Palace prides itself on more than just lavish interiors; it fosters a community-oriented environment. Residents enjoy access to exclusive amenities, including a fitness center, communal lounges, and meticulously landscaped outdoor spaces perfect for social gatherings or quiet contemplation. <br /> 

                    Conveniently located near bustling entertainment hubs and transportation, Concord Palace offers the epitome of urban living fused with tranquility—a place where tenants can savor both the vibrancy of the city and the comforts of home.</p>
                </div>
            </div>
            
        </div>
    );
};

export default About;