import React from "react";
import ItemData from "./ItemData";
import DataHewan from "../utils/data";
function ListData(){
    
    return (
        <div>
            {
                DataHewan.map((foods) => (
                    <ItemData {...foods} key={foods.itemImages}/>
                ))
                }
      </div>
)
}



export default ListData;

