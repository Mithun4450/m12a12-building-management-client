

const CouponCard = ({coupon}) => {
    const {code, description} = coupon;
    return (
        <div>
            <div className="card h-44 w-72  text-info-content shadow-xl border border-rose-500 hover:bg-white">
                <div className="card-body  text-rose-500 ">
                    
                    <h2 >Coupon code: <br /> <span className=" text-xl font-extrabold ">{code}</span></h2>
                    <p className="text-xs">{description}</p>
                   
                </div>
            </div>

            
            
        </div>
    );
};

export default CouponCard;