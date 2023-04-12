import React from "react";
import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
function ItemData({itemImages,ItemNama,Itemdesc}){

    return (
        <div className="card">
            <ItemImage image={itemImages}/>
            <ItemBody ItemNama={ItemNama} Itemdesc={Itemdesc}/>
        </div>
    )
}



export default ItemData;

