import React, { Component } from 'react' ;
import {RoomContext } from "../context";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const val = this.context;
        // const {name , greeting} = this.context ;
        console.log(val);
        return (
            <>
              {/* <div>{val.greeting} from {val.name}</div> */}
              {/* <div> {greeting} from {name} </div> */}
           </>
        )
        
    }
}
