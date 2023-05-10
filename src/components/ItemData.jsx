import React from "react";
import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
import DeleteButton from "./DeleteButton"

function ItemData({itemImages,ItemNama,Itemdesc, id , onDelete}){

    return (
        <div className="card">
            <ItemImage image={itemImages}/>
            <ItemBody ItemNama={ItemNama} Itemdesc={Itemdesc}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}



export default ItemData;

