/** @name Dependencies */
import {memo, ChangeEventHandler, ElementType} from 'react';
/** @name External */
import {Row, Col, InputLabel} from "components";

interface ManagerStoreProps {
    data: {
        document?: string | null,
        email?: string | null,
        contactEmail?: string | null,
        contactTelephone?: string | null,
        telephone?: string | null
    },
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export const ManagerStore:ElementType = memo(({ data: { document, email, contactEmail, contactTelephone, telephone }, onChange }: ManagerStoreProps): JSX.Element =>
    <Row>
        <Col>
            <div className="mb-3">
                <InputLabel
                    id="document"
                    size="lg"
                    type="text"
                    onChange={onChange}
                    value={document ?? ''}
                    label="Documento CNPJ"
                    error={document === ''}
                    placeholder="Somente números"
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
                    id="contactEmail"
                    onChange={onChange}
                    label="E-mail de contato"
                    value={contactEmail ?? ''}
                    error={contactEmail === ''}
                    placeholder="sualoja@gmail.com"
                />
            </div>
        </Col>
        <Col cols="12 12 6 6 6">
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="contactTelephone"
                    onChange={onChange}
                    value={contactTelephone ?? ''}
                    label="Telefone da loja"
                    error={contactTelephone === ''}
                    placeholder="(DDD) 9999-9999"
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
                    error={telephone === ''}
                    label="Telefone celular"
                    placeholder="(DDD) 99999-9999"
                />
            </div>
        </Col>
    </Row>
, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});