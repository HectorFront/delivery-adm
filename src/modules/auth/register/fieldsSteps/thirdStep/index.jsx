/** @name Dependencies */
import React from 'react';
/** @name External */
import { Row, Col, InputLabel } from 'helpers';

export const ThirdStepFields = React.memo(({ data: { telephone, cellphone, cep, city, address }, onChange }) =>
    <Row>
        <Col cols="12 12 6 6 6">
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="social_reason"
                    onChange={onChange}
                    value={telephone ?? ''}
                    label="Telefone da loja"
                    error={telephone === ''}
                    placeholder="(DDD) 9999-9999"
                />
            </div>
        </Col>
        <Col cols="12 12 6 6 6">
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="fantasy_name"
                    onChange={onChange}
                    value={cellphone ?? ''}
                    error={cellphone === ''}
                    placeholder="(DDD) 99999-9999"
                    label="Telefone celular"
                />
            </div>
        </Col>
        <Col cols="12 12 4 4 4">
            <div className="mb-3">
                <InputLabel
                    id="cep"
                    size="lg"
                    type="text"
                    label="CEP"
                    value={cep ?? ''}
                    error={cep === ''}
                    onChange={onChange}
                    placeholder="00000-000"
                />
            </div>
        </Col>
        <Col cols="12 12 8 8 8">
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    id="city"
                    type="text"
                    label="Cidade"
                    value={city ?? ''}
                    error={city === ''}
                    onChange={onChange}
                    placeholder="Exemplo.: Garça"
                />
            </div>
        </Col>
        <Col>
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="address"
                    onChange={onChange}
                    value={address ?? ''}
                    error={address === ''}
                    label="Endereço de seu negócio"
                    placeholder="Exemplo.: Rua Doutour Miguel Bruno Ferreira, 347"
                />
            </div>
        </Col>
    </Row>
);