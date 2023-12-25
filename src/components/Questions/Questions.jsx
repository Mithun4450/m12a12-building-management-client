import SectionTitle from "../SectionTitle/SectionTitle";


const Questions = () => {
    return (
        <div className="my-14">
            <SectionTitle heading={"Find Answers to Common Queries and Get Assistance"}
            subHeading={ "Need Help? Explore Our Frequently Asked Questions"}
            ></SectionTitle>

            <div>

                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                How can I apply for a rental apartment in Concord Palace?
                </div>
                <div className="collapse-content"> 
                    <p>To apply for a rental apartment, navigate to the "Apartments" section on our website. Browse through the available listings, select the apartment of your choice, and click on the "Request for Agreement" button. Admin will review your request promptly.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                What amenities are included with the apartments?
                </div>
                <div className="collapse-content"> 
                    <p>Concord Palace offers a range of amenities such as a fully-equipped gymnasium, a swimming pool, secured parking facilities, a communal lounge, playgrounds, and designated pet-friendly zones. These amenities vary based on the type of apartment and are designed to enhance your living experience.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                How can I make a payment for my rent or utilities?
                </div>
                <div className="collapse-content"> 
                    <p>You can make payments conveniently through our website. Simply log in to your account and navigate to the "User Dashboard" or "Member Dashboard." Select the "Make Payment" option and follow the instructions provided. We accept various payment methods, including credit/debit cards, for your convenience.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Can I schedule a tour of the building and available apartments?
                </div>
                <div className="collapse-content"> 
                    <p>Yes, we encourage interested individuals to schedule a tour of our facilities. Please contact our administration or use the "Contact Us" form on our website to request a tour. Our team will arrange a suitable time for you to visit and explore the building and available apartments.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                How can I report maintenance issues or request repairs?
                </div>
                <div className="collapse-content"> 
                    <p>For any maintenance-related issues or repair requests, please reach out to our maintenance team through the "Maintenance Requests" section in your dashboard or contact our support team directly. Describe the issue in detail, and our team will promptly address and resolve the matter.</p>
                </div>
                </div>

            </div>
        </div>
        
    );
};

export default Questions;