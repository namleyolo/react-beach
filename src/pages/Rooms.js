import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from "react-router-dom";

const Rooms = () => {
    return  <Hero>
    <Banner title="rooms"  subTitle="royal room option">
        <Link to='/' className="btn-primary">come back Home pages</Link>
    </Banner>
  </Hero> 
}

export default Rooms
