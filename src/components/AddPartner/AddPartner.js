import React, { Component } from 'react';
import {inputFields, partnerStatus, emailRules, loginRules, memberProfileRules, products, ssoRules} from './configFields'
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

class AddPartner extends Component {
	constructor(props) {
		super(props);
        this.state = {}
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
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AddPartner);