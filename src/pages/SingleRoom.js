
import Banner from '../components/Banner'
import {Link } from 'react-router-dom';
import {RoomContext} from '../context';
import Hero from '../components/Hero';
import React, { Component } from 'react'
import StyledComponent from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {slug: this.props.match.params.slug}
    }
    // componentDidMount() {

    // }
    static contextType = RoomContext ;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if (!room) {
            return (
                <div className="error">
                    <h3>No Such room could be found ...</h3>
                    <Link to="/room" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            )
        }
        return (
            <>
            <StyledComponent img={room.images[0] || this.state.defaultBcg}>
                <Banner title={` ${room.name} room`}>
                   <Link to="/room"className="btn-primary">
                       Back to rooms
                   </Link>
                </Banner>
            </StyledComponent>
            <section className="single-room">
                <div className="single-room-images">{room.images.map((item,index) => {
                    return <img key={index} src={item} alt={room.name}></img>
                })}
                </div>      
            </section>
            </>        
        )
    }
}
