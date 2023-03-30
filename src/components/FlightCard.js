import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function FlightCard(props) {
    return (
        <Card style={{ width: '18rem', color: 'black', margin: '2%' }} key={props.key}>
            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/409/950/original/flying-airplane-silhouette-design-free-vector.jpg" />
            <Card.Body>
                <Card.Title>Flight id: {props.flight["id"]}</Card.Title>
                <Card.Text>
                    Source: {props.flight["itineraries"]["0"]["segments"]["0"]["departure"]["iataCode"]} <br/>
                    Stop at: {props.flight["itineraries"]["0"]["segments"]["0"]["arrival"]["iataCode"]} <br/>
                    Total Price: {props.flight["price"]["total"]} <br/>
                    Duration: {props.flight["itineraries"]["0"]["duration"]} <br/>
                    Last Ticketing Date: {props.flight["lastTicketingDate"]} <br/>
                    Number Of Bookable Seats: {props.flight["numberOfBookableSeats"]} <br/>
                </Card.Text>
                <Button variant="dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default FlightCard;