import React, { Component } from 'react'

import "./SignUp.css"

export default class SignUp extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleOnSubmit = async (event) => {
        event.preventDefault();
    };



    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = this.state;

        return (
            <div className="form-body">
                <main className="form-signin">
                        <form onSubmit={this.handleOnSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                            <label htmlFor="inputFirstName" className="sr-only">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="inputFirstName"
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleOnChange}
                                required
                                autoFocus
                            />

                            <label htmlFor="inputLastName" className="visually-hidden">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="inputLastName"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleOnChange}
                                required
                                autoFocus
                            />
                            <label htmlFor="inputEmail" className="visually-hidden">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="inputEmail"
                                className="form-control"
                                placeholder="Email address"
                                name="email"
                                value={email}
                                onChange={this.handleOnChange}
                                required
                                autoFocus
                            />

                            <label htmlFor="inputPassword" className="sr-only">
                                Password
                            </label>
                            <input
                                type="text"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={this.handleOnChange}
                                required
                            />

                            <label htmlFor="inputConformEmail" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                type="text"
                                id="inputConfirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleOnChange}
                                required
                            />

                            <button className="btn btn-lg btn-primary btn-block" type="submit">
                                Sign Up
                            </button>
                        </form>
                </main>
            </div>
        )
    }
}
