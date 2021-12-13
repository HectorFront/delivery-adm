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
            typeInputPass: 'password'
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
     * @param atrr
     * @param value
     * @param callback
     * @private
     */
    _handle(atrr, value, callback = () => { }) {
        this.setState(state => ({ ...state, [atrr]: value }), () => callback())
    }

    /**
     *
     */
    handleTypePassword() {
        const { typeInputPass } = this.state;
        this._handle('typeInputPass', StoreLogin.INPUT_TYPES_PASSWORD[typeInputPass].type);
    }

    /**
     *
     */
    goRegister() {
        this.props.history.push(ClientRoutes.REGISTER);
    }

    render() {
        const { typeInputPass } = this.state;
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
                                    type={typeInputPass}
                                    label="Senha"
                                    placeholder="Insira sua senha"
                                    handleType={this.handleTypePassword}
                                    icon={<MaterialIcon hover icon={StoreLogin.INPUT_TYPES_PASSWORD[typeInputPass].icon} />}
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
