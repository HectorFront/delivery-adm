/** @name Dependencies */
import React, { useState } from 'react';
/** @name Internal */
import { planPrices } from "../../constants";
/** @name External */
import { Col, Price, Row } from "helpers";
/** @name Constants */
const ID_DEFAULT_PLAN = 2;

export const PlanPrices = React.memo(() => {
    const [idPriceSelected, setPriceSelected] = useState(ID_DEFAULT_PLAN);
    return (
        <Row className="card-deck mb-3 text-center">
            {planPrices.map((plan, i) =>
                <Col cols="12 12 6 6 6" key={i}>
                    <Price
                        id={plan.id}
                        price={plan.price}
                        title={plan.title}
                        benefits={plan.benefits}
                        priceSelected={idPriceSelected}
                        selectPrice={() => setPriceSelected(plan.id)}
                    />
                </Col>
            )}
        </Row>
    );
});