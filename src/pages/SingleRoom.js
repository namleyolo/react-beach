
import Banner from '../components/Banner'
import {Link } from 'react-router-dom';
import {RoomContext} from '../context';
// import Hero from '../components/Hero';
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
        const {name,breakfast,capacity,description,extras,featured,pets,price,size,slug,type,images} = room;
        const [mainImg, ...defaultImg] = images;
        if (!room) {
            return (
                <div className="error">
                    <h3>No Such room could be found ...</h3>
                    <Link to="/room" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            )
        };
        return (
            <>
            {/* <StyledComponent img={room.images[0] || this.state.defaultBcg}> */}
            <StyledComponent img={mainImg || this.state.defaultBcg}>
                <Banner title={` ${name} room`}>
                   <Link to="/room"className="btn-primary">
                       Back to rooms
                   </Link>
                </Banner>
            </StyledComponent>
            <section className="single-room">
                {/* <div className="single-room-images">{room.images.map((item,index) => { */}
                <div className="single-room-images">{defaultImg.map((item,index) => {
                    return <img key={index} src={item} alt={name}></img>
                })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>${price}</h6>
                        <h6>${size} SQFT</h6>
                        <h6>max capacity : {" "} {capacity >1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? "pets allowed " : "no pets allowed" }</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>      
            </section>
            <section className="room-extras">
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index} >- {" "} {item}</li>
                    } )}
                </ul>
            </section>
            </>        
        )
    }
}
