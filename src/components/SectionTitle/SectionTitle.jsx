

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="my-5">
            <h3 className=" text-lg md:text-xl text-center font-semibold text-sky-600">***{subHeading}***</h3>
            <h1 className=" text-2xl md:text-4xl text-center font-bold ">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;