import React, { useState} from "react";
import { navigate } from '@reach/router';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import logo from './logo.PNG';
import LockOpenIcon from '@material-ui/icons/LockOpen';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://material-ui.com/">
                www.matveevdev.com
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5),
        width: '40%'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    const register = e => {
        e.preventDefault();

        const newUser = {
            firstName,    // using shortcut syntax - this is the same as "firstName: firstName,"
            lastName,
            email,
            password,
            confirmPassword,
        };

        axios.post("http://localhost:8000/api/user/register",
            newUser,
            {
                // this will force the sending of the credentials / cookies so they can be updated
                //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
                //    unless withCredentials is set to true before making the request
                withCredentials: true,
            })
            .then(res => {
                console.log(res.data);

                // when we successfully create the account, reset state for registration form
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setErrs({});  // remember to reset errors state if it was successful
                navigate('/profile');
            })
            .catch((err) => {
                console.log(err);
                
            });
    }


    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <div className="d-flex w-100 justify-content-center mt-5">
                <Link className="text-center align-self-center" to="/"><img src={logo} className="w-25" alt="" /></Link>
            </div>
            <Paper className={classes.paper} elevation={3} >
                <Avatar className={classes.avatar}>
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form onSubmit={register} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
            </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
                </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
