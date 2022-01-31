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
import React from 'react';
/** @name Internal */
import { TabStep } from './helpers';
import { registerTabs } from './constants';
import { RegisterStore, ManagerStore, InfoStore, PlanPrices, CreateLogin } from './steps';
/** @name External */
import { Render, Button, MaterialIcon } from 'helpers';
/** @name Constants */
import Colors from 'constants/client/colors';


interface IState {
    stepCurrent: number,
    progressBar: number,
    dataSteps: object
}

interface DefinedDataRegister {
    cep?: string | null,
    cnpj?: string | null,
    city?: string | null,
    email?: string | null,
    login?: string | null,
    address?: string | null,
    facebook?: string | null,
    password?: string | null,
    telephone?: string | null,
    instagram?: string | null,
    cellphone?: string | null,
    fantasy_name?: string | null,
    social_reason?: string | null
}

class StoreRegister extends React.PureComponent<any, IState> {

    Steps: number = 5;

    ProgressByStage: number = 100 / this.Steps;

    DataRegister: DefinedDataRegister = {
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

    constructor(props: any) {
        super(props);
        this.state = {
            stepCurrent: 1,
            progressBar: this.ProgressByStage,
            dataSteps: { ...this.DataRegister },
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
    _handle(obj: any, atrr: string, value: string, callback: Function = () => { }) {
        this.setState((state: any) => ({ ...state, [obj]: {...state[obj], [atrr]: value } }), () => callback())
    }

    /**
     *
     * @param stepSpecified
     * @returns {boolean}
     */
    isVisibleStep(stepSpecified: number) {
        const { stepCurrent } = this.state;
        return stepSpecified === stepCurrent;
    }

    /**
     *
     * @param id
     * @param value
     */
    onChangeInput({ target: { id, value }}: any) {
        this._handle('dataSteps', id, value);
    }

    /**
     *
     */
    nextStep() {
        let { stepCurrent, progressBar } = this.state;
        stepCurrent+=1; progressBar += this.ProgressByStage;
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
            stepCurrent-=1; progressBar -= this.ProgressByStage;
            this.setState({ stepCurrent, progressBar });
        }
    }

    render() {
        const concluded = this.isVisibleStep(this.Steps);
        const { stepCurrent, progressBar, dataSteps } = this.state;

        return (
            <>
                <BackPage>
                    <MaterialIcon
                        hover
                        size="45px"
                        icon={'arrow_back'}
                        onClick={this.goBackPage}
                        style={{ position: 'absolute', left: 25 }}
                        color={Colors.DEFAULT}
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
                        <CountSteps>{stepCurrent} de {this.Steps} etapas.</CountSteps>
                        {registerTabs.map((tab, i) =>
                            <Render key={i} has={this.isVisibleStep(tab.step)}>
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
                            <Button secondary onClick={this.nextStep}>
                                {concluded ? 'Concluir' : 'Continuar'}
                            </Button>
                        </fieldset>
                    </Form>
                </ContainerForm>
            </>
        )
    }
}

export default StoreRegister;
