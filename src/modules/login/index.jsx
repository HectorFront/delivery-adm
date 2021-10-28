/** @name Styled */
import {
    Form,
    Link,
    Title,
    ContentForm,
    ContainerText,
    RegisterStore,
    ContainerLogin,
    Description
} from './styled';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { Button, InputDefault, InputPassword, MaterialIcon } from "helpers";

class Login extends React.PureComponent {

    static IconVisibility = 'visibility';
    static IconVisibilityOff = 'visibility_off';
    static InputTypesPassword = {
        text: {
            type: 'password',
            icon: Login.IconVisibilityOff
        },
        password: {
            type: 'text',
            icon: Login.IconVisibility
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            password: { type: 'password' }
        }
        this.bindFunctions();
    }

    bindFunctions() {
        this.handleTypePassword = this.handleTypePassword.bind(this);
    }

    _handle(obj, atrr, value, callback = () => { }) {
        this.setState(state => ({ ...state, [obj]: {...obj, [atrr]: value } }), () => callback)
    }

    handleTypePassword() {
        const { password: { type } } = this.state;
        this._handle('password', 'type', Login.InputTypesPassword[type].type);
    }

    render() {
        const { password: { type } } = this.state;
        return (
            <ContainerLogin>
                <ContentForm>
                    <ContainerText>
                        <Title>
                            <MaterialIcon
                                icon={'store_mall_directory'}
                                color={process.env.REACT_APP_DEFAULT_COLOR}
                            />
                            Área do chefe
                        </Title>
                        <Description>Aqui você facilita sua venda de forma ágil</Description>
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <div className="mb-3">
                                <label className="form-label">
                                    <b>Email</b>
                                </label>
                                <InputDefault
                                    size="lg"
                                    type="email"
                                    placeholder="seunome@gmail.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    <b>Senha</b>
                                </label>
                                <InputPassword
                                    size="lg"
                                    type={type}
                                    placeholder="Insira sua senha"
                                    handleType={this.handleTypePassword}
                                    icon={<MaterialIcon icon={Login.InputTypesPassword[type].icon} />}
                                />
                                <Link className="form-text">Esqueci minha senha</Link>
                            </div>
                            <Button size="lg">Continuar</Button>
                        </fieldset>
                    </Form>
                    <RegisterStore>
                        Ainda não possui cadastro da sua loja?&nbsp;
                        <Link>Vem com a gente!</Link>
                    </RegisterStore>
                </ContentForm>
            </ContainerLogin>
        )
    }
}

export default Login;
