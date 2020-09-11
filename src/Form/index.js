import React, { useState } from 'react';
import { useCurrencies } from '../useCurrencies/useCurrencies';
import { FormElement, Loading, ButtonElement, InputElement, SelectElement } from './styled';

const Form = () => {
    const [result, setResult] = useState(`Wpisz kwotę w PLN i kliknij "Przelicz" `);
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const currencyData = useCurrencies();

    const calculateResult = (amount, currency) => {

        if (amount > 0 || typeof(amount) === "number") {
            setResult((amount * currencyData.rates[currency]).toFixed(3) + " " + currency);
        }
        else {
            setResult("Podaj prawidłową wartość");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        currencyData.state === "success" ? (
            <FormElement onSubmit={onSubmit}>
                <InputElement
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
                <SelectElement
                    value={currency}
                    onChange={(event) => setCurrency(event.target.value)}
                >
                    {Object.keys(currencyData.rates).map((currency) =>
                        <option
                            key={currency}
                        >
                            {currency}
                        </option>
                    )}
                </SelectElement>
                <ButtonElement>Przelicz</ButtonElement>
                <p>{result}</p>
            </FormElement>
        ) : (
                <Loading>
                    Ładowanie danych z oficjalnej strony Centralnego Banku Europejskiego....
                </Loading>
            )
    )

}


export default Form;