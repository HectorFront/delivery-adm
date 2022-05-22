/** @name Dependencies */
import {memo, ChangeEventHandler, ElementType} from 'react';
/** @name External */
import {Row, Col, InputLabel, InputPasswordLabel} from "helpers";

interface CreateLoginProps {
    data: {
        login?: string | null,
        password?: string | null
    },
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export const CreateLogin: ElementType = memo(({ data: { login, password }, onChange }: CreateLoginProps): JSX.Element =>
    <Row>
        <Col>
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    id="login"
                    type="text"
                    label="Login"
                    value={login ?? ''}
                    error={login === ''}
                    onChange={onChange}
                    placeholder="E-mail"
                />
            </div>
        </Col>
        <Col>
            <div className="mb-4">
                <InputPasswordLabel
                    size="lg"
                    id="password"
                    label="Senha"
                    onChange={onChange}
                    value={password ?? ''}
                    error={password === ''}
                    placeholder="Insira sua senha"
                />
            </div>
        </Col>
    </Row>
, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});
