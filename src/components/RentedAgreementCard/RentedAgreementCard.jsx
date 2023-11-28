import React from 'react';

const RentedAgreementCard = ({rentedAgreement}) => {
    const {block_name, floor_no, apartment_no, agreement_accept_date
    } = rentedAgreement;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className=" text-lg md:text-xl mb-2"> <span className="font-bold ">Agreement accept date: </span>{agreement_accept_date}</p> 
                    <h1 className="text-lg md:text-xl "><span className="font-bold ">Rented apartment info:</span></h1>
                    <p className="text-base "><span className="font-semibold ">Block Name: </span>{block_name}</p> 
                    <p className="text-base "><span className="font-semibold ">Floor no: </span>{floor_no} </p> 
                    <p className="text-base "><span className="font-semibold ">Room no: </span>{apartment_no} </p> 
                </div>
            </div>
        </div>
    );
};

export default RentedAgreementCard;