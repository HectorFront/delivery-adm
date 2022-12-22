/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';
/** @name External */
import {InputRadio, MaterialIcon} from "components";
import Colors from 'layout/vars/colors';

type PriceProps = {
    id: number,
    price: number,
    title: string,
    benefits: string[],
    priceSelected: number,
    selectPrice: React.MouseEventHandler<HTMLDivElement> | undefined
}

/** @name Constants */
const CSS_STYLES = {
    default: { backgroundColor: 'white', color: 'black' },
    selected: { backgroundColor: Colors.DARK, color: 'white' }
}

export const Price: React.ElementType = React.memo((props: PriceProps): JSX.Element => {
    const styleHeader = (
        CSS_STYLES[props.id === props.priceSelected ? 'selected' : 'default']
    );
    return (
        <S.CardPrice onClick={'selectPrice' in props ? props.selectPrice : () => {}}>
            <div className="card-header" style={styleHeader}>
                <h5 className="my-0 font-weight-normal">{props.title}</h5>
            </div>
            <div className="card-body">
                <div className="form-check">
                    <InputRadio
                        value={props.id}
                        id="plan_prices"
                        onChange={() => {}}
                        checked={props.id === props.priceSelected}
                    />
                </div>
                <h1><sub>R$</sub><b>{props.price}</b></h1>
                <ul className="list-unstyled mt-3 mb-4 text-start">
                    {props.benefits.map((text, i) =>
                        <li className="fs-6" key={i}><MaterialIcon icon={'check'}/>&nbsp;{text}.</li>
                    )}
                </ul>
            </div>
        </S.CardPrice>
    );
});