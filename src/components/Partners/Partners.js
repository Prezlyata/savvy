import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
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
			data: [
				{
					id: 1,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 2,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 3,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 4,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 5,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 6,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 7,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 8,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 9,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 10,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 11,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 12,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 13,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 14,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 15,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 16,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				},
				{
					id: 17,
					pid: 159234,
					name: 'Frozen yoghurt',
					img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
					url: 'https://www.google.com/',
					flag: 6.0,
					sso: 'WIDGET_SSO'
				}
			]
		};
	}

	componentDidMount() {}

	render() {
		const { classes } = this.props;
		const { data } = this.state;
		return (
			<React.Fragment>
				{/* <CssBaseline /> */}
				<Container maxWidth="md" className={classes.wrapper}>
					{/* <Typography component="div" /> */}
					<form className={classes.root} noValidate autoComplete="off">
						<div className={classes.input}>
							<TextField
								id="outlined-search"
								label="Partner PID"
								type="PID"
								variant="outlined"
								size="small"
							/>
							<TextField
								id="outlined-search"
								label="Partner name"
								type="name"
								variant="outlined"
								size="small"
							/>
							<Button component={Link} to={'/partners/createPartner'} variant="contained" color="primary">
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
								{data.map((partner) => (
									<TableRow key={partner.id}>
										<TableCell component="th" scope="row" className={classes.tableMobile}>
											{partner.id}
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
												<span className={classes.flagContent}>
													<CheckIcon color="primary" />&nbsp;Partner is active
												</span>
												<span className={classes.flagContent}>
													<CheckIcon color="primary" />&nbsp;Send Welcome Email
												</span>
												<span className={classes.flagContent}>
													<CheckIcon color="primary" />&nbsp;Send Welcome Email SSO
												</span>
												<span className={classes.flagContent}>
													<CheckIcon color="primary" />&nbsp;Log Widget View
												</span>
												<span className={classes.flagContent}>
													<RemoveIcon color="secondary" />&nbsp;Has Joint Accounts
												</span>
												<span className={classes.flagContent}>
													<RemoveIcon color="secondary" />&nbsp;Migration View Enabled
												</span>
												<span className={classes.flagContent}>
													<RemoveIcon color="secondary" />&nbsp;Skip Confirm Identity
												</span>
												<span className={classes.flagContent}>
													<RemoveIcon color="secondary" />&nbsp;Skip Auth
												</span>
												<span className={classes.flagContent}>
													<RemoveIcon color="secondary" />&nbsp;SSO traffic monitoring
												</span>
											</div>
											{partner.flag}
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

export default withStyles(styles)(Partners);
