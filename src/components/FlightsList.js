import React from "react";
import FlightCard from "./FlightCard";

function FlightsList(props) {
    return (
        <div className='d-flex justify-content-center flex-wrap w-100'>
            {props.flights.map((flight, index) => index < 8 && (
                    <FlightCard flight={flight} key={index}/>
            ))}
        </div>
    );
}

export default FlightsList;