/** @name Dependencies */
import React from 'react';
/** @name External */
import { InputLabel } from 'helpers';

interface RegisterStoreProps {
    data: {
        fantasy_name?: string | null,
        social_reason?: string | null
    },
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const RegisterStore: React.ElementType = React.memo(({ data: { social_reason, fantasy_name }, onChange }: RegisterStoreProps): JSX.Element =>
    <>
        <div className="mb-3">
            <InputLabel
                size="lg"
                type="text"
                id="social_reason"
                onChange={onChange}
                label="Nome da loja"
                placeholder="Razão social"
                value={social_reason ?? ''}
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