/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { BoxRealTime } from "./components";
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
            <BoxRealTime/>
        )
    }
}

export default withRouter(Home);