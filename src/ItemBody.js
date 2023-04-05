import React from "react";
function ItemBody({ItemNama,Itemdesc}){

    return (
        <div>
            <p className="subjudul">{ItemNama}</p>
            <p className="text">{Itemdesc}</p>
        </div>
    )
}



export default ItemBody;

