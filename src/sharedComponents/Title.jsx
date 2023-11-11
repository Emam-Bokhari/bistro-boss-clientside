
const Title = ({subHeading,heading}) => {
    return (
        <div className="space-y-2" >
            <h3 className="text-[#D99904] text-center" >{subHeading}</h3>
            <div className="flex justify-center" >
            <h2 className="text-center text-[#151515] uppercase font-semibold text-xl border-t-2 border-[#E8E8E8] w-[250px] border-b-2 p-3" >{heading}</h2>
            </div>
        </div>
    );
};

export default Title;