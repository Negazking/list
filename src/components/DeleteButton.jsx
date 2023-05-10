import React from "react";

function DeleteButton({id,ondelete}){
    return <button className="data-item_delete but" onClick={() => ondelete(id)}>X</button>
}

export default DeleteButton;