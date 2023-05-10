import React from "react";
import ItemData from "./ItemData";
function ListData({dataList, onDelete}){
    
    return (
        <div>
            {
                dataList.map((foods) => (
                    <ItemData key={foods.id} id={foods.id} onDelete={onDelete} {...foods} />
                ))
                }
      </div>
)
}



export default ListData;

