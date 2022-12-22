/**
 *
 * @param idButton
 * @returns {function(): void}
 * @constructor
 */
export const submitEnter = (idButton: string) => {
    const enterEvent = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            const submit: HTMLElement = document.querySelector(`#${idButton}`);
            submit.click();
        }
    };
    document.addEventListener('keypress', enterEvent);
    return () => document.removeEventListener('keypress', enterEvent);
};