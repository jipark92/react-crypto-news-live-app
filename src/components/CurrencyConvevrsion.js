import {useState, useEffect} from 'react'
import axios from 'axios'

export default function CurrencyConvevrsion() {

    const cryptoCurrencies = ['BTC', 'ETH', 'USD', 'XRP', 'ADA', 'LTC'];
    const [firstCurrency, setFirstCurrency] = useState("BTC");
    const [secondCurrency, setSecondCurrency] = useState("USD")
    const [firstAmount, setFirstAmount] = useState(1)
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [exchangeRate, setExchangeRate] = useState([])
    const [firstCurrencyName , setFirstCurrencyName] = useState("")
    
    useEffect(()=>{
        convert()
    },[firstAmount])

    const convert = () => {
        //rapid api alpha vantage
        console.log('clicked')

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: firstCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondCurrency},
            headers: {
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
                'X-RapidAPI-Key': '70564a88a7msh6a060f1e6ddbb0bp1d6d61jsn7880edba9c6a'
                }
            };
            
            axios.request(options).then(function (response) {
                setConvertedAmount(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * firstAmount);
                setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
                setFirstCurrencyName(response.data["Realtime Currency Exchange Rate"]["2. From_Currency Name"])
            }).catch(function (error) {
                console.error(error);
            });
        }

    return (
        <div className="currency-conversion-container bg-secondary">
            <h2>Crypto Currency Converter</h2>
            <div className='conversion-calculator bg-dark text-light'>
                <div className='option-1'>
                AMOUNT:  
                    <input 
                        type="number"
                        name="currency-amount-1"
                        value={firstAmount}
                        onChange={(e)=>setFirstAmount(e.target.value)}
                    />
                    <select
                        name="currency-1-option"
                        value={firstCurrency}
                        onChange={(e)=>setFirstCurrency(e.target.value)}
                    >
                        {cryptoCurrencies.map((crypto,index)=><option key={index}>{crypto}</option>)}
                    </select>
                    <h5>&#8649;</h5>
                    <select
                        name="currency-2-option"
                        value={secondCurrency}
                        onChange={e=>setSecondCurrency(e.target.value)}
                    >
                        {cryptoCurrencies.map((crypto,index)=><option key={index}>{crypto}</option>)}
                    </select>
                </div>

                <div className='converted-rate'>
                    <h3><b>{firstAmount} {firstCurrency} = {convertedAmount} {secondCurrency}</b></h3>
                </div>

                {/* <div className='converted-result-container'>
                    <button onClick={convert}>CONVERT</button>
                </div> */}

                <div className='exchange-rate-container'>
                    <h5>Exchange Rate</h5>
                    <p>1 {firstCurrencyName}({firstCurrency}) = ${exchangeRate}</p>
                </div>

            </div>
        </div>    
    )
}