

const CouponCard = ({coupon}) => {
    const {code, description} = coupon;
    return (
        <div>
            <div className="card   text-info-content shadow-xl border border-sky-300">
                <div className="card-body hover:bg-white text-white hover:text-sky-600">
                    
                    <h2 className="  font-bold">{code}</h2>
                    <p className="text-xs">{description}</p>
                   
                </div>
            </div>

            
            
        </div>
    );
};

export default CouponCard;