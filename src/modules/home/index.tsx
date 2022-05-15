/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import {BoxRealtime} from "./components";
import {reducer} from "utils/reducer/useReducer";
/** @name External */

interface IState {}

interface ChildComponentProps extends RouteComponentProps<any> {};

export const INITIAL_STATE = {};

const Home = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <BoxRealtime/>
    )
}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});

export default withRouter(Home);