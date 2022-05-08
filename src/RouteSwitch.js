import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'
import CurrencyConvevrsion from './components/CurrencyConvevrsion'
import CryptoRanking from './components/CryptoRanking'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<NewsFeed/>}/>
                <Route path='/converter' element={<CurrencyConvevrsion/>}/>
                <Route path='/ranking' element={<CryptoRanking/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}