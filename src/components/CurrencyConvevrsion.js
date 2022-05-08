import React from 'react'

export default function CurrencyConvevrsion() {

    const cryptoCurrencies = [];

    return (
        <div className="currency-conversion-container">
            Currency conversion
            <div className='conversion-calculator'>
                First Currency
                <div className='option-1'>
                    <input 
                        type="number"
                        name="currency-amount-1"
                        value={""}
                    />
                    <select
                        name="currency-1-option"
                        value={""}
                    />
                </div>
                Second Currency
                <div className='option-2'>
                    <input 
                        type="number"
                        name="currency-amount-2"
                        value={""}
                    />
                    <select
                        name="currency-2-option"
                        value={""}
                    />
                </div>
            </div>
        </div>    
    )
}
