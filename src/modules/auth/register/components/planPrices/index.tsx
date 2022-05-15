/** @name Dependencies */
import {memo, useState, ElementType} from 'react';
/** @name Internal */
import {PLAN_PRICES} from "modules/auth/register/constants";
/** @name External */
import {Col, Price, Row} from "helpers";

/** @name Constants */
const INITIAL_ID_SELECTED = 2;

export const PlanPrices: ElementType = memo((): JSX.Element => {
    const [idPriceSelected, setPriceSelected] = useState<number>(INITIAL_ID_SELECTED);
    return (
        <Row className="card-deck mb-3 text-center">
            {PLAN_PRICES.map((plan, i) =>
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
}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});