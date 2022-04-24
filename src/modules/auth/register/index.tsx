/** @name Styled */
import * as S from '../styles';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
/** @name Internal */
import { TabStep } from './helpers';
import { REGISTER_TABS } from './constants';
import { RegisterStore, ManagerStore, InfoStore, PlanPrices, CreateLogin } from './components';
/** @name External */
import { Render, Button, MaterialIcon } from 'helpers';
import Colors from 'constants/client/colors';

interface DataRegisterProps {
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
    dataSteps: DataRegisterProps
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const STEPS: number = 5;
export const PROGRESS_BY_STAGE: number = 100 / STEPS;
export const INITIAL_DATA_REGISTER: DataRegisterProps = {
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

class StoreRegister extends React.PureComponent<ChildComponentProps, IState> {

    constructor(props: ChildComponentProps) {
        super(props);
        this.state = {
            stepCurrent: 1,
            progressBar: PROGRESS_BY_STAGE,
            dataSteps: { ...INITIAL_DATA_REGISTER },
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
    _handleObject(obj: string, atrr: string, value: string, callback: Function = () => { return; }) {
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
        stepCurrent+=1;
        progressBar += PROGRESS_BY_STAGE;
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
            stepCurrent-=1;
            progressBar -= PROGRESS_BY_STAGE;
            this.setState({ stepCurrent, progressBar });
        }
    }

    render() {
        const CONCLUDED_REGISTER: Boolean = this.isVisibleStep(STEPS);
        const { stepCurrent, progressBar, dataSteps }: IState  = this.state;

        const {
            social_reason, fantasy_name, cnpj, email, contact_email,
            telephone, cellphone, instagram, facebook, cep, city, address, login, password
        }: DataRegisterProps = dataSteps;

        return (
            <>
                <S.BackPage>
                    <MaterialIcon
                        hover
                        size="45px"
                        icon={'arrow_back'}
                        color={Colors.DEFAULT}
                        onClick={this.goBackPage}
                        style={{ position: 'absolute', left: 25 }}
                    />
                    <S.Logo
                        alt="Logo"
                        height="100%"
                        src={LogoDefault}
                    />
                </S.BackPage>
                <S.ContainerBarProgress>
                    <S.BarProgress width={`${progressBar}%`}/>
                </S.ContainerBarProgress>
                <S.ContainerForm>
                    <S.ContainerText>
                        <S.CountSteps>{stepCurrent} de {STEPS} etapas.</S.CountSteps>
                        {REGISTER_TABS.map((tab, i) =>
                            <Render key={i} has={this.isVisibleStep(tab.step)}>
                                <TabStep
                                    icon={tab.icon}
                                    paintedText={tab.painted_text}
                                    normalText={tab.normal_text}
                                    description={tab.description}
                                />
                            </Render>
                        )}
                    </S.ContainerText>
                    <S.Form>
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
                                    data={{ login, password }}
                                    onChange={this.onChangeInputRegister}
                                />
                            </Render>
                            <Button secondary onClick={this.nextStep}>
                                {CONCLUDED_REGISTER ? 'Concluir' : 'Continuar'}
                            </Button>
                        </fieldset>
                    </S.Form>
                </S.ContainerForm>
            </>
        )
    }
}

export default withRouter(StoreRegister);
