import React from 'react'
import Room from "./Room"

export default function RoomList({rooms}) {
    if (rooms.length === 0) {
        return (
            <p>Empty search</p>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(val => {
                    return <Room key={val.id} room={val}></Room>
                })}
            </div>
        </section>
    )
}
