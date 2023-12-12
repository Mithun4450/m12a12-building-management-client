

const CouponCard = ({coupon}) => {
    const {code, description} = coupon;
    return (
        <div>
            <div className="card  h-44 bg-info text-info-content">
                <div className="card-body">
                    
                    <h2 className="card-title text-lg">Coupon Code:<span className="text-rose-600 font-bold" >{code}</span> </h2>
                    <p>{description}</p>
                   
                </div>
            </div>
            
        </div>
    );
};

export default CouponCard;