import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { setAuthUserData, getAuthUserData, login, logout } from './actions';

import { withStyles } from '@material-ui/core';
import styles from './styles';

import LoginForm from './LoginForm'

class LoginFormContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    submit = (values) => {
		// console.log(values);
		const user = {
            login: values.login,
            password: values.password,
		};
		// const newPartner = {};
		console.log(user);
		// this.props.addNewPartner(newPartner);
		// this.props.history.push('/partners');
    };
    
    auth = (formData) => {
        this.props.login(formData.login, formData.password )
    }

    render(){
        return (
            <div>
                <LoginForm onSubmit={this.submit} />
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
	return {
		login: () => dispatch(login())
	};
};

const mapStateToProps = (state) => {
	return {
		
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(LoginFormContainer);