import React from 'react'
import RoomFilter from '../components/RoomFilter';
import RoomList from "../components/RoomList";
import {RoomConsumer} from '../context';
import Loading from './Loading';

export default function RoomsContainer() {
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
