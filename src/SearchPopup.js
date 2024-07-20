import React, { useState} from 'react';
import { FaFilter } from "react-icons/fa"
import "./search.css"

export const Filter = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        const urlAPI = "http://localhost:2190/api/v1/gateEntry/getEquipmentListOfValues?type=GI&searchText=&depotId=22844&page=1&pageSize=10000"
        fetch(urlAPI)
            .then((response) => response.json())
            .then((json) => {
                const results = json.Items.filter((user) => {
                    return value && user && user.Description && user.Description.toLowerCase().includes(value)
                });
                setResults(results)
            })
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className="input-wrapper">
            <FaFilter id="search-icon"/>
            <input id="EquipmentNumber" placeholder="Enter Equipment Number" value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
