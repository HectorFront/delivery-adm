/** @name Styled */
import {
    Form,
    BackPage,
    CountSteps,
    BarProgress,
    ContainerText,
    ContainerForm,
    ContainerBarProgress, Logo
} from '../styles';
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


interface DefinedDataRegister {
    cep: string | null,
    cnpj: string | null,
    city: string | null,
    email: string | null,
    login: string | null,
    address: string | null,
    facebook: string | null,
    password: string | null,
    telephone: string | null,
    instagram: string | null,
    cellphone: string | null,
    contact_email: string | null,
    fantasy_name: string | null,
    social_reason: string | null
}

interface IState {
    stepCurrent: number,
    progressBar: number,
    dataSteps: DefinedDataRegister
}

class StoreRegister extends React.PureComponent<any, IState> {

    private steps: number = 5;
    private progressByStage: number = 100 / this.steps;
    private dataRegister: DefinedDataRegister = {
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
        contact_email: null,
        fantasy_name: null,
        social_reason: null
    };

    constructor(props: any) {
        super(props);
        this.state = {
            stepCurrent: 1,
            progressBar: this.progressByStage,
            dataSteps: { ...this.dataRegister },
        };
        this.bindFunctions();
    }

    /**
     *
     */
    bindFunctions() {
        this.nextStep = this.nextStep.bind(this);
        this.goBackPage = this.goBackPage.bind(this);
        this.onChangeInputRegister = this.onChangeInputRegister.bind(this);
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
    onChangeInputRegister({ target: { id, value }}: { target: HTMLInputElement }) {
        this._handleObject('dataSteps', id, value);
    }

    /**
     *
     */
    nextStep() {
        let { stepCurrent, progressBar } = this.state;
        stepCurrent+=1; progressBar += this.progressByStage;
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
            stepCurrent-=1; progressBar -= this.progressByStage;
            this.setState({ stepCurrent, progressBar });
        }
    }

    render() {
        const concluded: Boolean = this.isVisibleStep(this.steps);
        const { stepCurrent, progressBar, dataSteps }: IState  = this.state;

        const {
            social_reason, fantasy_name,
            cnpj, email, contact_email, telephone, cellphone,
            instagram, facebook, cep, city, address,
            login, password
        }: DefinedDataRegister = dataSteps;

        return (
            <>
                <BackPage>
                    <MaterialIcon
                        hover
                        size="45px"
                        icon={'arrow_back'}
                        color={Colors.DEFAULT}
                        onClick={this.goBackPage}
                        style={{ position: 'absolute', left: 25 }}
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
                                    onChange={this.onChangeInputRegister}
                                    data={{ social_reason, fantasy_name }}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(2)}>
                                <ManagerStore
                                    onChange={this.onChangeInputRegister}
                                    data={{ cnpj, email, contact_email, telephone, cellphone }}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(3)}>
                                <InfoStore
                                    onChange={this.onChangeInputRegister}
                                    data={{ instagram, facebook, cep, city, address }}
                                />
                            </Render>
                            <Render has={this.isVisibleStep(4)}>
                                <PlanPrices/>
                            </Render>
                            <Render has={this.isVisibleStep(5)}>
                                <CreateLogin
                                    onChange={this.onChangeInputRegister}
                                    data={{ login, password }}
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
