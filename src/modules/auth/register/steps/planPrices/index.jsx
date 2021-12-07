/** @name Dependencies */
import React from 'react';
/** @name External */
import { Col, Price, Row } from "helpers";

export const PlanPrices = React.memo(() =>
    <Row className="card-deck mb-3 text-center">
        <Col cols="12 12 6 6 6">
            <Price
                price={110}
                title="Básico"
                benefits={['item 1']}
            />
        </Col>
        <Col cols="12 12 6 6 6">
            <Price
                price={150}
                title="Padrão"
                benefits={['item 1']}
            />
        </Col>
        <Col cols="12 12 6 6 6">
            <Price
                price={180}
                title="Pro"
                benefits={['item 1']}
            />
        </Col>
        <Col cols="12 12 6 6 6">
            <Price
                price={220}
                title="Empresarial (Franquia)"
                benefits={['item 1']}
            />
        </Col>
    </Row>
);