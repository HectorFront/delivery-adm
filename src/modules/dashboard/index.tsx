/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { BoxRealTime } from "./helpers";
/** @name External */

interface IState {

}

class Dashboard extends React.PureComponent<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BoxRealTime/>
        )
    }
}

export default Dashboard;