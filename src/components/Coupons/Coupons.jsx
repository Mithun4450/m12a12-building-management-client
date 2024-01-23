import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import CouponCard from "../CouponCard/CouponCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "../../assets/Coupons.png"



const Coupons = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    const axiosSecure = useAxiosSecure();

    const {data: coupons = [],  refetch} = useQuery({
        queryKey: ['coupons'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/coupons/home');
            return res.data;
            
        }
    })
    console.log(coupons)

    return (
        <div className="mt-24 mb-96 md:my-24 " >
            <div>
                <SectionTitle heading={"Introducing our exclusive discount coupons for tenants"} subHeading={"Exclusive Coupons & Discounts"}></SectionTitle>
            </div>

            {/* <div>
                <img src={img} alt="" className="h-96 w-full" />
            </div> */}

            <div className="bg-cover bg-center h-[100vh] relative" style={{backgroundImage: `url(${img})`}}>

                <div className="grid grid-cols-1 md:grid-cols-3   gap-5  h-1/3 w-3/4  absolute bottom-0 left-24 "  data-aos="fade-down">
                {
                    coupons.map(coupon =><CouponCard key={coupon._id}
                    coupon={coupon}
                    ></CouponCard>)
                }
                </div>

            </div>
                
            
            
            
            
        </div>
    );
};

export default Coupons;