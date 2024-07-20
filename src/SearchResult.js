import React from "react";
import './searchResult.css';
export const SearchResultsList = ({ results }) => {
    //const onEquipmentNumberClick = (e) => {
    //    debugger
    //};
    return <div className="results-list">
        {
            results.map((result, id) => {
                return <div id="EquipValue" className="search-result-value" key={id}>{result.Description}</div>
            })
        }
    </div>
}
