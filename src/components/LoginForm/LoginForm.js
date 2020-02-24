import React from 'react';
import { validate } from '../../utils/validators';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { renderTextField } from '../common/FormsControls/FormsControls';

import styles from './styles';

const LoginForm = ({handleSubmit, pristine, reset, submitting, classes}) => {
	// const { handleSubmit, pristine, reset, submitting, classes } = props;
	return (
        <React.Fragment>
            <form onSubmit={handleSubmit} className={classes.wrapper}>
            <Typography variant="h5" align="center">
                Admin Tool Sign In
            </Typography>
            <Typography component="h2" align="center">
                Enter your username and password to sign in
            </Typography>
                <Field
                    name='login'
                    label='Login'
                    type='text'
                    size='small'
                    component={renderTextField}
                />
                <Field
                    name='password'
                    label='Password'
                    type='password'
                    size='small'
                    component={renderTextField}
                />    
                <Button className={classes.btn} variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
                    Sign In
                </Button>
            </form>
        </React.Fragment>
	);
};

export default compose(
	reduxForm({
		// a unique identifier for this form
		form: 'loginForm',
		validate
		// asyncValidate
	}),
	withStyles(styles)
)(LoginForm);
