/** @name Dependencies */
import {memo, useCallback, useEffect, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import {RequestRealtime} from "./components";
import {reducer} from "utils/reducer/useReducer";
/** @name External */

interface IState {}

interface ChildComponentProps extends RouteComponentProps<any> {};

export const INITIAL_STATE: IState = {};

const Home = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    /**
     *
     * @param attr
     * @param value
     * @param callback
     * @private
     */
    const handleState = useCallback((attr: string, value: any, callback: Function = () => {}) => {
        dispatch({type: 'set', attr, value});
        return callback();
    },[]);

    /**
     *
     * @param obj
     * @param attr
     * @param value
     * @param callback
     * @private
     */
    const handleObject = useCallback((obj: string, attr: string, value: any, callback: Function = () => {}) => {
        dispatch({type: 'setObject', obj, attr, value});
        return callback();
    },[]);

    useEffect(() => {
        console.log('hello')
    },[]);

    return (
        <RequestRealtime/>
    );

}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});

export default withRouter(Home);