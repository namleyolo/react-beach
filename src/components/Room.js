import React from 'react' ;
import {Link} from "react-router-dom";
import Proptypes from "prop-types";
import defaultImg from "../images/room-1.jpeg";
export default function Room({room}) {
    // console.log(room);
    console.log(room.slug);
    return (
        <article className="room">
            <div className="img-container">
                <img src={room.images[0] || defaultImg}></img>
                <div className="price-top">
                     <h6>${room.price}</h6>
                     <p>per night</p>
                </div>
                <Link to={`/rooms/${room.slug}`} className="btn-primary room-link">
                   Feature
                </Link>
            </div>
            <p className="room-info">{room.name}</p>
        </article>
    )
}
Room.propTypes = {
    room: Proptypes.shape({
        name : Proptypes.string.isRequired,

    })
}
