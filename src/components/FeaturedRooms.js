import React, { Component } from 'react' ;
import {RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        // const val = this.context;
        // const {name , greeting} = this.context ;
        // console.log(val);
        // console.log(rooms);
        let { loading ,featuredRooms } = this.context; 
        console.log(loading);
        console.log(featuredRooms);
        featuredRooms = featuredRooms.map(room => {
             return <Room key={room.id} room={room}></Room>
        })
        return (

            //   {/* <div>{val.greeting} from {val.name}</div> */}
            //   {/* <div> {greeting} from {name} </div> */}
                <section className="featured-rooms">
                    <Title title="featured rooms"/>
                    <div className="featured-rooms-center">
                        {loading? <Loading></Loading> : featuredRooms}
                    </div>
                </section>   
            //   <Room></Room>
     
        )
        
    }
}
