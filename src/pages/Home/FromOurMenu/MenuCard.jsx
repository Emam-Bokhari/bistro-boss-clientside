
const MenuCard = ({data}) => {
    console.log(data);
    const {name,image,recipe,price}=data||{}
    return (
        <div>
            
            <div className="flex items-center gap-5">
                <img className="w-[118px] h-[104px] rounded-none rounded-tr-[200px] rounded-b-[200px]" src={image}/>

                <div>
                    <h2>{name}</h2>
                    <p>{recipe}</p>
                </div>
                <p> ${price}</p>

            </div>

        </div>
    );
};

export default MenuCard;