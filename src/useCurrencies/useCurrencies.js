import { useEffect, useState } from 'react';

export const useCurrencies = () => {
    const [currencyData, setCurrencyData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangeratesapi.io/latest?base=PLN ");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                setCurrencyData({
                    state: "success",
                    rates,
                    date,
                });

            } catch {
                setCurrencyData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 2000);
    }, [])

    return currencyData;
};
