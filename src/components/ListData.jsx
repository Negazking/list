import React from "react";
import ItemData from "./ItemData";
function ListData({dataList, onDelete}){
    
    return (
        <div>
            {
                dataList.map((foods) => (
                    <ItemData {...foods} key={foods.itemImages}/>
                ))
                }
      </div>
)
}



export default ListData;

