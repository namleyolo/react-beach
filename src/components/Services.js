import React, { Component } from 'react'
import Title from './Title';
import {FaBeer, FaCocktail, FaAdjust, FaHiking} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services : [
            {icon : <FaCocktail></FaCocktail>,
                title: "free cocktails",info : "lorem ispum john doe"},
            {icon : <FaBeer/>,
                title: "free cocktails",info : "lorem ispum john doe"},
            {icon : <FaAdjust/>,
                title: "free cocktails",info : "lorem ispum john doe"},
            {icon : <FaHiking/>,
                title: "Endless Hiking",info : "lorem ispum john doe"},
        ]
    }
    render() {
        return (
            <section className="services">
                {/* <div> */}
                    <Title title="services"/>
                {/* </div> */}
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return  <article key={index} className="services">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                    })}
                </div>
            </section>
            
        )
    }
}
