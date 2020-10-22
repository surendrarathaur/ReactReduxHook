import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const signin = {
            email:this.state.email,
            password:this.state.password
        }
        console.log(signin)
    }
    
    render() {
        console.log(this.props)
        return (
            <main className="pa4 black-80">
                <form onSubmit={this.onSubmit} className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Login Students and Teachers</legend>
                        
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" value={this.state.email} onChange={this.onChangeHandler} id="email" />
                        </div>
                
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} id="password" />
                        </div>    
                    </fieldset>
                    <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="/signup" className="f6 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        )
    }
}

export default connect(null)(Signin);