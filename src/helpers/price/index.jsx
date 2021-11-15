/** @name Styled */
import { CardPrice } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { Button, MaterialIcon } from "helpers";

export const Price = React.memo(({ title, price, benefits }) =>
    <CardPrice>
        <div className="card-header bg-white bg-gradient">
            <h5 className="my-0 font-weight-normal">{title}</h5>
        </div>
        <div className="card-body">
            <h2><span style={{ fontSize: 22 }}>R$&nbsp;</span><b>{price}</b></h2>
            <ul className="list-unstyled mt-3 mb-4 text-start">
                {benefits.map(text =>
                    <li className="fs-6"><MaterialIcon icon={'check'}/>&nbsp;{text}.</li>
                )}
            </ul>
            <Button size="lg">Selecionar</Button>
        </div>
    </CardPrice>
);