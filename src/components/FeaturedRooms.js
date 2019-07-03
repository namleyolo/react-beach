import React, { Component } from 'react' ;
import {RoomContext } from "../context";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const val = this.context;
        console.log(val);
        return (
           <div>Hello from FeaturedRooms {val}</div>
        )
        
    }
}
