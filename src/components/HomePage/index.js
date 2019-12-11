import React from 'react'
import './styles.css'
import { Typography, Paper, Avatar, Button, Divider } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import { red } from '@material-ui/core/colors'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
				[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function HomePage(props) {
	const { classes } = props

	return (
		<div id="brand"><main className={classes.main} id="brand">
			<Paper className={classes.paper}>
			<img src= "smallLogo.png" id="logo"/>
				<Typography component="h1" variant="h5">
					Welcome to squadMaster
				</Typography>
				<Button id="btn1"
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/register"
					className={classes.submit}>
					Register
          		</Button>
				<Button id="btn1"
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/login"
					className={classes.submit}>
					Login
          		</Button>
				<Button id="btn1"
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/dashboard"
					className={classes.submit}>
					Dashboard
          		</Button>
			</Paper>
		</main>
		</div>
	)
}

export default withStyles(styles)(HomePage)