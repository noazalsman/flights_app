import React from "react";
import FollowedFlightCard from "./FollowedFlightCard";

function FollowedFlightsList(props) {
    return (
        <div className='d-flex justify-content-center flex-wrap w-100'>
            {props.flights.map((flight, index) => (
                <div key={index}>
                    <FollowedFlightCard flight={flight} index={index}/>
                </div>
            ))}
        </div>
    );
}

export default FollowedFlightsList;