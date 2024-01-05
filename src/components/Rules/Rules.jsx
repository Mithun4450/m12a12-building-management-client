import SectionTitle from "../SectionTitle/SectionTitle";

const Rules = () => {
    return (
        <div className="my-24">
            <SectionTitle heading={"Understanding Your Agreement and Community Rules"}
            subHeading={"Resident Guidelines"}
            ></SectionTitle>

            <div>
                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Rent Agreement related Terms & Conditions
                    </div>
                    <div className="collapse-content text-base"> 
                        <p> <span className="font-bold">Duration:</span> Lease agreements are typically for a minimum of one year and subject to renewal. <br />
                        <span className="font-bold">Rent Payments:</span> Rent is due on the first of each month and can be paid via approved methods outlined in your agreement. <br />
                        <span className="font-bold">Late Fees:</span>  Late payments may incur additional fees as outlined in your lease agreement.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Building Rules and Regulations
                    </div>
                    <div className="collapse-content text-base"> 
                     
                        <p> <span className="font-bold">Quiet Hours:</span> Residents are expected to maintain a quiet environment between 10:00 PM and 7:00 AM.<br />
                        <span className="font-bold">Amenities Use:</span> Shared facilities are available during designated hours. Residents are responsible for their guests' behavior and adherence to rules. <br />
                        <span className="font-bold">Parking: </span>   Each unit is allocated one parking spot. Additional parking is available for visitors in designated areas.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Maintenance and Repairs related Rules & Regulations
                    </div>
                    <div className="collapse-content text-base"> 
                     
                        <p> <span className="font-bold">Reporting Issues:</span> Residents are required to promptly report any maintenance or repair needs via the designated channels provided by the management.<br />
                        <span className="font-bold">Responsibilities:</span> Minor maintenance tasks, such as light bulb replacement, are the responsibility of the resident.<br />
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Legal Notices and Disclosures
                    </div>
                    <div className="collapse-content text-base"> 

                        <p> <span className="font-bold">Fair Housing: </span> Concord Palace complies with fair housing laws and does not discriminate based on race, color, religion, sex, familial status, national origin, or disability.<br />
                        <span className="font-bold">Security Deposit: </span> A security deposit equivalent to one month's rent is required and may be used for damages beyond normal wear and tear upon move-out.<br />
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Liabilities and Disclaimers
                    </div>
                    <div className="collapse-content text-base"> 
                        <p> <span className="font-bold">Liability Limitations:</span> Concord Palace is not liable for loss, damage, or theft of personal property.<br />
                        <span className="font-bold">Insurance:</span> Residents are encouraged to obtain renter's insurance to protect personal belongings.<br />
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Legal Compliance and Governing Laws
                    </div>
                    <div className="collapse-content text-base"> 
                     

                        <p> <span className="font-bold">Local Laws:</span> All rent agreements are subject to State/Local laws governing landlord-tenant relationships.<br />
                        <span className="font-bold">Governing Law:</span>  Any disputes arising from the lease agreement will be resolved under the jurisdiction of State.<br />
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse bg-info text-info-content focus:bg-primary focus:text-primary-content mb-3">
                    <div className="collapse-title font-bold text-xl">
                    Dispute Resolution
                    </div>
                    <div className="collapse-content text-base"> 
                        <p> <span className="font-bold">Mediation:</span> In case of disputes, both parties agree to attempt mediation before pursuing legal action.<br />
                       
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Rules;