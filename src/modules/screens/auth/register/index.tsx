/** @name Styled */
import * as S from '../styles';
/** @name Images */
import LogoSmall from 'assets/logos/small.svg';
/** @name Dependencies */
import {memo, useCallback, useReducer, useState} from 'react';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import {TabStep} from './components';
import {REGISTER_TABS} from './constants';
import {reducer, handleKeyState, handleKeyStateObject} from "utils/reducer/useReducer";
import {RegisterStore, ManagerStore, InfoStore, PlanPrices, CreateLogin} from './components';
/** @name External */
import Colors from 'layout/vars/colors';
import {Render, Button, MaterialIcon} from "components";
import {ModelStoreRegister} from "./model";

type TAddress = {
    cep: string | null,
    name: string | null,
    city: string | null,
    state: string | null,
    publicPlace: string | null,
    number: string | null,
    complement: string | null,
    district: string | null
}

interface IState {
    stepCurrent: number | null,
    progressBar: number | null,
    document: string | null,
    email: string | null,
    login: string | null,
    social: {
        tiktok: string | null,
        twitter: string | null,
        instagram: string | null,
        facebook: string | null,
        linkedin: string | null
    },
    address: TAddress[],
    password: string | null,
    contactTelephone: string | null,
    telephone: string | null,
    contactEmail: string | null,
    fantasyName: string | null,
    socialReason: string | null
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
const STEPS: number = 5;
const PROGRESS_BY_STAGE: number = 100 / STEPS;
const INITIAL_ADDRESS: TAddress = {
    name: null,
    city: null,
    cep: null,
    state: null,
    publicPlace: 'Sim',
    number: null,
    complement: null,
    district: null
};

const INITIAL_STATE: IState = {
    stepCurrent: 1,
    progressBar: PROGRESS_BY_STAGE,
    document: null,
    email: null,
    login: null,
    social: {
        tiktok: null,
        twitter: null,
        instagram: null,
        facebook: null,
        linkedin: null
    },
    address: [INITIAL_ADDRESS],
    password: null,
    contactTelephone: null,
    telephone: null,
    contactEmail: null,
    fantasyName: null,
    socialReason: null
};

const StoreRegister = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const {
        stepCurrent, progressBar, socialReason, fantasyName, document: documentUser, email, contactEmail,
        contactTelephone, telephone, social: { linkedin, twitter, instagram, facebook, tiktok }, address, login, password
    }: IState = state;
    const [boostrapCarousel, setBoostrapCarousel] = useState(null);

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
    const onChangeInputRegister = useCallback(({ target: { id: key, value, dataset } }: { target: HTMLInputElement }) => {
        if(dataset['object']) {
            return handleKeyStateObject(dispatch, dataset['object'], key, value);
        }
        return handleKeyState(dispatch, key, value);
    },[]);

    /**
     *
     */
    const addAddress = () => {
        const addressList = structuredClone(address);
        addressList.push(INITIAL_ADDRESS);
        handleKeyState(dispatch, 'address', addressList);
    };

    const resetCarousel = carousel => {
        const carouselInstance = Bootstrap.Carousel.getInstance(carousel);
        if (carouselInstance) carouselInstance.dispose();
    };

    const deleteAddress = (index: number) => {
        boostrapCarousel.to(index - 1);
        let addressList = structuredClone(address);
        addressList.splice(index, 1);
        handleKeyState(dispatch, 'address', addressList);
    };

    const onChangeAddress = ({ target: { id: key, value, dataset } }: { target: HTMLInputElement | HTMLSelectElement }) => {
        let addressList = structuredClone(address);
        addressList[dataset['index']][key] = value;
        handleKeyState(dispatch, 'address', addressList);
    };

    const submitRegister = async () => {
        const response = await ModelStoreRegister.registerCompany(state);
        console.log(response);
    };

    /**
     *
     */
    const nextStep = useCallback(() => {
        const next = stepCurrent + 1;
        handleKeyState(dispatch, 'stepCurrent', next === 4 ? 5 : next);
        handleKeyState(dispatch, 'progressBar', progressBar + PROGRESS_BY_STAGE);
    },[state.stepCurrent, state.progressBar]);

    /**
     *
     */
    const goBackStep = useCallback(() => {
        if(stepCurrent <= 1) {
            return props.history.goBack();
        } else {
            const back = stepCurrent - 1;
            handleKeyState(dispatch, 'stepCurrent', back === 4 ? 3 : back);
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
                                data={{ socialReason, fantasyName }}
                            />
                        </Render>
                        <Render has={isVisibleStep(2)}>
                            <ManagerStore
                                onChange={onChangeInputRegister}
                                data={{ document: documentUser, email, contactEmail, contactTelephone, telephone }}
                            />
                        </Render>
                        <Render has={isVisibleStep(3)}>
                            <InfoStore
                                addAddress={addAddress}
                                resetCarousel={resetCarousel}
                                deleteAddress={deleteAddress}
                                onChange={onChangeInputRegister}
                                onChangeAddress={onChangeAddress}
                                boostrapCarousel={boostrapCarousel}
                                setBoostrapCarousel={setBoostrapCarousel}
                                data={{ linkedin, twitter, tiktok, instagram, facebook, address }}
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
                        <Button fullWidth secondary onClick={concludedRegister ? submitRegister : nextStep}>
                            {concludedRegister ? 'Concluir' : 'Continuar'}
                        </Button>
                    </fieldset>
                </S.Form>
            </S.ContainerForm>
        </>
    )
});

export default withRouter(StoreRegister);
