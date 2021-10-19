/** @name Styled */
import { ContainerLogin, ContentForm, Form, ForgotPassword } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { InputDefault, InputPassword, MaterialIcon } from "helpers";

class Login extends React.PureComponent {

    static IconVisibility = 'visibility';
    static IconVisibilityOff = 'visibility_off';
    static InputTypesPassword = {
        password: { type: 'text', icon: Login.IconVisibility },
        text: { type: 'password', icon: Login.IconVisibilityOff }
    };

    constructor(props) {
        super(props);
        this.state = {
            password: { type: 'password' }
        }
        this.bindFunctions();
    }

    bindFunctions() {
        this.onChangeTypePassword = this.onChangeTypePassword.bind(this);
    }

    _handle(obj, atrr, value, callback = () => { }) {
        this.setState(state => ({ ...state, [obj]: {...obj, [atrr]: value } }), () => callback)
    }

    onChangeTypePassword() {
        const { password: { type } } = this.state;
        this._handle('password', 'type', Login.InputTypesPassword[type].type);
    }

    render() {
        const { password: { type } } = this.state;
        return (
            <ContainerLogin>
                <ContentForm>
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
                                    onChangeType={this.onChangeTypePassword}
                                    icon={<MaterialIcon icon={Login.InputTypesPassword[type].icon} />}
                                />
                                <ForgotPassword
                                    className="form-text"
                                    style={{ color: process.env.REACT_APP_DEFAULT_COLOR }}
                                >
                                    Esqueci minha senha
                                </ForgotPassword>
                            </div>
                        </fieldset>
                    </Form>
                </ContentForm>
            </ContainerLogin>
        )
    }
}

export default Login;
