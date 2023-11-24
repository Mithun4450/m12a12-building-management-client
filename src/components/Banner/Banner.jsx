import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import building from "../../assets/building.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";


const Banner = () => {


    return (
        <div className="h-[80vh]" >
             <Carousel className="h-[80vh]" autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
                <div>
                    <img src={building} className="h-[80vh]"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} className="h-[80vh]" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img2} className="h-[80vh]" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="h-[80vh]" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} className="h-[80vh]" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
         
            

            
        </div>
    );
};

export default Banner;