import React, { useEffect , useState } from 'react'
import axios from "axios"
import './Meme.css';

const Meme = () => {
    

    const [data, setData] = useState([]);
    
    const randomValue = Math.floor(Math.random() * 100) + 1;


    const getMemeData = async() =>{
        try {
            const response = await axios.get("https://api.imgflip.com/get_memes");
            // console.log(response.data);  
            const actualData = await response.data;
            // console.log(actualData);
            console.log(actualData.data.memes[0]);
            setData(actualData.data.memes[randomValue]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMemeData();
    }, [])
    

    return (
        <>
        <section>

            <h1>MEME Page</h1>
            <ul>
                <li className="card">
                    <div className='card--main'>
                        <img src={data.url} alt = "Meme"/>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Meme