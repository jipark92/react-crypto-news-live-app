import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'
import CurrencyConvevrsion from './components/CurrencyConvevrsion'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<NewsFeed/>}/>
                <Route path='/conversion' element={<CurrencyConvevrsion/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
