import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

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

const mapStateToProps = (state) => {
    return {
      login: state.login
    }
}

const mapDispatchToProps = {
    handleLogin: actions.userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);