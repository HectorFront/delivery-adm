import React from 'react';

class Login extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(process.env.REACT_APP_DOT_ENV_TEST)
    }

    render() {
        return (
            <div>Login</div>
        )
    }
}

export default Login;
