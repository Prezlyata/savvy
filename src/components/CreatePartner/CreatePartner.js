import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class CreatePartner extends Component {
	constructor(props) {
		super(props);
        this.state = {}
    }

    render() {
		const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.test}>
                    hello create partner
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(CreatePartner);