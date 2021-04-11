import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {

    render() {
        console.log("===>", this.props)
        return (
            <div>
                <button onClick={this.props.handleLogin}>Login</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
    }
}

function mapDispatchToProps(dispatch){
    console.log("matdispatchToProps ====>")
    return {
        handleLogin: () => dispatch({ type: "USER_LOGIN" }),
    }
}

export default connect(mapStateToProps)(Login) ;