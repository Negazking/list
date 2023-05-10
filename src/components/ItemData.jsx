import React from "react";
import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
import DeleteButton from "./DeleteButton"

function ItemData({itemImages,ItemNama,Itemdesc}){

    return (
        <div className="card">
            <ItemImage image={itemImages}/>
            <ItemBody ItemNama={ItemNama} Itemdesc={Itemdesc}/>
        </div>
    )
}



export default ItemData;

