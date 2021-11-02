/** @name Styled */
import {
    Form,
    Link,
    Logo,
    Title,
    Center,
    Description,
    ContainerText,
    RegisterStore,
    ContainerForm
} from '../styled';
/** @name StyledKeyFrames */
import {
    TextAnimation
} from '../keyframes';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React from 'react';
/** @name External */
import ClientRoutes from 'constants/client/routes';
import { Button, InputLabel, InputPasswordLabel, MaterialIcon } from 'helpers';

class StoreLogin extends React.PureComponent {

    static INPUT_TYPES_PASSWORD = {
        text: {
            type: 'password',
            icon: 'visibility'
        },
        password: {
            type: 'text',
            icon: 'visibility_off'
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
        this.setState(state => ({ ...state, [obj]: {...state[obj], [atrr]: value } }), () => callback())
    }

    /**
     *
     */
    handleTypePassword() {
        const { password: { type } } = this.state;
        this._handle('password', 'type', StoreLogin.INPUT_TYPES_PASSWORD[type].type);
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
            <Center>
                <ContainerForm>
                    <Logo
                        alt="Logo"
                        height="100px"
                        className="mb-5"
                        src={LogoDefault}
                    />
                    <ContainerText>
                        <Title>
                            <MaterialIcon
                                icon={'store_mall_directory'}
                                color={process.env.REACT_APP_DEFAULT_COLOR}
                            />
                            <TextAnimation seconds="1">Área</TextAnimation> do&nbsp;
                            <TextAnimation seconds="3" color={process.env.REACT_APP_DEFAULT_COLOR}>chefe</TextAnimation>
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
                                    placeholder="exemplo@gmail.com"
                                />
                            </div>
                            <div className="mb-3">
                                <InputPasswordLabel
                                    size="lg"
                                    type={type}
                                    label="Senha"
                                    placeholder="Insira sua senha"
                                    handleType={this.handleTypePassword}
                                    icon={<MaterialIcon hover icon={StoreLogin.INPUT_TYPES_PASSWORD[type].icon} />}
                                />
                                <Link className="form-text">Esqueci minha senha</Link>
                            </div>
                            <Button size="lg">Entrar</Button>
                        </fieldset>
                    </Form>
                    <RegisterStore>
                        Ainda não possui cadastro da sua loja?&nbsp;
                        <Link onClick={this.goRegister}>Vem com a gente!</Link>
                    </RegisterStore>
                </ContainerForm>
            </Center>
        )
    }
}

export default StoreLogin;
