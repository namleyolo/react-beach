import React, {useContext } from 'react'
import RoomFilter from '../components/RoomFilter';
import RoomList from "../components/RoomList";
import {RoomConsumer, RoomContext} from '../context';
import Loading from './Loading';

export default function RoomsContainer() {
    // static contextType = RoomContext ;
    const contextType = useContext(RoomContext); 
    console.log(contextType);
    return (
        <RoomConsumer>
            {value => {
                console.log(value);
                if (value.loading) {
                    return <Loading></Loading>
                }
                return (
                    <div>
                        <RoomFilter rooms={value.rooms}></RoomFilter>
                        <RoomList rooms={value.sortedRooms}></RoomList>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}
