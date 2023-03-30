import React, {useState} from 'react'
import Button from "react-bootstrap/Button";


function SearchBar(props) {

    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");

    const handleCountry = (e) => {
        e.preventDefault();
        setCountry(e.target.value);
    };

    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };

    function search() {
        props.onSearch(country, date)
    }

    return (
        <div>
            <h3>Search for the 8 cheapest deals from TLV</h3>
            <div className="d-flex justify-content-center align-items-center w-75 searchbar">
                <input
                    className="form-control w-50 p-2"
                    type="search"
                    placeholder="Destination Code 'NYC'..."
                    onChange={handleCountry}
                    value={country} />
                <input
                    className="form-control w-50 p-2"
                    type="search"
                    placeholder="Departure date 'YYYY-MM-DD'..."
                    onChange={handleDate}
                    value={date} />
                <Button variant="dark" onClick={search}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor"
                         className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default SearchBar;