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
/** @name Constants */
import Colors from 'constants/client/colors';


interface IState {
}

class StoreLogin extends React.PureComponent<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = { }
        this.bindFunctions();
    }

    /**
     *
     */
    bindFunctions() {
        this.goRegister = this.goRegister.bind(this);
    }

    /**
     *
     * @param atrr
     * @param value
     * @param callback
     * @private
     */
    _handle(atrr: string, value: any, callback: Function = () => { }) {
        this.setState(state => ({ ...state, [atrr]: value }), () => callback())
    }

    /**
     *
     */
    goRegister() {
        this.props.history.push(ClientRoutes.REGISTER);
    }

    render() {
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
                                    type="email"
                                    label="Email"
                                    placeholder="exemplo@gmail.com"
                                />
                            </div>
                            <div className="mb-3">
                                <InputPasswordLabel
                                    size="lg"
                                    label="Senha"
                                    placeholder="Insira sua senha"
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
