import React, { Component } from 'react';
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

class Partners extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		const { classes } = this.props;
		const createData = (name, calories, fat, carbs, protein) => {
			return { name, calories, fat, carbs, protein };
		};

		const rows = [
			createData(1, 159234, 'Frozen yoghurt', 6.0, 24),
			createData(2, 237234, 'Ice cream sandwich', 9.0, 37),
			createData(3, 262234, 'Eclair', 16.0, 24),
			createData(4, 305234, 'Cupcake', 3.7, 67),
			createData(5, 356234, 'Gingerbread', 16.0, 49),
			createData(2, 237234, 'Ice cream sandwich', 9.0, 37),
			createData(3, 262234, 'Eclair', 16.0, 24),
			createData(4, 305234, 'Cupcake', 3.7, 67),
			createData(5, 356234, 'Gingerbread', 16.0, 49),
			createData(2, 237234, 'Ice cream sandwich', 9.0, 37),
			createData(3, 262234, 'Eclair', 16.0, 24),
			createData(4, 305234, 'Cupcake', 3.7, 67),
			createData(5, 356234, 'Gingerbread', 16.0, 49),
			createData(2, 237234, 'Ice cream sandwich', 9.0, 37),
			createData(3, 262234, 'Eclair', 16.0, 24),
			createData(4, 305234, 'Cupcake', 3.7, 67),
			createData(5, 356234, 'Gingerbread', 16.0, 49)
		];
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
							<Button variant="contained" color="primary">
								Add partner
							</Button>
						</div>
					</form>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>#</TableCell>
									<TableCell align="left">PID</TableCell>
									<TableCell align="left">Name</TableCell>
									<TableCell align="right">Flags</TableCell>
									<TableCell align="right">SSO Products</TableCell>
									<TableCell align="right">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="left">{row.calories}</TableCell>
										<TableCell align="left">{row.fat}</TableCell>
										<TableCell align="right">{row.carbs}</TableCell>
										<TableCell align="right">{row.protein}</TableCell>
										<TableCell align="right">
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
