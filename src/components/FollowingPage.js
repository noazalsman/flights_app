import React, {useState, useEffect} from 'react'
import FollowedFlightsList from "./FollowedFlightsList";
import AddConf from "./AddConf";

function FollowingPage() {
    const [followed_flights, setFollowedFlights] = useState([]);

    // Sends a http request to the server to the /config/whitelist uri and
    // adds a country and date to follow in the db, according to params
    const add_dest_to_follow = async (country, date) => {
        const result = await fetch("http://localhost:80/config/whitelist", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({country: country, date: date}),
        })

        const resultInJson = await result.json();
        alert(resultInJson["message"])
    }



    // Sends a http request to the server to the /followed_flights uri and
    // gets the followed flights data from the db
    const get_followed = async () => {
        const result = await fetch("http://localhost:80/followed_flights", {
            method: 'GET'
        })

        const resultInJson = await result.json();
        console.log(resultInJson)
        setFollowedFlights(resultInJson)
    }

    useEffect(() => {
        //Runs on every render
        get_followed();
    }, []);


    return (
        <div>
            <div>
                <AddConf onAdd={add_dest_to_follow} />
            </div>
            <div className="results">
                <FollowedFlightsList flights={followed_flights} />
            </div>
        </div>
    )
}

export default FollowingPage;