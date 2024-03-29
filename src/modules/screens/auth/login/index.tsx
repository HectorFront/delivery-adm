/** @name Styled */
import * as S from '../styles';
/** @name StyledKeyFrames */
import * as Keyframe from '../keyframes';
/** @name Images */
import LogoBig from 'assets/logos/big.svg';
/** @name Dependencies */
import {memo, useCallback, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import {reducer, handleKeyState} from "utils/reducer/useReducer";
/** @name External */
import Colors from 'layout/vars/colors';
import {ClientRoutes} from 'constants/client/routes';
import {Button, InputLabel, InputPasswordLabel, MaterialIcon} from "components";

interface IState {
    login: string | null,
    password: string | null
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
const INITIAL_STATE: IState = {
    login: null,
    password: null
};

const StoreLogin = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    /**
     *
     * @param id
     * @param value
     */
    const onChangeInputLogin = useCallback(({ target: { id: key, value }}: { target: HTMLInputElement }) => {
        return handleKeyState(dispatch, key, value);
    },[]);

    /**
     *
     */
    const goRegister = useCallback(() => {
        props.history.push(ClientRoutes.REGISTER);
    },[]);

    const {login, password}: IState = state;
    return (
        <S.Center>
            <S.ContainerForm>
                <S.Logo
                    alt="Logo"
                    height={250}
                    src={LogoBig}
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
                                onChange={onChangeInputLogin}
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
                                onChange={onChangeInputLogin}
                            />
                            <S.Link className="form-text">Esqueci minha senha</S.Link>
                        </div>
                        <Button fullWidth>Entrar</Button>
                    </fieldset>
                </S.Form>
                <S.RegisterStore>
                    Ainda não possui cadastro da sua loja?&nbsp;
                    <S.Link onClick={goRegister}>Vem com a gente!</S.Link>
                </S.RegisterStore>
            </S.ContainerForm>
        </S.Center>
    )
}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});

export default withRouter(StoreLogin);
