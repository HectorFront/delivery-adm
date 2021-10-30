/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name External */
import { InputLabel } from 'helpers';

export const SecondStepFields = React.memo(({ data: { cnpj, email }, onChange }) =>
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
        <div className="mb-3">
            <InputLabel
                size="lg"
                id="email"
                type="email"
                label="Email"
                value={email ?? ''}
                error={email === ''}
                onChange={onChange}
                placeholder="exemplo@gmail.com"
            />
        </div>
    </Fragment>
);