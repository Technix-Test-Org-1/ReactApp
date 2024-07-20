import React from "react";
import './searchResult.css';
export const SearchResults = ({ result }) => {
    const onEquipmentNumberClick = (e,i,j) => {
        debugger
       document.getElementById("EquipmentNumber").value = j;
    }
    return <div className="search-result-value" onClick={(event) => onEquipmentNumberClick(event, this, result.Description)}>{result.Description} </div>
}