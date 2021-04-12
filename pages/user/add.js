import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

class Add extends Component {

    constructor(props) {
        super(props);
        console.log("add page data props => ",props);

        this.state = {
            userId: "",
            title: "",
            body: "",
            dataPosted: false,
            loading: false,
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        this.setState({ loading: true });
        event.preventDefault();
        axios
        .post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response);
            this.setState({ dataPosted: true, loading: false });
        })
        .catch(error => {
            console.log(error);
            this.setState({ loading: false })
        })
    }

    render() {
        const { userId, title, body } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={userId}
                            name="userId"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={title}
                            name="title"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={body}
                            name="body"
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" disabled={this.state.loading}>Submit</button>
                </form>
                
                { this.state.dataPosted ? (
                    <Alert variant="success">
                        Submitted!
                    </Alert>
                ) : null }

                { this.state.loading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> ) : null }
                
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);