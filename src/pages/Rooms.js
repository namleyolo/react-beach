import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from "react-router-dom";
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
      <> 
        <Hero hero="roomsHero">
          <Banner title="our rooms"  subTitle="royal room option">
            <Link to='/' className="btn-primary">come back Home pages</Link>
          </Banner>
        </Hero>
        <RoomsContainer></RoomsContainer>
      </> 
  )
}

export default Rooms
