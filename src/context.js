import React, { Component } from 'react';
import items from "./data" ;
const RoomContext  = React.createContext();
// console.log("RoomContext",RoomContext.Provider);
class RoomProvider extends Component {
    state = {
        greeting : 'hello',
        name : 'Nam le',
        rooms : [],
        sortedRooms : [],
        featuredRooms : [],
        loading : true,
        type : 'all',
        capacity : 1,
        price : 0,
        minPrice : 0,
        maxPrice : 0,
        minSize : 0,
        maxSize : 0,
        breakfast : false,
        pets :  false
    }
    componentDidMount() {
        let rooms = this.formatData(items);
        // console.log(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true) ;
        let maxPrice = Math.max(...rooms.map(val => val.price));
        console.log(maxPrice)
        let minPrice = Math.min(...rooms.map(val => val.price));
        let maxSize = Math.max(...rooms.map(val => val.size));
        console.log(maxSize);

        this.setState({
            rooms, featuredRooms , sortedRooms : rooms, loading : false , price : maxPrice , maxPrice, maxSize })
    }
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>image.fields.file.url);
            let room = {...item.fields, images, id};
            // console.log(room)
            return room ;
        });
        return tempItems;
    }
    handleChange = e => {
        console.log(e.target.value);
        const type = e.target.type
        const value = e.type === "checkbox" ? e.target.checked : e.target.value ;
        const name = e.target.name 
        // console.log(type,name,value);
        this.setState({[name]: value}, this.filterRooms)
    }
    filterRooms = () => {
        let {rooms, type, capacity, price,minSize,maxSize,breakfast,pets} = this.state;
        console.log("state type;::",type);
        let tempRooms = [...rooms];
        if (type !== 'all') {
            // console.log("DIFFFF")
            tempRooms = tempRooms.filter(val => val.type === type)
        }
        if (capacity !== 1) {
            // console.log("DIFFFF")
            tempRooms = tempRooms.filter(val => val.capacity >= capacity)
        }
        this.setState({sortedRooms: tempRooms})
    } 

    getRoom = (slug) =>{
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug);
        return room; 
    };

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom : this.getRoom, handleChange : this.handleChange}}>
              {this.props.children}
            </RoomContext.Provider>
        )
    }
}   
const RoomConsumer = RoomContext.Consumer ;
export function withRoomConsumer(Component){
    return function ConsumerWrapper (props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value}> </Component>}
        </RoomConsumer>
    }
}

// console.log(RoomConsumer);
// console.log(RoomContext);
export {RoomProvider,RoomConsumer,RoomContext};