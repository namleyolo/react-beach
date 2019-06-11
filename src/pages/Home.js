import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from "react-router-dom";
import Services from "../components/Services";
const Home = () => {
    return (
    <>
      <Hero>
        <Banner title="Villa"  subTitle="starting in 200$">
            <Link to='/room' className="btn-primary">our rooms</Link>
        </Banner>
      </Hero> 
      <Services/>
    </>
    )
}

export default Home


// export default function Home() {
//   return (
//     <>
//       <Hero>
//         <Banner title="Villa"  subTitle="starting in 200$">
//             <Link to='/room' className="btn-primary">our rooms</Link>
//         </Banner>
//       </Hero> 
//       <Services/>
//     </>
//   )
// }

