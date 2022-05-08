import {useState, useEffect} from 'react'
import axios from 'axios'
import { Spinner} from 'react-bootstrap';

export default function Nft() {

    const [loading, setLoading] = useState(true)
    const [nftData,setNftData] = useState([])

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://opensea13.p.rapidapi.com/assets',
            params: {
                collection_slug: 'cryptopunks',
                order_direction: 'desc',
                limit: '20',
                include_orders: 'false'
                },
                headers: {
                'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
                'X-RapidAPI-Key': '70564a88a7msh6a060f1e6ddbb0bp1d6d61jsn7880edba9c6a'
                }
            };
            
            axios.request(options).then(function (response) {
                setNftData(response.data.assets);
                setLoading(false)
            }).catch(function (error) {
                console.error(error);
        });
    })

    const showNft = nftData.map((nft)=>{
        return (
            <div className='nft-card' key={nft.id}>
                <img src={nft.image_url}/>
                {nft.name}
            </div>
        )
    })

    return (
        <div className='nft-container bg-secondary'>
            <h1>NFT</h1>
            {loading?
            <Spinner 
                animation="border" 
                role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :showNft}
        </div>
    )
}