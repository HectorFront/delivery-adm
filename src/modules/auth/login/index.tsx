/** @name Styled */
import * as S from '../styles';
/** @name StyledKeyFrames */
import * as Keyframe from '../keyframes';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
/** @name External */
import Colors from 'constants/client/colors';
import ClientRoutes from 'constants/client/routes';
import { Button, InputLabel, InputPasswordLabel, MaterialIcon } from 'helpers';

interface DataLoginProps {
    login: string | null,
    password: string | null
}

interface IState {
    dataLogin: DataLoginProps
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_DATA_LOGIN: DataLoginProps = {
    login: null,
    password: null
};

class StoreLogin extends React.PureComponent<ChildComponentProps, IState> {

    constructor(props: ChildComponentProps) {
        super(props);
        this.state = {
            dataLogin: { ...INITIAL_DATA_LOGIN }
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
            <S.Center>
                <S.ContainerForm>
                    <S.Logo
                        alt="Logo"
                        height="100px"
                        className="mb-5"
                        src={LogoDefault}
                    />
                    <S.ContainerText>
                        <S.Title>
                            <MaterialIcon
                                icon={'store_mall_directory'}
                                color={Colors.DEFAULT}
                            />
                            <Keyframe.TextFade seconds="1">Área</Keyframe.TextFade> do&nbsp;
                            <Keyframe.TextFade seconds="3" color={Colors.DEFAULT}>chefe</Keyframe.TextFade>
                        </S.Title>
                        <S.Description>Aqui você facilita sua venda de forma ágil</S.Description>
                    </S.ContainerText>
                    <S.Form>
                        <fieldset>
                            <div className="mb-3">
                                <InputLabel
                                    size="lg"
                                    id="login"
                                    type="email"
                                    label="E-mail"
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
                                <S.Link className="form-text">Esqueci minha senha</S.Link>
                            </div>
                            <Button size="lg">Entrar</Button>
                        </fieldset>
                    </S.Form>
                    <S.RegisterStore>
                        Ainda não possui cadastro da sua loja?&nbsp;
                        <S.Link onClick={this.goRegister}>Vem com a gente!</S.Link>
                    </S.RegisterStore>
                </S.ContainerForm>
            </S.Center>
        )
    }
}

export default withRouter(StoreLogin);
