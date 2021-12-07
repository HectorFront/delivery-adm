/** @name Dependencies */
import React, {useEffect, useState} from 'react';
/** @name External */
import { Row, Col, InputLabel, InputPasswordLabel, MaterialIcon } from "helpers";
/** @name Constants */
const INPUT_TYPES_PASSWORD = {
    text: {
        type: 'password',
        icon: 'visibility'
    },
    password: {
        type: 'text',
        icon: 'visibility_off'
    }
};

export const CreateLogin = React.memo(({ data: { login, password }, onChange }) => {
    const [typeInputPass, setTypeInputPass] = useState("password");

    const handleTypePassword = () => {
        setTypeInputPass(INPUT_TYPES_PASSWORD[typeInputPass].type);
    }

    return (
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
                        type={typeInputPass}
                        value={password ?? ''}
                        error={password === ''}
                        placeholder="Insira sua senha"
                        onChange={onChange}
                        handleType={handleTypePassword}
                        icon={<MaterialIcon hover icon={INPUT_TYPES_PASSWORD[typeInputPass].icon}/>}
                    />
                </div>
            </Col>
        </Row>
    );
});