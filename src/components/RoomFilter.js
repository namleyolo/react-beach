import React from 'react'
import Room from './Room'

export default function RoomFilter({rooms}) {
    console.log(rooms);
    return (
        <div className="roomslist">
            Hello from Filter ROom
            <div className="roomlist-center">
                {rooms.map(val =>{
                    return <Room key={val.id} room={val}  />
                })}
            </div>
        </div>
    )
}
