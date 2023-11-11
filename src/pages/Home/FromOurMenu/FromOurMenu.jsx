import { useEffect, useState } from "react";
import Title from "../../../sharedComponents/Title";
import MenuCard from "./MenuCard";

const FromOurMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            setMenu(data);
        })
    },[])
    return (
        <div className="my-10">
            
            <Title subHeading={"---Check it out---"} heading={"From our menu"} />

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5" >
                {menu?.map((item,index)=><MenuCard key={index} data={item}  />)}
            </div>
            
            <div className="text-center" >
            <button className="border-b-2 border-black rounded-md px-3 py-3 hover:bg-black hover:text-white uppercase transition ease-in-out delay-150 " >View Full Menu</button>
            </div>


        </div>
    );
};

export default FromOurMenu;