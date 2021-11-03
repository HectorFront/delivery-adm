/** @name Styled */
import {
    Form,
    Title,
    BackPage,
    Description,
    BarProgress,
    ContainerText,
    ContainerForm,
    ContainerBarProgress, Logo
} from '../styled';
/** @name StyledKeyFrames */
import {
    TextAnimation
} from '../keyframes';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name Internal */
import { FirstStepFields, SecondStepFields, ThirdStepFields } from './fieldsSteps';
/** @name External */
import { Row, Col, Render, Button, MaterialIcon } from 'helpers';

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
        this.steps = 4;
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
                        style={{ position: 'absolute', left: 25 }}
                        color={process.env.REACT_APP_DEFAULT_COLOR}
                    />
                    <Logo
                        alt="Logo"
                        height="100%"
                        src={LogoDefault}
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
                            <Description>Preencha estes dados como pessoa que tenha o nome no contrato social, seja você um sócio administrativo ou dono(a) da loja.</Description>
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
                        <Render has={this.isVisibleStep(4)}>
                            <Title>
                                <MaterialIcon
                                    icon={'sell'}
                                    color={process.env.REACT_APP_SECONDARY_COLOR}
                                />
                                <TextAnimation seconds="1" color={process.env.REACT_APP_SECONDARY_COLOR}>Nossos</TextAnimation> planos
                            </Title>
                            <Description>Escolha o plano que seria ideal para você.</Description>
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
                            <Render has={this.isVisibleStep(4)}>
                                <Row className="card-deck mb-3 text-center">
                                    <Col cols="12 12 6 6 6">
                                        <div className="card mb-4 shadow-sm">
                                            <div className="card-header bg-dark bg-gradient text-white">
                                                <h4 className="my-0 font-weight-normal">Essencial</h4>
                                            </div>
                                            <div className="card-body">
                                                <Title>
                                                    <b>R$ 100</b>
                                                </Title>
                                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                                    <li className="fs-6"><MaterialIcon icon={'check'}/>&nbsp;Benefício 1.</li>
                                                </ul>
                                                <Button size="lg">Selecionar</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
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
