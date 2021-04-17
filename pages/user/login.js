import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class Login extends React.Component {

    render() {
        console.log("===>", this.props)
        return (
            <div>
                { this.props?.login ? (<h3>Logged in!</h3>) : (<h3>Not Logged in!</h3>) }
                <button onClick={this.props.handleLogin}>Login</button>
                <button onClick={this.props.handleLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      login: state.login
    }
}

const mapDispatchToProps = {
    handleLogin: actions.userLogin,
    handleLogout: actions.userLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);