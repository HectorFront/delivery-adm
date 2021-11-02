/** @name Styled */
import {
    Form,
    Title,
    BackPage,
    Description,
    BarProgress,
    ContainerText,
    ContainerForm,
    ContainerBarProgress
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
import { Render, Button, MaterialIcon } from 'helpers';

class StoreRegister extends React.PureComponent {

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
            dataSteps: {...StoreRegister.INITIAL_DATA},
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
                <ContainerBarProgress>
                    <BarProgress width={`${progressBar}%`}/>
                </ContainerBarProgress>
                <ContainerForm>
                    <ContainerText>
                        <Render has={this.isVisibleStep(1)}>
                            <Title>
                                <MaterialIcon
                                    icon={'add_business'}
                                    color={process.env.REACT_APP_DEFAULT_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_DEFAULT_COLOR}>Registre</TextAnimation> sua&nbsp;
                                <TextAnimation seconds="2" color={process.env.REACT_APP_SECONDARY_COLOR}>loja</TextAnimation>
                            </Title>
                            <Description>Preencha estas informações abaixo para começar</Description>
                        </Render>
                        <Render has={this.isVisibleStep(2)}>
                            <Title>
                                <MaterialIcon
                                    icon={'person_pin'}
                                    color={process.env.REACT_APP_SECONDARY_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_SECONDARY_COLOR}>Responsável</TextAnimation> da loja
                            </Title>
                            <Description>Preencha estes dados como pessoa que tenha o nome no contrato social, seja sócio(a) administrativo ou dono(a) da loja.</Description>
                        </Render>
                        <Render has={this.isVisibleStep(3)}>
                            <Title>
                                <MaterialIcon
                                    icon={'travel_explore'}
                                    color={process.env.REACT_APP_SECONDARY_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_SECONDARY_COLOR}>Dados</TextAnimation> da loja
                            </Title>
                            <Description>Preencha os dados de onde o seu negócio está localizado e as redes sociais que você usa para divulgação da loja.</Description>
                        </Render>
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <Render has={this.isVisibleStep(1)}>
                                <FirstStepFields
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(2)}>
                                <SecondStepFields
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(3)}>
                                <ThirdStepFields
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Button size="lg" secondary onClick={this.nextStep}>Continuar</Button>
                        </fieldset>
                    </Form>
                </ContainerForm>
            </Fragment>
        )
    }
}

export default StoreRegister;
