/** @name Styled */
import {
    Form,
    BackPage,
    CountSteps,
    BarProgress,
    ContainerText,
    ContainerForm,
    ContainerBarProgress, Logo
} from '../styled';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name Internal */
import { TabStep } from './helpers';
import { RegisterStore, ManagerStore, InfoStore, PlanPrices, CreateLogin } from './steps';
/** @name External */
import { Render, Button, MaterialIcon } from 'helpers';
/** @name Constants */
import { registerTabs } from './constants';

class StoreRegister extends React.PureComponent {

    static INITIAL_DATA = {
        cep: null,
        cnpj: null,
        city: null,
        email: null,
        login: null,
        address: null,
        facebook: null,
        password: null,
        telephone: null,
        instagram: null,
        cellphone: null,
        fantasy_name: null,
        social_reason: null
    };

    constructor(props) {
        super(props);
        this.steps = 5;
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
        const concluded = this.isVisibleStep(this.steps);
        const { stepCurrent, progressBar, dataSteps } = this.state;

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
                        <CountSteps>{stepCurrent} de {this.steps} etapas.</CountSteps>
                        {registerTabs.map(tab =>
                            <Render has={this.isVisibleStep(tab.step)}>
                                <TabStep
                                    icon={tab.icon}
                                    paintedText={tab.painted_text}
                                    normalText={tab.normal_text}
                                    description={tab.description}
                                />
                            </Render>
                        )}
                    </ContainerText>
                    <Form>
                        <fieldset>
                            <Render has={this.isVisibleStep(1)}>
                                <RegisterStore
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(2)}>
                                <ManagerStore
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(3)}>
                                <InfoStore
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(4)}>
                                <PlanPrices
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(5)}>
                                <CreateLogin
                                    data={dataSteps}
                                    onChange={this.onChangeInput}
                                />
                            </Render>
                            <Button size="lg" secondary onClick={this.nextStep}>
                                {concluded ? 'Concluir' : 'Continuar'}
                            </Button>
                        </fieldset>
                    </Form>
                </ContainerForm>
            </Fragment>
        )
    }
}

export default StoreRegister;
