import React from "react";

function DeleteButton({id,onDelete}){
    return <button className="data-item_delete but" onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;