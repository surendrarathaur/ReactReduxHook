import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname:'',
            email:'',
            mobile:'',
            role:'',
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
        const signup = {
            fullname:this.state.fullname,
            email:this.state.email,
            mobileno:this.state.mobile,
            role:this.state.role,
            password:this.state.password
        }
        console.log(signup)
    }
    
    render() {
        return (
            <main className="pa4 black-80">
                <form onSubmit={this.onSubmit} className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register for Students and Teachers</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="fullname">Full Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="fullname" value={this.state.fullname} onChange={this.onChangeHandler} id="fullname" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" value={this.state.email} onChange={this.onChangeHandler} id="email" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="mobile">Mobile</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="mobile" value={this.state.mobile} onChange={this.onChangeHandler} id="mobile" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="role">Role</label>
                            <select name="role" defaultValue={this.state.role} onChange={this.onChangeHandler} >
                                <option value="">Select Role</option>
                                <option value="teacher">Teacher</option>
                                <option value="stutent">Stutent</option>
                            </select>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} id="password" />
                        </div>    
                    </fieldset>
                    <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="/" className="f6 link dim black db">Log In</a>
                    </div>
                </form>
            </main>
        )
    }
}

export default connect(null)(Signup);