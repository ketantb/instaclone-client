import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./card";

const Data = () => {
    const [userData, setUserData] = useState([])

    const fetchData = async () => {
        await axios
            .get('https://insta-server-yash.vercel.app/')
            .then((e) => setUserData(e))
    }

    useEffect(() => {
        fetchData();
    }, [])

    // console.log(userData)

    return(
        <Cards d = 'd'/>
    )
}

export default Data;

//     const data = [
//     {
//         name: "Siva",
//         location: "Bengaluru",
//         likes: 64,
//         description: "Kick start your career",
//         PostImage: "https://c1.wallpaperflare.com/preview/128/605/149/airplane-flight-plane-wing.jpg",
//         date: "10 Jan 2021",
//     },
//     {
//         name: "Neeraj",
//         location: "Pune",
//         likes: 30,
//         description: "Sample Description",
//         PostImage: "https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-12.jpg",
//         date: "15 March 2021",
//     },
//     {
//         name: "Rahul",
//         location: "Hyderabad",
//         likes: 90,
//         description: "Sample Description for Post",
//         PostImage: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg",
//         date: "21 April 2021",
//     }
// ]

// export const userCount = data.length;