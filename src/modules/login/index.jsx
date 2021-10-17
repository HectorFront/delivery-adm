/** @name Styled */
import { ContainerLogin, ContentForm, Form, ForgotPassword } from './styled';
/** @name Dependencies */
import React from 'react';

class Login extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(process.env.REACT_APP_DOT_ENV_TEST)
    }

    render() {
        return (
            <ContainerLogin>
                <ContentForm>
                    <Form>
                        <fieldset>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control form-control-lg"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Senha</label>
                                <input type="email" className="form-control form-control-lg"/>
                                <ForgotPassword className="form-text">Esqueci minha senha</ForgotPassword>
                            </div>
                        </fieldset>
                    </Form>
                </ContentForm>
            </ContainerLogin>
        )
    }
}

export default Login;
