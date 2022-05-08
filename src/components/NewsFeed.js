import axios from 'axios'
import {useEffect, useState} from 'react'
import { Card , Button, Spinner} from 'react-bootstrap';

export default function NewsFeed() {

    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
                'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
                'X-RapidAPI-Key': '70564a88a7msh6a060f1e6ddbb0bp1d6d61jsn7880edba9c6a'
                }
            };
            
            axios.request(options).then(function (response) {
                setNewsData(response.data);
                setLoading(false)
            }).catch(function (error) {
                console.error(error);
        });
    },[])


    const showNews = newsData.map((news)=>{
        return (
            <div className='news-cards-container'>
                <Card>
                    <Card.Header>{news.source}</Card.Header>
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>
                            Summary of the article here 
                            Summary of the article here
                        </Card.Text>
                        <Button variant="primary" href={news.url} target="_blank">Source</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })
    
    return (
        <div className="news-feed-container bg-secondary">
            <div className='news-title-container'>
                <h1>Cryptocurrency News Feed</h1>
            </div>
            {loading? 
            <Spinner 
                animation="border" 
                role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :showNews}
        </div>
    )
}