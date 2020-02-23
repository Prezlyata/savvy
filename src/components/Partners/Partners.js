import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPartnersList } from './actions';

import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Tooltip from '@material-ui/core/Tooltip';

import CheckIcon from '@material-ui/icons/Check';
import RemoveIcon from '@material-ui/icons/Remove';

class Partners extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.props.getPartnersList();
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				{/* <CssBaseline /> */}
				<Container maxWidth="md" className={classes.wrapper}>
					{/* <Typography component="div" /> */}
					<form className={classes.root} noValidate autoComplete="off">
						<div className={classes.input}>
							<TextField id="pid-search" label="Partner PID" type="PID" variant="outlined" size="small" />
							<TextField
								id="partner-search"
								label="Partner name"
								type="name"
								variant="outlined"
								size="small"
							/>
							<Button component={Link} to={'/partners/addPartner'} variant="contained" color="primary">
								Add partner
							</Button>
						</div>
					</form>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell className={classes.tableMobile}>#</TableCell>
									<TableCell align="left">PID</TableCell>
									<TableCell align="left">Name</TableCell>
									<TableCell align="left" className={classes.tableMobile}>
										Flags
									</TableCell>
									<TableCell align="left" className={classes.tableMobile}>
										SSO Products
									</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.props.partnersList.map((partner, idx) => (
									<TableRow key={partner.id}>
										<TableCell component="th" scope="row" className={classes.tableMobile}>
											{idx + 1}
										</TableCell>
										<TableCell align="left">{partner.pid}</TableCell>
										<TableCell align="left">
											<div className={classes.partnerContainer}>
												<div className={classes.imgContainer}>
													<img className={classes.img} src={partner.img} alt={partner.name} />
												</div>
												{partner.name}
												<a href={partner.url}>{partner.url}</a>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableMobile}>
											<div className={classes.flagContainer}>
												{partner.partnerIsActive === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Partner is active
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Partner is active
													</span>
												)}
												{partner.sendWelcomeEmail === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Send Welcome Email
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Send Welcome Email
													</span>
												)}
												{partner.sendWelcomeEmailSSO === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Send Welcome Email SSO
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Send Welcome Email SSO
													</span>
												)}
												{partner.logWidgetView === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Log Widget View
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Log Widget View
													</span>
												)}
												{partner.hasJointAccounts === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Has Joint Accounts
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Has Joint Accounts
													</span>
												)}
												{partner.migrationViewEnabled === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Migration View Enabled
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Migration View Enabled
													</span>
												)}
												{partner.skipConfirmIdentity === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Skip Confirm Identity
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Skip Confirm Identity
													</span>
												)}
												{partner.skipAuth === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;Skip Auth
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;Skip Auth
													</span>
												)}
												{partner.ssoTrafficMonitoring === false ? (
													<span className={classes.flagContent}>
														<RemoveIcon color="secondary" />&nbsp;SSO traffic monitoring
													</span>
												) : (
													<span className={classes.flagContent}>
														<CheckIcon color="primary" />&nbsp;SSO traffic monitoring
													</span>
												)}
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableMobile}>
											{partner.sso}
										</TableCell>
										<TableCell align="left">
											<div className={classes.editActionMobile}>
												{' '}
												<Tooltip title="Edit" aria-label="edit">
													<IconButton color="primary" size="small">
														<EditIcon />
													</IconButton>
												</Tooltip>
												<Tooltip title="Edit" aria-label="edit">
													<IconButton color="primary" size="small">
														<PersonOutlineIcon />
													</IconButton>
												</Tooltip>
												<Tooltip title="Edit" aria-label="edit">
													<IconButton color="primary" size="small">
														<LibraryBooksIcon />
													</IconButton>
												</Tooltip>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPartnersList: () => dispatch(getPartnersList())
	};
};

const mapStateToProps = (state) => {
	return {
		partnersList: state.partnersReducer.partnersList
	};
};

// export default connect(mapStateToProps, mapDispatchToProps); withStyles(styles)(Partners);
export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Partners);
