import axios from "axios"
import {useState, useEffect} from 'react'
import { Spinner} from 'react-bootstrap';

export default function CryptoRanking() {

    const [rankingList, setRankingList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://crypto-ranking-data.p.rapidapi.com/market/list/1/100',
            headers: {
                'X-RapidAPI-Host': 'crypto-ranking-data.p.rapidapi.com',
                'X-RapidAPI-Key': '70564a88a7msh6a060f1e6ddbb0bp1d6d61jsn7880edba9c6a'
                }
            };
            
            axios.request(options).then(function (response) {
                setRankingList(response.data);
                setLoading(false)
            }).catch(function (error) {
                console.error(error);
            });
    },[])
    
    const showRankingList = rankingList.map((list)=>{
        return(
            <div className="ranking-cards" key={list.cmcRank}>
                <div>#{list.cmcRank} <img src={list.logo}/> <b>{list.name}</b> ({list.symbol})</div>
                <div>
                    <b>Price:</b> ${list.quotes[0].price} 
                    | <b>24H Volume:</b>${list.quotes[0].volume24h} | 
                    <b>24H Change:</b>${list.quotes[0].percentChange24h}
                </div>
            </div>
        )
    })

    return (
        <div className="ranking-container">
            <h1>Cryptocurrency Rank</h1>
            {loading?
            <Spinner 
                animation="border" 
                role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :showRankingList}
        </div>
    )
}