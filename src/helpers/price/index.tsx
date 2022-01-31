/** @name Styled */
import { CardPrice } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { InputRadio, MaterialIcon } from "helpers";
/** @name Constants */
import Colors from 'constants/client/colors';

interface PriceProps {
    id: number,
    benefits: [],
    price: number,
    title: string,
    priceSelected: number,
    selectPrice: Function
}

export const Price = React.memo(({ id, title, price, benefits, priceSelected, selectPrice = () => {} }: PriceProps) => {
    const CSSHeaderWhenSelected = id === priceSelected
        ? { backgroundColor: Colors.DARK, color: 'white' }
        : { backgroundColor: 'white', color: 'black' };
    return (
        <CardPrice onClick={selectPrice}>
            <div className="card-header" style={CSSHeaderWhenSelected}>
                <h5 className="my-0 font-weight-normal">{title}</h5>
            </div>
            <div className="card-body">
                <div className="form-check">
                    <InputRadio
                        value={id}
                        id="plan_prices"
                        onChange={() => {}}
                        checked={id === priceSelected}
                    />
                </div>
                <h1><sub>R$</sub><b>{price}</b></h1>
                <ul className="list-unstyled mt-3 mb-4 text-start">
                    {benefits.map((text, i) =>
                        <li className="fs-6" key={i}><MaterialIcon icon={'check'}/>&nbsp;{text}.</li>
                    )}
                </ul>
            </div>
        </CardPrice>
    );
});