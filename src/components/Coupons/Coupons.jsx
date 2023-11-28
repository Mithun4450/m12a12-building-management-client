import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import CouponCard from "../CouponCard/CouponCard";


const Coupons = () => {

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
        <div className="my-14">
            <div>
                <SectionTitle heading={"Introducing our exclusive discount coupons for tenants"} subHeading={"Exclusive Coupons & Discounts"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    coupons.map(coupon =><CouponCard key={coupon._id}
                    coupon={coupon}
                    ></CouponCard>)
                }
            </div>
            
        </div>
    );
};

export default Coupons;