import { DummyData } from "./data";
// import { userCount } from "./cardData"
import "../styles/card.css"
import { useState } from "react";
import { BsThreeDots, BsHeart } from 'react-icons/bs';
import { SlPaperPlane } from 'react-icons/sl';

const Cards = ({data}) => {
    console.log(data)
    const cardData = data || DummyData
    console.log(cardData)
    if(!cardData){
        return(
            <>
            <h1>Loading...</h1>
            </>
        )
    }
    return ( 
        <>
             <section className="cards">
                <div>
                    {cardData.reverse().map((items) => {
                        const { date, description, id, likes, location, image, name } = items;
                        return (
                            <div className="card" key={id}>
                                <div className="card-header">
                                    <div>
                                        <div className="user-name">{name}</div>
                                        <div className="user-location">{location}</div>
                                    </div>
                                    <div className="more-icon-block">
                                        <BsThreeDots className="more-icon"/>
                                    </div>
                                </div>
                                <div><img id="post-img" src={image} alt="Avatar" /></div>
                                <div className="likebtn-share-date-block">
                                    <div className="like-share-block">
                                        <div>
                                            <BsHeart className="heart-icon"/>
                                        </div>
                                        <div>
                                            <SlPaperPlane className="share-icon"/>
                                        </div>
                                    </div>
                                    <div className="date">
                                        {date}
                                    </div>
                                </div>
                                <div className="like-count">{likes} likes</div>
                                <div className="description">{description}</div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Cards;