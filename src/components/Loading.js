import React  from 'react';
import logo from "../images/gif/loading-arrow.gif" ;



export default function Loading() {

        return ( 
        <div className="text-center">
            <p> Loading ...</p>
            <img  src={logo} alt="Smiley face" height="100" width="100" />     
        </div>
        )
    // }
}
