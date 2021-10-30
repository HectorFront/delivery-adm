/** @name Styled */
import {
    Form,
    Link,
    Title,
    Description,
    ContainerText,
    RegisterStore,
    ContainerForm
} from '../styled';
/** @name StyledKeyFrames */
import {
    TextAnimation
} from '../keyframes';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name External */
import ClientRoutes from 'constants/client/routes';
import { Button, InputLabel, InputPasswordLabel, MaterialIcon } from 'helpers';

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

    /**
     *
     */
    bindFunctions() {
        this.goRegister = this.goRegister.bind(this);
        this.handleTypePassword = this.handleTypePassword.bind(this);
    }

    /**
     *
     * @param obj
     * @param atrr
     * @param value
     * @param callback
     * @private
     */
    _handle(obj, atrr, value, callback = () => { }) {
        this.setState(state => ({ ...state, [obj]: {...obj, [atrr]: value } }), () => callback)
    }

    /**
     *
     */
    handleTypePassword() {
        const { password: { type } } = this.state;
        this._handle('password', 'type', Login.InputTypesPassword[type].type);
    }

    /**
     *
     */
    goRegister() {
        this.props.history.push(ClientRoutes.REGISTER);
    }

    render() {
        const { password: { type } } = this.state;
        return (
            <Fragment>
                <ContainerForm>
                    <ContainerText>
                        <Title>
                            <MaterialIcon
                                icon={'store_mall_directory'}
                                color={process.env.REACT_APP_DEFAULT_COLOR}
                            />
                            <TextAnimation seconds="1">
                                Área
                            </TextAnimation>
                            &nbsp;do&nbsp;
                            <TextAnimation seconds="3" color={process.env.REACT_APP_DEFAULT_COLOR}>
                                chefe
                            </TextAnimation>
                        </Title>
                        <Description>Aqui você facilita sua venda de forma ágil</Description>
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <div className="mb-3">
                                <InputLabel
                                    size="lg"
                                    type="email"
                                    label="Email"
                                    placeholder="seunome@gmail.com"
                                />
                            </div>
                            <div className="mb-3">
                                <InputPasswordLabel
                                    size="lg"
                                    type={type}
                                    label="Senha"
                                    placeholder="Insira sua senha"
                                    handleType={this.handleTypePassword}
                                    icon={<MaterialIcon hover icon={Login.InputTypesPassword[type].icon} />}
                                />
                                <Link className="form-text">Esqueci minha senha</Link>
                            </div>
                            <Button size="lg">Continuar</Button>
                        </fieldset>
                    </Form>
                    <RegisterStore>
                        Ainda não possui cadastro da sua loja?&nbsp;
                        <Link onClick={this.goRegister}>Vem com a gente!</Link>
                    </RegisterStore>
                </ContainerForm>
            </Fragment>
        )
    }
}

export default Login;
