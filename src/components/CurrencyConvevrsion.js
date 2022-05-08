import {useState} from 'react'
import axios from 'axios'

export default function CurrencyConvevrsion() {

    const cryptoCurrencies = ['BTC', 'ETH', 'USD', 'XRP', 'ADA', 'LTC'];
    const [firstCurrency, setFirstCurrency] = useState("BTC");
    const [secondCurrency, setSecondCurrency] = useState("USD")
    const [firstAmount, setFirstAmount] = useState(1)
    const [convertedAmount, setConvertedAmount] = useState(0)
    
    
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
            }).catch(function (error) {
                console.error(error);
            });
        }

    return (
        <div className="currency-conversion-container">
            <h3>Crypto Currency Converter</h3>
            <div className='conversion-calculator'>
                <div className='option-1'>
                Cryptocurrency 1:  
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
                </div>

                <div className='option-2'>
                Cryptocurrency 2:
                    <input 
                        type="number"
                        name="currency-amount-2"
                        value={convertedAmount}
                        onChange={e=>setConvertedAmount(e.target.value)}
                    />
                    <select
                        name="currency-2-option"
                        value={secondCurrency}
                        onChange={e=>setSecondCurrency(e.target.value)}
                    >
                        {cryptoCurrencies.map((crypto,index)=><option key={index}>{crypto}</option>)}
                    </select>
                </div>

                <div className='rate'>
                    BTC = 
                    USD = 
                </div>

                <div className='converted-result-container'>
                    <button onClick={convert}>CONVERT</button>
                </div>

            </div>
        </div>    
    )
}
