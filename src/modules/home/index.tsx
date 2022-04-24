/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { BoxRealtime } from "./components";
import { withRouter, RouteComponentProps } from 'react-router-dom';
/** @name External */

interface IState {

}

interface ChildComponentProps extends RouteComponentProps<any> {}

class Home extends React.PureComponent<ChildComponentProps, IState> {

    constructor(props: ChildComponentProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BoxRealtime/>
        )
    }
}

export default withRouter(Home);