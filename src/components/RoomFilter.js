import React, {useContext} from 'react'
import {RoomContext} from "../context"
import Title from "../components/Title"

export default function RoomFilter() {
    const context = useContext(RoomContext);
    const typesRoom = context.rooms.map(val => val.type);
    const uniqueTypesRoom = new Set (typesRoom);

    // console.log(typesRoom);
    // console.log(context);
    var roomTypes = [...uniqueTypesRoom, 'all'];
    // console.log(roomTypes);
    return (
        <section className="filter-container">
            <Title title="Search rooms"></Title>
            <form className="filter-form">
                <div className="from-group">
                    <label htmlFor="type" >room type</label>
                    <select name="type" id="type" value={context.type} className="form-control" onChange={context.handleChange} >
                        {roomTypes.map((val, index) => {return (
                            <option key={index} value={val}>
                                {val}
                            </option>
                          )
                        } )}
                    </select>
                </div>
            </form>
        </section>
    )
}
