import React from "react";
import Card from 'react-bootstrap/Card';


function FollowedFlightCard(props) {
    return (
        <Card style={{ width: '18rem', color: 'black', margin: '10px'}}>
            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/409/950/original/flying-airplane-silhouette-design-free-vector.jpg" />
            <Card.Body>
                <Card.Title>Flight id: {props.index}</Card.Title>
                <Card.Text>
                    Destination: {props.flight["country"]} <br/>
                    Date: {props.flight["date"]} <br/>
                    Total Price: {props.flight["price"]} <br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FollowedFlightCard;