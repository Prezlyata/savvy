import React, { Component } from 'react';
import {inputFields, partnerStatus, emailRules, loginRules, memberProfileRules, products, ssoRules} from './configFields'
import {reduxForm, Field} from 'redux-form';
import { compose } from 'redux'
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import styles from './styles';

import ContactForm from './ContactForm'


const FIELDS = {
    partnerPID:{
        type: 'input',
        lable: 'Title for Post'
    },
    platform:{
        type: 'input',
        lable: 'Enter platform'
    },
    partnerName:{
        type: 'input',
        lable: 'Enter partner name' 
    }
};

// ['partnerPID', 'platform', 'partnerName', 'loginUrl', 'webSite', 'FIID', 'dormancyPeriod']

class AddPartner extends Component {
	constructor(props) {
		super(props);
        this.state = {
            partner: []
        }
    }

    handleAddNewPartner = (pid, name, img, url, sso, partnerIsActive, sendWelcomeEmail, sendWelcomeEmailSSO, logWidgetView, hasJointAccounts, migrationViewEnabled, skipConfirmIdentity, skipAuth, ssoTrafficMonitoring) =>{
        const date = new Date();
        const newPartner = {
            id: Date.now(),
            pid: pid,
            name: name,
            img: img,
            url: url,
            sso: sso,
            partnerIsActive: partnerIsActive,
            sendWelcomeEmail: sendWelcomeEmail,
            sendWelcomeEmailSSO: sendWelcomeEmailSSO,
            logWidgetView: logWidgetView,
            hasJointAccounts: hasJointAccounts,
            migrationViewEnabled: migrationViewEnabled,
            skipConfirmIdentity: skipConfirmIdentity,
            skipAuth: skipAuth,
            ssoTrafficMonitoring: ssoTrafficMonitoring
        }
        const newPartnerList = this.state.partner
        newPartnerList.unshift(newPartner);
        this.setState({
			partner: newPartnerList
		});
    }

    submit = values =>{
        console.log(values)
    }

    render() {
		const { classes } = this.props;
        return (
			<React.Fragment>
				<Container maxWidth="md" className={classes.wrapper}>
                    <div className={classes.wrapperMenu}>
                    <form className={classes.root} noValidate autoComplete="off">
                    {inputFields.map((field, idx) => (
                        <TextField 
                            key={field.label}
                            label={field.label}
                            type={field.type}
                            variant={field.variant}
                            size={field.size}
                            defaultValue={field.defaultValue}
                            // {field.required}
                            required={field.required = false}
                        />
                    ))}
                    </form>
                    <Divider className={classes.divider}/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Partner active status:</FormLabel>
                        <FormGroup aria-label="position" row>
                            {partnerStatus.map((field) =>(
                                    <FormControlLabel
                                    key={field.label}
                                    label={field.label}
                                    value={field.value}
                                    control={<Checkbox color={field.color} />}
                                    labelPlacement={field.labelPlacement}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <Divider className={classes.divider}/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Email Rules:</FormLabel>
                        <FormGroup aria-label="position">
                            {emailRules.map((field) =>(
                                    <FormControlLabel
                                    key={field.label}
                                    label={field.label}
                                    value={field.value}
                                    control={<Checkbox color={field.color} />}
                                    labelPlacement={field.labelPlacement}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <Divider className={classes.divider}/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Login Rules:</FormLabel>
                        <FormGroup aria-label="position">
                            {loginRules.map((field) =>(
                                    <FormControlLabel
                                    key={field.label}
                                    label={field.label}
                                    value={field.value}
                                    control={<Checkbox color={field.color} />}
                                    labelPlacement={field.labelPlacement}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <Divider className={classes.divider}/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Member Profile Rules:</FormLabel>
                        <FormGroup aria-label="position">
                            {memberProfileRules.map((field) =>(
                                    <FormControlLabel
                                    key={field.label}
                                    label={field.label}
                                    value={field.value}
                                    control={<Checkbox color={field.color} />}
                                    labelPlacement={field.labelPlacement}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <Divider className={classes.divider} />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Products:</FormLabel>
                        <FormGroup aria-label="position">
                            {products.map((field) =>(
                                <FormControlLabel
                                    key={field.label}
                                    label={field.label}
                                    value={field.value}
                                    control={<Checkbox color={field.color} />}
                                    labelPlacement={field.labelPlacement}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <Divider className={classes.divider} />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">SSO Rules:</FormLabel>
                        <FormGroup aria-label="position">
                            {ssoRules.map((field) =>(
                                <FormControlLabel
                                    key={field.label}
                                    label={field.label}
                                    value={field.value}
                                    control={<Checkbox color={field.color} />}
                                    labelPlacement={field.labelPlacement}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    </div>
                    <Button className={classes.btn} variant="contained" color="primary">
						Add partner
					</Button>

                </Container>
                {/* <form onSubmit={this.handleSubmit()}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" component="input" type="text" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" component="input" type="text" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field name="email" component="input" type="email" />
                        </div>
                        <button type="submit">Submit</button>
                    </form> */}

                    <ContactForm onSubmit={this.submit}/>
            </React.Fragment>
        )
    }
}

// export default withStyles(styles)(AddPartner);

// export default reduxForm ({
//     from: 'my-customer-registration-form',
//     onSubmit,
// }) (ReduxForm); 


// AddPartner = reduxForm({
//     from: 'partner'
// })(AddPartner)
export default withStyles(styles)(AddPartner);

// export default compose(reduxForm ({
//     from: 'partner',
// }), withStyles(styles)(AddPartner))