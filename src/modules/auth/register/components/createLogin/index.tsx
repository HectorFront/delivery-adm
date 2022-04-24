/** @name Dependencies */
import React from 'react';
/** @name External */
import { Row, Col, InputLabel, InputPasswordLabel } from "helpers";

interface CreateLoginProps {
    data: {
        login?: string | null,
        password?: string | null
    },
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const CreateLogin: React.ElementType = React.memo(({ data: { login, password }, onChange }: CreateLoginProps): JSX.Element =>
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
                    placeholder="Email ou usuário"
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
);
