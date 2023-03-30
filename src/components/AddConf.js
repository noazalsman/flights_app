import React, {useState} from 'react'
import Button from "react-bootstrap/Button";


function AddConf(props) {

    const [country_to_add, setAddCountry] = useState("");
    const [date_to_add, setAddDate] = useState("");

    const handleCountry = (e) => {
        e.preventDefault();
        setAddCountry(e.target.value);
    };

    const handleDate = (e) => {
        e.preventDefault();
        setAddDate(e.target.value);
    };

    function add() {
        props.onAdd(country_to_add, date_to_add)
    }

    return (
        <div className="justify-content-center add-follow">
            <h5>Add a destination and date to follow the cheapest flight there:</h5>
            <div className="d-flex justify-content-center align-items-center w-50">
                <input
                    className="form-control w-50 p-2"
                    type="search"
                    placeholder="Destination Code 'NYC'..."
                    onChange={handleCountry}
                    value={country_to_add} />
                <input
                    className="form-control w-50 p-2"
                    type="search"
                    placeholder="Departure date 'YYYY-MM-DD'..."
                    onChange={handleDate}
                    value={date_to_add} />
                <Button variant="dark" onClick={add}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default AddConf;