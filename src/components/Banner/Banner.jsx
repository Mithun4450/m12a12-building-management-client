import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import building from "../../assets/building.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";


const Banner = () => {


    return (
        <div className="h-[80vh] " >
             <Carousel className="h-[80vh] rounded-lg" autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
                <div className="relative">
                    <img src={building} className="h-[80vh] rounded-lg "/>
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-2 md:space-y-4 lg:space-y-6 pl-14 ">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-left font-bold">Welcome to our Accord Palace</h1>
                            <p className="text-white text-left text-xs md:text-sm lg:text-lg ">Manage easily your apartment needs with flexibility and exclusive support. Save time and money. Ideal for you and your family.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-sky-600 border-none text-white">Get to know us</button>
                                <button className="btn btn-secondary">Use Coupon Code CP15 <br /> to get 15% discount</button>
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img src={img1} className="h-[80vh] rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-2 md:space-y-4 lg:space-y-6 pl-14 ">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-left font-bold">Welcome to our Accord Palace</h1>
                            <p className="text-white text-left text-xs md:text-sm lg:text-lg ">Manage easily your apartment needs with flexibility and exclusive support. Save time and money. Ideal for you and your family.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-sky-600 border-none text-white">Get to know us</button>
                                <button className="btn btn-secondary">Use Coupon Code CP15 <br /> to get 15% discount</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img2} className="h-[80vh] rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-2 md:space-y-4 lg:space-y-6 pl-14 ">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-left font-bold">Welcome to our Accord Palace</h1>
                            <p className="text-white text-left text-xs md:text-sm lg:text-lg ">Manage easily your apartment needs with flexibility and exclusive support. Save time and money. Ideal for you and your family.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-sky-600 border-none text-white">Get to know us</button>
                                <button className="btn btn-secondary">Use Coupon Code CP15 <br /> to get 15% discount</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img3} className="h-[80vh] rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-2 md:space-y-4 lg:space-y-6 pl-14 ">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-left font-bold">Welcome to our Accord Palace</h1>
                            <p className="text-white text-left text-xs md:text-sm lg:text-lg ">Manage easily your apartment needs with flexibility and exclusive support. Save time and money. Ideal for you and your family.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-sky-600 border-none text-white">Get to know us</button>
                                <button className="btn btn-secondary">Use Coupon Code CP15 <br /> to get 15% discount</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img4} className="h-[80vh] rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-2 md:space-y-4 lg:space-y-6 pl-14 ">
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-left font-bold">Welcome to our Accord Palace</h1>
                            <p className="text-white text-left text-xs md:text-sm lg:text-lg ">Manage easily your apartment needs with flexibility and exclusive support. Save time and money. Ideal for you and your family.</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-sky-600 border-none text-white">Get to know us</button>
                                <button className="btn btn-secondary">Use Coupon Code CP15 <br /> to get 15% discount</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
         
            

            
        </div>
    );
};

export default Banner;