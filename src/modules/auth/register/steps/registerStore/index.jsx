/** @name Dependencies */
import React from 'react';
/** @name External */
import { InputLabel } from 'helpers';

export const RegisterStore = React.memo(({ data: { social_reason, fantasy_name }, onChange }) =>
    <>
        <div className="mb-3">
            <InputLabel
                size="lg"
                type="text"
                id="social_reason"
                onChange={onChange}
                label="Nome da loja"
                value={social_reason ?? ''}
                placeholder="Razão social"
                error={social_reason === ''}
            />
        </div>
        <div className="mb-3">
            <InputLabel
                size="lg"
                type="text"
                id="fantasy_name"
                onChange={onChange}
                value={fantasy_name ?? ''}
                error={fantasy_name === ''}
                placeholder="Exemplo.: Renatão Lanches"
                label="Como as pessoas costumam chamar sua loja?"
            />
        </div>
    </>
);