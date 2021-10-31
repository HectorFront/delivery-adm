/** @name Images */
import IconFacebook from 'assets/icons/facebook.png';
import IconInstagram from 'assets/icons/instagram.png';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name Internal */
import { PreviewFacebook } from './socialPreview/facebook';
import { PreviewInstagram } from './socialPreview/instagram';
/** @name External */
import { Card, Row, Col, InputLabel } from 'helpers';

export const SecondStepFields = React.memo(({ data: { cnpj, email, contact_email, instagram, facebook }, onChange }) =>
    <Fragment>
        <div className="mb-3">
            <InputLabel
                id="cnpj"
                size="lg"
                type="text"
                label="CNPJ"
                value={cnpj ?? ''}
                error={cnpj === ''}
                onChange={onChange}
                placeholder="99.999.999/9999-99"
            />
        </div>
        <Row>
            <Col cols="12 12 6 6 6">
                <div className="mb-4">
                    <InputLabel
                        size="lg"
                        id="email"
                        type="email"
                        onChange={onChange}
                        value={email ?? ''}
                        error={email === ''}
                        label="Email pessoal"
                        placeholder="seunome@gmail.com"
                    />
                </div>
            </Col>
            <Col cols="12 12 6 6 6">
                <div className="mb-4">
                    <InputLabel
                        size="lg"
                        type="email"
                        id="contact_email"
                        onChange={onChange}
                        label="Email de contato"
                        value={contact_email ?? ''}
                        error={contact_email === ''}
                        placeholder="sualoja@gmail.com"
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
                        value={instagram ?? ''}
                        iconLabelImg={IconInstagram}
                    />
                    <PreviewInstagram instagram={instagram}/>
                </Card>
            </Col>
            <Col>
                <Card className="mb-5 p-3">
                    <InputLabel
                        size="lg"
                        type="text"
                        id="facebook"
                        label="Facebook"
                        onChange={onChange}
                        placeholder="/sualoja"
                        value={facebook ?? ''}
                        iconLabelImg={IconFacebook}
                    />
                    <PreviewFacebook facebook={facebook}/>
                </Card>
            </Col>
        </Row>
    </Fragment>
);