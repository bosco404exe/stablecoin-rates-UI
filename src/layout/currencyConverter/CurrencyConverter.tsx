import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { cryptoCurrencies } from '@/data/cryptoCurrencies';
import { fiatCurrencies } from '@/data/fiatCurrencies';
import { CurrencyInput } from './CurrencyInput';
import { SwapButton } from './SwapButton';
import { useState } from 'react';
import Hline from "@/assets/hline.svg";
import { formatAmount } from '@/utils';

const CurrencyConverter = () => {
    const {
        fromCurrency,
        toCurrency,
        fromAmount,
        toAmount,
        setFromCurrency,
        setToCurrency,
        handleFromAmountChange,
        handleToAmountChange,
        handleSwap,
    } = useCurrencyConverter(
        cryptoCurrencies.find(c => c.code === 'USDC') || cryptoCurrencies[0],
        fiatCurrencies.find(c => c.code === 'USD') || fiatCurrencies[0]
    );

    // Mantener un estado local para las listas de monedas
    const [fromList, setFromList] = useState(cryptoCurrencies);
    const [toList, setToList] = useState(fiatCurrencies);
    const [isActive,setIsActive] = useState(false);

    // Función personalizada para manejar el swap
    const handleSwapWithLists = () => {
        // Intercambiar las listas
        setFromList(toList);
        setToList(fromList);
        // Llamar al swap original
        handleSwap();
    };

    

    return (
        <div>
            <div className="md:flex items-center bg-[#191B1F] text-white p-4 max-w-[57.1rem] rounded-[2.8rem] gap-3 mx-7 mt-10 md:mx-auto">
                <CurrencyInput
                    label="from"
                    selectedCurrency={fromCurrency}
                    onCurrencySelect={setFromCurrency}
                    amount={fromAmount}
                    onAmountChange={handleFromAmountChange}
                    type="from"
                    currencies={fromList}
                    isActive={isActive}
                    setActive={setIsActive}
                />

                <div className="flex justify-center -my-1">
                    <SwapButton onClick={handleSwapWithLists} />
                </div>

                <CurrencyInput
                    label="to"
                    selectedCurrency={toCurrency}
                    onCurrencySelect={setToCurrency}
                    amount={toAmount}
                    onAmountChange={handleToAmountChange}
                    type="to"
                    currencies={toList}
                    isActive={isActive}
                    setActive={setIsActive}
                />
            </div>
            <div className="mt-4 text-center text-xl text-white/50">
                {formatAmount(fromAmount)} {fromCurrency.code} = {formatAmount(toAmount)} {toCurrency.code}
                <img src={Hline} alt="Hline" className="w-2 h-52 lg:h-52 xl:h-60 md:h-60 mx-auto" />
                {/* <p className="text-center text-lg text-white/50 mb-2">Aggregated from</p> */}
                {/* <div className='mx-auto'>
                    <ExchangeView />
                </div> */}
            </div>
        </div>
    );
}

export default CurrencyConverter;