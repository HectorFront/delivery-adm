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
} from '../styles';
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
/** @name Constants */
import Colors from 'constants/client/colors';


interface DefinedDataLogin {
    login: string | null,
    password: string | null
}

interface IState {
    dataLogin: DefinedDataLogin
}

class StoreLogin extends React.PureComponent<any, IState> {
    private dataLogin: DefinedDataLogin = {
        login: null,
        password: null
    };
    constructor(props: any) {
        super(props);
        this.state = {
            dataLogin: { ...this.dataLogin }
        }
        this.bindFunctions();
    }

    /**
     *
     */
    bindFunctions() {
        this.goRegister = this.goRegister.bind(this);
        this.onChangeInputLogin = this.onChangeInputLogin.bind(this);
    }

    /**
     *
     * @param atrr
     * @param value
     * @param callback
     * @private
     */
    _handle(atrr: string, value: string, callback: Function = () => { }) {
        this.setState(state => ({ ...state, [atrr]: value }), () => callback())
    }

    /**
     *
     * @param obj
     * @param atrr
     * @param value
     * @param callback
     * @private
     */
    _handleObject(obj: string, atrr: string, value: string, callback: Function = () => { }) {
        this.setState((state: any) => ({ ...state, [obj]: {...state[obj], [atrr]: value } }), () => callback())
    }

    /**
     *
     * @param id
     * @param value
     */
    onChangeInputLogin({ target: { id, value }}: { target: HTMLInputElement }) {
        this._handleObject('dataLogin', id, value);
    }

    /**
     *
     */
    goRegister() {
        this.props.history.push(ClientRoutes.REGISTER);
    }

    render() {
        const { dataLogin: { login, password } }: IState = this.state;
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
                                color={Colors.DEFAULT}
                            />
                            <TextAnimation seconds="1">Área</TextAnimation> do&nbsp;
                            <TextAnimation seconds="3" color={Colors.DEFAULT}>chefe</TextAnimation>
                        </Title>
                        <Description>Aqui você facilita sua venda de forma ágil</Description>
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <div className="mb-3">
                                <InputLabel
                                    size="lg"
                                    id="login"
                                    type="email"
                                    label="Email"
                                    value={login ?? ''}
                                    error={login === ''}
                                    placeholder="exemplo@gmail.com"
                                    onChange={this.onChangeInputLogin}
                                />
                            </div>
                            <div className="mb-3">
                                <InputPasswordLabel
                                    size="lg"
                                    id="password"
                                    label="Senha"
                                    value={password ?? ''}
                                    error={password === ''}
                                    placeholder="Insira sua senha"
                                    onChange={this.onChangeInputLogin}
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
