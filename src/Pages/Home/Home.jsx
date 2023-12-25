import About from "../../components/About/About";
import Amenities from "../../components/Amenities/Amenities";
import Banner from "../../components/Banner/Banner";
import BuildingLocation from "../../components/BuildingLocation/BuildingLocation";
import Coupons from "../../components/Coupons/Coupons";
import Message from "../../components/Message/Message";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Amenities></Amenities>
            <Coupons></Coupons>
            <BuildingLocation></BuildingLocation>
            <Message></Message>
            
            
            
        </div>
    );
};

export default Home;