import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import BuildingLocation from "../../components/BuildingLocation/BuildingLocation";
import Coupons from "../../components/Coupons/Coupons";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <BuildingLocation></BuildingLocation>
            <Coupons></Coupons>
            
            
        </div>
    );
};

export default Home;