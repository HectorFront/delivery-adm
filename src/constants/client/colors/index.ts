type envProps = {
    [index: string]: any
}
const env: envProps = process.env;

const Colors = {
    DEFAULT: env.REACT_APP_DEFAULT_COLOR,
    DARK: env.REACT_APP_DARK_COLOR,
    LIGHT: env.REACT_APP_LIGHT_COLOR,
    SECONDARY: env.REACT_APP_SECONDARY_COLOR,
    BG_FACEBOOK: env.REACT_APP_FACEBOOK_BACKGROUND_COLOR,
    BG_INSTAGRAM: env.REACT_APP_INSTAGRAM_BACKGROUND_COLOR,
    MAIN_INSTAGRAM: env.REACT_APP_INSTAGRAM_MAIN_COLOR
};

export default Colors;