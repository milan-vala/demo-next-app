import React, { Component } from "react";
import axios from "axios";

class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            title: "",
            body: "",
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("state =>",this.state);
        axios
        .post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Add;