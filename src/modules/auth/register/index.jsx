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
import { RegisterStore, ManagerStore, InfoStore, PlanPrices, CreateLogin } from './contentSteps';
/** @name External */
import { Render, Button, MaterialIcon } from 'helpers';

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
                    <CountSteps>{stepCurrent} de {this.steps} etapas.</CountSteps>
                    <ContainerText>
                        <Render has={this.isVisibleStep(1)}>
                            <TabStep
                                icon="add_business"
                                paintedText="Registre"
                                normalText="sua loja"
                                description="Preencha estas informações abaixo para começar."
                            />
                        </Render>
                        <Render has={this.isVisibleStep(2)}>
                            <TabStep
                                icon="person_pin"
                                paintedText="Responsável"
                                normalText="da loja"
                                description="Preencha estes dados como pessoa que tenha o nome no contrato social, seja você um sócio administrativo ou dono(a) da loja."
                            />
                        </Render>
                        <Render has={this.isVisibleStep(3)}>
                            <TabStep
                                icon="receipt_long"
                                paintedText="Dados"
                                normalText="da loja"
                                description="Preencha os dados de onde o seu negócio está localizado e as redes sociais que você usa para divulgação da loja."
                            />
                        </Render>
                        <Render has={this.isVisibleStep(4)}>
                            <TabStep
                                icon="request_quote"
                                paintedText="Nossos"
                                normalText="planos"
                                description="Escolha o plano que seria ideal para você e seu negócio."
                            />
                        </Render>
                        <Render has={this.isVisibleStep(5)}>
                            <TabStep
                                icon="badge"
                                paintedText="Ta quase!"
                                normalText="Agora crie seu usuário"
                                description="Este usuário e senha será para você acessar nossa plataforma e aplicativo."
                            />
                        </Render>
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
                                {stepCurrent === this.steps ? 'Concluir' : 'Continuar'}
                            </Button>
                        </fieldset>
                    </Form>
                </ContainerForm>
            </Fragment>
        )
    }
}

export default StoreRegister;
