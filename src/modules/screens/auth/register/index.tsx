/** @name Styled */
import * as S from '../styles';
/** @name Images */
import LogoSmall from 'assets/logos/small.svg';
/** @name Dependencies */
import {memo, useCallback, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import {TabStep} from './components';
import {REGISTER_TABS} from './constants';
import {reducer, handleKeyState} from "utils/reducer/useReducer";
import {RegisterStore, ManagerStore, InfoStore, PlanPrices, CreateLogin} from './components';
/** @name External */
import Colors from 'layout/vars/colors';
import {Render, Button, MaterialIcon} from "components";

interface IState {
    stepCurrent: number | null,
    progressBar: number | null,
    cep: string | null,
    cnpj: string | null,
    city: string | null,
    email: string | null,
    login: string | null,
    tiktok: string | null,
    address: string | null,
    twitter: string | null,
    facebook: string | null,
    linkedin: string | null,
    password: string | null,
    telephone: string | null,
    instagram: string | null,
    cellphone: string | null,
    contact_email: string | null,
    fantasy_name: string | null,
    social_reason: string | null
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
const STEPS: number = 5;
const PROGRESS_BY_STAGE: number = 100 / STEPS;
const INITIAL_STATE: IState = {
    stepCurrent: 1,
    progressBar: PROGRESS_BY_STAGE,
    cep: null,
    cnpj: null,
    city: null,
    email: null,
    login: null,
    tiktok: null,
    address: null,
    twitter: null,
    facebook: null,
    linkedin: null,
    password: null,
    telephone: null,
    instagram: null,
    cellphone: null,
    contact_email: null,
    fantasy_name: null,
    social_reason: null
};

const StoreRegister = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const {
        stepCurrent, progressBar, social_reason, fantasy_name, cnpj, email, contact_email,
        telephone, cellphone, linkedin, twitter, instagram, facebook, tiktok, cep, city, address, login, password
    }: IState = state;

    /**
     *
     * @param step
     * @returns {boolean}
     */
    const isVisibleStep = useCallback((step: number) => {
        return step === state.stepCurrent;
    },[state.stepCurrent]);

    /**
     *
     * @param id
     * @param value
     */
    const onChangeInputRegister = useCallback(({ target: { id: key, value }}: { target: HTMLInputElement }) => {
        return handleKeyState(dispatch, key, value);
    },[]);

    /**
     *
     */
    const nextStep = useCallback(() => {
        handleKeyState(dispatch, 'stepCurrent', stepCurrent + 1);
        handleKeyState(dispatch, 'progressBar', progressBar + PROGRESS_BY_STAGE);
    },[state.stepCurrent, state.progressBar]);

    /**
     *
     */
    const goBackStep = useCallback(() => {
        if(stepCurrent <= 1) {
            return props.history.goBack();
        } else {
            handleKeyState(dispatch, 'stepCurrent', stepCurrent - 1);
            handleKeyState(dispatch, 'progressBar', progressBar - PROGRESS_BY_STAGE);
        }
    },[state.stepCurrent, state.progressBar]);

    const concludedRegister: Boolean = isVisibleStep(STEPS);

    return (
        <>
            <S.BackPage>
                <MaterialIcon
                    hover
                    size="45px"
                    icon={'arrow_back'}
                    onClick={goBackStep}
                    color={Colors.DEFAULT}
                    style={{ position: 'absolute', left: 25 }}
                />
                <S.Logo
                    alt="Logo"
                    height="100%"
                    src={LogoSmall}
                    style={{position: 'absolute'}}
                />
            </S.BackPage>
            <S.ContainerBarProgress>
                <S.BarProgress width={`${progressBar}%`}/>
            </S.ContainerBarProgress>
            <S.ContainerForm>
                <S.ContainerText>
                    <S.CountSteps>{stepCurrent} de {STEPS} etapas.</S.CountSteps>
                    {REGISTER_TABS.map((tab, i) =>
                        <Render key={i} has={isVisibleStep(tab.step)}>
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
                        <Render has={isVisibleStep(1)}>
                            <RegisterStore
                                onChange={onChangeInputRegister}
                                data={{ social_reason, fantasy_name }}
                            />
                        </Render>
                        <Render has={isVisibleStep(2)}>
                            <ManagerStore
                                onChange={onChangeInputRegister}
                                data={{ cnpj, email, contact_email, telephone, cellphone }}
                            />
                        </Render>
                        <Render has={isVisibleStep(3)}>
                            <InfoStore
                                onChange={onChangeInputRegister}
                                data={{ linkedin, twitter, tiktok, instagram, facebook, cep, city, address }}
                            />
                        </Render>
                        <Render has={isVisibleStep(4)}>
                            <PlanPrices/>
                        </Render>
                        <Render has={isVisibleStep(5)}>
                            <CreateLogin
                                data={{ login, password }}
                                onChange={onChangeInputRegister}
                            />
                        </Render>
                        <Button fullWidth secondary onClick={nextStep}>
                            {concludedRegister ? 'Concluir' : 'Continuar'}
                        </Button>
                    </fieldset>
                </S.Form>
            </S.ContainerForm>
        </>
    )
}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});

export default withRouter(StoreRegister);
