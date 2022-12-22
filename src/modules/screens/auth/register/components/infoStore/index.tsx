/** @name Images */
import IconFacebook from 'assets/icons/facebook_black.png';
import IconInstagram from 'assets/icons/instagram_black.png';
/** @name Dependencies */
import {memo, ChangeEventHandler, ElementType} from 'react';
/** @name Internal */
import {Profile} from './social';
/** @name External */
import {Card, Row, Col, InputLabel} from "components";

interface InfoStoreProps {
    data: {
        instagram?: string | null,
        facebook?: string | null,
        cep?: string | null,
        city?: string | null,
        address?: string | null
    }
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export const InfoStore: ElementType = memo(({ data: { instagram, facebook, cep, city, address }, onChange }: InfoStoreProps): JSX.Element =>
    <Row>
        <Col cols="12 12 4 4 4">
            <div className="mb-3">
                <InputLabel
                    id="cep"
                    size="lg"
                    type="text"
                    label="CEP"
                    value={cep ?? ''}
                    error={cep === ''}
                    onChange={onChange}
                    placeholder="00000-000"
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
                    value={city ?? ''}
                    error={city === ''}
                    onChange={onChange}
                    placeholder="Exemplo.: Garça"
                />
            </div>
        </Col>
        <Col>
            <div className="mb-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="address"
                    onChange={onChange}
                    value={address ?? ''}
                    error={address === ''}
                    label="Endereço de seu negócio"
                    placeholder="Exemplo.: Rua Doutor Miguel Bruno Ferreira, 347"
                />
            </div>
        </Col>
        <Col>
            <Card className="mb-3 p-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="instagram"
                    label="Instagram"
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
        </Col>
        <Col>
            <Card className="mb-3 p-3">
                <InputLabel
                    size="lg"
                    type="text"
                    id="facebook"
                    label="Facebook"
                    onChange={onChange}
                    placeholder="/sualoja"
                    iconLabelImg={IconFacebook}
                    value={facebook?.toLowerCase() ?? ''}
                />
                <Profile
                    type="facebook"
                    profile={facebook?.toLowerCase()}
                />
            </Card>
        </Col>
    </Row>
, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});