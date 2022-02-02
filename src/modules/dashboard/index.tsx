/** @name Dependencies */
import React from 'react';

interface IState {

}

class Dashboard extends React.PureComponent<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>Dashboard</div>
        )
    }
}

export default Dashboard;