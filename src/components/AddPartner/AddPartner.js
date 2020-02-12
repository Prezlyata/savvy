import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import styles from './styles';

class AddPartner extends Component {
	constructor(props) {
		super(props);
        this.state = {}
    }

    render() {
		const { classes } = this.props;
        return (
			<React.Fragment>
				{/* <CssBaseline /> */}
				<Container maxWidth="md" className={classes.wrapper}>
                    <div className={classes.wrapperMenu}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        required
                        label="Partner PID"
                        type="number"
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="Platform"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        required
                        label="Partner name"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="Login Url"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="WebSite"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="FI_ID"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        type="number"
                        required
                        label="Dormancy period"
                        variant="outlined"
                        size="small"
                        defaultValue="120"
                    />
                    
                </form>
                <Divider className={classes.divider}/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Partner active status:</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Active"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <Divider className={classes.divider}/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Email Rules:</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Send Welcome Emails"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Send Welcome Emails at SSO"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Send monitoring and score update notification emails"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Send inactive emails"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <Divider className={classes.divider}/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Partner active status:</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Active"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <Divider className={classes.divider}/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Login Rules:</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Log ‘login’ when widget is displayed in OLB"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Reset activity on api login"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Skip Authentication"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <Divider className={classes.divider}/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Member Profile Rules:</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Member can edit email in profile"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Products:</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="APPLICATION SSO IFRAME INTEGRATED"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="APPLICATION_SSO"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="WIDGET_SSO"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component="fieldset">
                    <FormLabel component="legend">SSO Rules:</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Enable Migration from non-SSO to SSO"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Enable PMID Migration"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Don't Confirm Identity during navigation from OLB to SM website"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Don't Confirm Identity during navigation from Widget to SM website"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Allow multiple accounts from single partner member id"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Allow widget notifications"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Enable monitoring of incoming sso traffic"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AddPartner);