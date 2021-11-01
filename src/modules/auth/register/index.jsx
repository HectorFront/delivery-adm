/** @name Styled */
import {
    Form,
    Title,
    BackPage,
    Description,
    BarProgress,
    ContainerText,
    ContainerForm
} from '../styled';
/** @name StyledKeyFrames */
import {
    TextAnimation
} from '../keyframes';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name Internal */
import { FirstStepFields, SecondStepFields, ThirdStepFields } from './fieldsSteps';
/** @name External */
import { RenderComponent, Button, MaterialIcon } from 'helpers';

class Register extends React.PureComponent {

    static INITIAL_DATA = {
        cep: null,
        cnpj: null,
        city: null,
        email: null,
        address: null,
        facebook: null,
        telephone: null,
        instagram: null,
        cellphone: null,
        fantasy_name: null,
        social_reason: null
    };

    constructor(props) {
        super(props);
        this.steps = 3;
        this.progressByStage = 100 / this.steps;
        this.state = {
            stepCurrent: 1,
            progressBar: this.progressByStage,
            dataSteps: {...Register.INITIAL_DATA},
        };
        this.bindFunctions();
    }

    /**
     *
     */
    bindFunctions() {
        this.nextStep = this.nextStep.bind(this);
        this.goBackPage = this.goBackPage.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
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
     * @param stepSpecified
     * @returns {boolean}
     */
    isVisibleStep(stepSpecified) {
        const { stepCurrent } = this.state;
        return stepSpecified === stepCurrent;
    }

    /**
     *
     * @param id
     * @param value
     */
    onChangeInput({ target: { id, value }}) {
        this._handle('dataSteps', id, value);
    }

    /**
     *
     */
    nextStep() {
        let { stepCurrent, progressBar } = this.state;
        stepCurrent+=1; progressBar+=this.progressByStage;
        this.setState({ stepCurrent, progressBar });
    }

    /**
     *
     */
    goBackPage() {
        let { stepCurrent, progressBar }= this.state;
        if(stepCurrent <= 1) {
            return this.props.history.goBack()
        } else {
            stepCurrent-=1; progressBar-=this.progressByStage;
            this.setState({ stepCurrent, progressBar });
        }
    }

    render() {
        const { progressBar, dataSteps } = this.state;
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
                <BarProgress width={`${progressBar}%`}/>
                <ContainerForm>

                    <ContainerText>
                        <RenderComponent has={this.isVisibleStep(1)}>
                            <Title>
                                <MaterialIcon
                                    icon={'add_business'}
                                    color={process.env.REACT_APP_DEFAULT_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_DEFAULT_COLOR}>Registre</TextAnimation> sua&nbsp;
                                <TextAnimation seconds="2" color={process.env.REACT_APP_SECONDARY_COLOR}>loja</TextAnimation>
                            </Title>
                            <Description>Preencha estas informações abaixo para começar</Description>
                        </RenderComponent>
                        <RenderComponent has={this.isVisibleStep(2)}>
                            <Title>
                                <MaterialIcon
                                    icon={'contact_support'}
                                    color={process.env.REACT_APP_SECONDARY_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_SECONDARY_COLOR}>Responsável</TextAnimation> da loja
                            </Title>
                            <Description>Preencha estes dados como pessoa que tenha o nome no contrato social da loja, seja como dona, sócia ou sócia administrativa.</Description>
                        </RenderComponent>
                        <RenderComponent has={this.isVisibleStep(3)}>
                            <Title>
                                <MaterialIcon
                                    icon={'receipt_long'}
                                    color={process.env.REACT_APP_SECONDARY_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_SECONDARY_COLOR}>Dados</TextAnimation> da loja
                            </Title>
                            <Description>Preencha os dados de localização de sua loja e as redes socias.</Description>
                        </RenderComponent>
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <RenderComponent has={this.isVisibleStep(1)}>
                                <FirstStepFields
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </RenderComponent>
                            <RenderComponent has={this.isVisibleStep(2)}>
                                <SecondStepFields
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </RenderComponent>
                            <RenderComponent has={this.isVisibleStep(3)}>
                                <ThirdStepFields
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </RenderComponent>
                            <Button size="lg" secondary onClick={this.nextStep}>Continuar</Button>
                        </fieldset>
                    </Form>
                </ContainerForm>
            </Fragment>
        )
    }
}

export default Register;
