import { data } from "./data";
// import { userCount } from "./data"
import "../styles/card.css"
import { useState } from "react";

const Cards = () => {
    
    const [likecount, setLikecount] = useState(0)
    return (
        <>
            <section className="cards">
                <div>
                    {data.map((items, index) => {
                        const { name, location, likes, description, PostImage, date } = items;
                        return (
                            <div className="card" key={index}>
                                <div className="card-header">
                                    <div>
                                        <div className="user-name">{name}</div>
                                        <div className="user-location">{location}</div>
                                    </div>
                                    <div className="more-icon-block">
                                        <img className="more-icon" src="Assets/more_icon.jpg" alt="more-icon" />
                                    </div>
                                </div>
                                <div><img id="post-img" src={PostImage} alt="Avatar" /></div>
                                <div className="likebtn-share-date-block">
                                    <div className="like-share-block">
                                        <div><img className="heart-icon" src="Assets/heart.jpg" alt="heart-icon" onClick={() => {setLikecount(likecount + 1)}}/></div>
                                        <div><img className="share-icon" src="Assets/share.jpg" alt="share-icon" /></div>
                                    </div>
                                    <div className="date">
                                        {date}
                                    </div>
                                </div>
                                {/* <div className="like-count">{likes} likes</div> */}
                                <div className="like-count">{likecount} likes</div>
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