/** @name Dependencies */
import {memo, ChangeEventHandler, ElementType} from 'react';
/** @name External */
import {Row, Col, InputLabel} from "components";

interface ManagerStoreProps {
    data: {
        cnpj?: string | null,
        email?: string | null,
        contact_email?: string | null,
        telephone?: string | null,
        cellphone?: string | null
    },
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export const ManagerStore:ElementType = memo(({ data: { cnpj, email, contact_email, telephone, cellphone }, onChange }: ManagerStoreProps): JSX.Element =>
    <Row>
        <Col>
            <div className="mb-3">
                <InputLabel
                    id="cnpj"
                    size="lg"
                    type="text"
                    label="CNPJ"
                    value={cnpj ?? ''}
                    error={cnpj === ''}
                    onChange={onChange}
                    placeholder="99.999.999/9999-99"
                />
            </div>
        </Col>
        <Col>
            <div className="mb-4">
                <InputLabel
                    size="lg"
                    id="email"
                    type="email"
                    onChange={onChange}
                    value={email ?? ''}
                    error={email === ''}
                    label="E-mail pessoal"
                    placeholder="exemplo@gmail.com"
                />
            </div>
        </Col>
        <Col>
            <div className="mb-4">
                <InputLabel
                    size="lg"
                    type="email"
                    id="contact_email"
                    onChange={onChange}
                    label="E-mail de contato"
                    value={contact_email ?? ''}
                    error={contact_email === ''}
                    placeholder="sualoja@gmail.com"
                />
            </div>
        </Col>
        <Col cols="12 12 6 6 6">
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="telephone"
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
                    id="cellphone"
                    onChange={onChange}
                    value={cellphone ?? ''}
                    error={cellphone === ''}
                    placeholder="(DDD) 99999-9999"
                    label="Telefone celular"
                />
            </div>
        </Col>
    </Row>
, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});