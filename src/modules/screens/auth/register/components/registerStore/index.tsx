/** @name Dependencies */
import {memo, ElementType, ChangeEventHandler} from 'react';
/** @name External */
import {InputLabel} from "components";

interface RegisterStoreProps {
    data: {
        fantasyName?: string | null,
        socialReason?: string | null
    },
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export const RegisterStore: ElementType = memo(({ data: { socialReason, fantasyName }, onChange }: RegisterStoreProps): JSX.Element =>
    <>
        <div className="mb-3">
            <InputLabel
                size="lg"
                type="text"
                id="socialReason"
                onChange={onChange}
                label="Nome da loja"
                placeholder="Razão social"
                value={socialReason ?? ''}
                error={socialReason === ''}
            />
        </div>
        <div className="mb-3">
            <InputLabel
                size="lg"
                type="text"
                id="fantasyName"
                onChange={onChange}
                value={fantasyName ?? ''}
                error={fantasyName === ''}
                placeholder="Exemplo.: Yako Lanches"
                label="Como as pessoas costumam chamar sua loja?"
            />
        </div>
    </>
, (prevProps, nextProps) => {
     if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
         return true;
     }
});