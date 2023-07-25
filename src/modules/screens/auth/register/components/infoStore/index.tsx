/** @name Images */
import IconTikTok from 'assets/icons/tiktok_black.png';
import IconTwitter from 'assets/icons/twitter_black.png';
import IconLinkedin from 'assets/icons/linkedin_black.png';
import IconFacebook from 'assets/icons/facebook_black.png';
import IconInstagram from 'assets/icons/instagram_black.png';
/** @name Dependencies */
import Bootstrap from 'bootstrap/dist/js/bootstrap.min';
import {memo, ChangeEventHandler, ElementType, MouseEventHandler, useEffect} from 'react';
/** @name Internal */
import {Profile} from './social';
/** @name External */
import * as Carousel from 'components/carousel';
import {Card, Row, Col, InputLabel} from "components";
import {Instance} from "@popperjs/core";

type TAddress = {
    name: string | null,
    city: string | null,
    state: string | null,
    publicPlace: string | null,
    number: string | null,
    complement: string | null,
    district: string | null
}

interface InfoStoreProps {
    data: {
        linkedin?: string | null,
        twitter?: string | null,
        tiktok?: string | null,
        instagram?: string | null,
        facebook?: string | null,
        address?: TAddress[]
    }
    deleteAddress: Function,
    resetCarousel: Function,
    boostrapCarousel: any,
    setBoostrapCarousel: Function,
    addAddress: MouseEventHandler<HTMLButtonElement>,
    onChange: ChangeEventHandler<HTMLInputElement> | undefined,
    onChangeAddress: ChangeEventHandler<HTMLSelectElement | HTMLInputElement> | undefined
}

export const InfoStore: ElementType = memo((props): JSX.Element => {
    const {
        data: {
            linkedin, twitter, tiktok,
            instagram, facebook, address,
        },
        addAddress, onChange,
        onChangeAddress, deleteAddress, boostrapCarousel, setBoostrapCarousel
    }: InfoStoreProps = props;

    useEffect(() => {
        const carouselAddress = document.querySelector('#carousel-address');
        const carousel = new Bootstrap.Carousel(carouselAddress);
        setBoostrapCarousel(carousel);
    },[]);

    useEffect(() => {
        if(boostrapCarousel) {
            boostrapCarousel.to(address.length - 1);
        }
    },[address.length, boostrapCarousel]);

    return (
        <Row>
            <Col>
                <button
                    type="button"
                    onClick={addAddress}
                    className="btn btn-secondary w-100 d-flex align-items-center justify-content-center mb-3"
                >
                    <span className="material-icons-outlined">add</span>&nbsp;Adicionar outro endereço
                </button>
            </Col>
            <Carousel.Container dots={address.length} id="address">
                {address.map((itemAddress, i) =>
                    <Carousel.Item active={i === 0} key={i}>
                        <Card className="mb-3 p-3">
                            <div className="d-flex align-items-center justify-content-between flex-row flex-wrap">
                                <h4 className="fw-bold">{i + 1} - Endereço</h4>
                                {i > 0 &&
                                    <span
                                        onClick={() => deleteAddress(i)}
                                        className="btn btn-danger d-flex align-items-center justify-content-center rounded-pill"
                                    >
                                        <span className="material-icons-outlined">delete</span>
                                    </span>
                                }
                            </div>
                            <Row className="my-3">
                                <Col cols="12 12 4 4 4">
                                    <div className="mb-3">
                                        <InputLabel
                                            id="cep"
                                            size="lg"
                                            type="text"
                                            label="CEP"
                                            data-index={i}
                                            placeholder="00000-000"
                                            onChange={onChangeAddress}
                                            value={itemAddress['cep'] ?? ''}
                                            error={itemAddress['cep'] === ''}
                                        />
                                    </div>
                                </Col>
                                <Col cols="12 12 8 8 8">
                                    <div className="mb-3">
                                        <InputLabel
                                            size="lg"
                                            id="city"
                                            type="text"
                                            label="Cidade"
                                            data-index={i}
                                            onChange={onChangeAddress}
                                            placeholder="Exemplo.: Garça"
                                            value={itemAddress['city'] ?? ''}
                                            error={itemAddress['city'] === ''}
                                        />
                                    </div>
                                </Col>
                                <Col cols="12 12 4 4 4">
                                    <div className="mb-3">
                                        <InputLabel
                                            size="lg"
                                            id="state"
                                            type="text"
                                            label="Estado"
                                            data-index={i}
                                            onChange={onChangeAddress}
                                            placeholder="Exemplo.: SP"
                                            value={itemAddress['state'] ?? ''}
                                            error={itemAddress['state'] === ''}
                                        />
                                    </div>
                                </Col>
                                <Col cols="12 12 8 8 8">
                                    <div className="mb-3">
                                        <InputLabel
                                            size="lg"
                                            id="name"
                                            type="text"
                                            data-index={i}
                                            onChange={onChangeAddress}
                                            label="Endereço de seu negócio"
                                            value={itemAddress['name'] ?? ''}
                                            error={itemAddress['name'] === ''}
                                            placeholder="Exemplo.: Rua Doutor Miguel Bruno Ferreira, 347"
                                        />
                                    </div>
                                </Col>
                                <Col cols="12 12 3 3 3">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Lugar público
                                        </label>
                                        <select
                                            data-index={i}
                                            id="publicPlace"
                                            onChange={onChangeAddress}
                                            value={itemAddress['publicPlace']}
                                            className="form-select form-select-lg"
                                        >
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col cols="12 12 9 9 9">
                                    <div className="mb-3">
                                        <InputLabel
                                            size="lg"
                                            type="text"
                                            data-index={i}
                                            id="complement"
                                            label="Complemento"
                                            onChange={onChangeAddress}
                                            value={itemAddress['complement'] ?? ''}
                                            error={itemAddress['complement'] === ''}
                                            placeholder="Exemplo.: Restaurante ao lado do Banco do Brasil"
                                        />
                                    </div>
                                </Col>
                                <Col cols="12 12 9 9 9">
                                    <div className="mb-3">
                                        <InputLabel
                                            size="lg"
                                            type="text"
                                            id="district"
                                            label="Bairro"
                                            data-index={i}
                                            onChange={onChangeAddress}
                                            placeholder="Exemplo.: Cascata"
                                            value={itemAddress['district'] ?? ''}
                                            error={itemAddress['district'] === ''}
                                        />
                                    </div>
                                </Col>
                                <Col cols="12 12 3 3 3">
                                    <div className="mb-3">
                                        <InputLabel
                                            size="lg"
                                            type="text"
                                            id="number"
                                            data-index={i}
                                            label="Número"
                                            placeholder="000"
                                            onChange={onChangeAddress}
                                            value={itemAddress['number'] ?? ''}
                                            error={itemAddress['number'] === ''}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Carousel.Item>
                )}
            </Carousel.Container>
            <Col>
                <label className="form-label fw-bold">Redes Sociais</label>
                <Carousel.Container dots={5}>
                    <Carousel.Item active>
                        <Card className="mb-3 p-3">
                            <InputLabel
                                size="lg"
                                type="text"
                                id="instagram"
                                label="Instagram"
                                data-object='social'
                                onChange={onChange}
                                placeholder="@sualoja"
                                iconLabelImg={IconInstagram}
                                value={instagram?.toLowerCase() ?? ''}
                            />
                            <Profile
                                type="instagram"
                                profile={instagram?.toLowerCase()}
                            />
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className="mb-3 p-3">
                            <InputLabel
                                size="lg"
                                type="text"
                                id="facebook"
                                label="Facebook"
                                onChange={onChange}
                                data-object='social'
                                placeholder="@sualoja"
                                iconLabelImg={IconFacebook}
                                value={facebook?.toLowerCase() ?? ''}
                            />
                            <Profile
                                type="facebook"
                                profile={facebook?.toLowerCase()}
                            />
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className="mb-3 p-3">
                            <InputLabel
                                size="lg"
                                type="text"
                                id="tiktok"
                                label="TikTok"
                                data-object='social'
                                onChange={onChange}
                                placeholder="@sualoja"
                                iconLabelImg={IconTikTok}
                                value={tiktok?.toLowerCase() ?? ''}
                            />
                            <Profile
                                type="tiktok"
                                profile={tiktok?.toLowerCase()}
                            />
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className="mb-3 p-3">
                            <InputLabel
                                size="lg"
                                type="text"
                                id="twitter"
                                label="Twitter"
                                onChange={onChange}
                                data-object='social'
                                placeholder="@sualoja"
                                iconLabelImg={IconTwitter}
                                value={twitter?.toLowerCase() ?? ''}
                            />
                            <Profile
                                type="twitter"
                                profile={twitter?.toLowerCase()}
                            />
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className="mb-3 p-3">
                            <InputLabel
                                size="lg"
                                type="text"
                                id="linkedin"
                                label="LinkedIn"
                                onChange={onChange}
                                data-object='social'
                                placeholder="@sualoja"
                                iconLabelImg={IconLinkedin}
                                value={linkedin?.toLowerCase() ?? ''}
                            />
                            <Profile
                                type="linkedin"
                                profile={linkedin?.toLowerCase()}
                            />
                        </Card>
                    </Carousel.Item>
                </Carousel.Container>
            </Col>
        </Row>
    );
});