import React from "react";
import './searchResult.css';

import { SearchResults } from "./searchResults"
export const SearchResultsList = ({ results }) => {
    //const onEquipmentNumberClick = (e) => {
    //    debugger
    //};
    return <div id="ListOfEquipValues" className="results-list">
        {
            results.map((result, id) => {
                return <SearchResults result={result} key={id} />
            })
        }
    </div>
}
