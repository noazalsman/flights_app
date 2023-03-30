import React, {useState} from 'react'
import SearchBar from "./SearchBar";
import FlightsList from "./FlightsList";


function SearchPage() {
    const [flights, setFlights] = useState([]);


    // Sends an http request to the server to the flight_offers uri and
    // fetches the cheapest deals from the API using our server according to the params
    const search_deals = async (country, date) => {
        const result = await fetch("http://localhost:80/flight_offers?country=" + country + "&date=" + date, {
            method: 'GET'
        })

        const resultInJson = await result.json();
        console.log(resultInJson)
        setFlights(resultInJson)
    }

    return (
        <div>
            <div className="search">
                <SearchBar onSearch={search_deals} />
            </div>
            <div className="results">
                <FlightsList flights={flights} />
            </div>
        </div>
    )
}

export default SearchPage;