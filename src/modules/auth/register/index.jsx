/** @name Styled */
import {
    Form,
    Title,
    BackPage,
    Description,
    ContainerText,
    ContainerForm
} from '../styled';
/** @name StyledKeyFrames */
import {
    TextAnimation
} from '../keyframes';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name External */
import { Button, InputLabel, MaterialIcon} from 'helpers';

class Register extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.bindFunctions();
    }

    /**
     *
     */
    bindFunctions() {
        this.goBackPage = this.goBackPage.bind(this);
    }

    /**
     *
     */
    goBackPage() {
        this.props.history.goBack();
    }

    render() {
        return (
            <Fragment>
                <BackPage>
                    <MaterialIcon
                        hover
                        size="45px"
                        icon={'arrow_back'}
                        onClick={this.goBackPage}
                        color={process.env.REACT_APP_DEFAULT_COLOR}
                    />
                </BackPage>
                <ContainerForm>
                    <ContainerText>
                        <Title>
                            <MaterialIcon
                                icon={'verified'}
                                color={process.env.REACT_APP_DEFAULT_COLOR}
                            />
                            <TextAnimation seconds="1" color={process.env.REACT_APP_DEFAULT_COLOR}>
                                Registre
                            </TextAnimation>
                            &nbsp;sua&nbsp;
                            <TextAnimation seconds="3" color={process.env.REACT_APP_SECONDARY_COLOR}>
                                loja
                            </TextAnimation>
                        </Title>
                        <Description>Preencha estas informações abaixo para começar</Description>
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <div className="mb-3">
                                <InputLabel
                                    size="lg"
                                    type="text"
                                    label="Nome da loja"
                                    placeholder="Razão social"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    size="lg"
                                    type="text"
                                    placeholder="Exemplo.: Renatão Lanches"
                                    label="Como as pessoas costumam chamar sua loja?"
                                />
                            </div>
                            <Button size="lg">Continuar</Button>
                        </fieldset>
                    </Form>
                </ContainerForm>
            </Fragment>
        )
    }
}

export default Register;
