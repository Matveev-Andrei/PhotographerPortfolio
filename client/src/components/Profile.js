import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import logo from '../images/logo.PNG';
import { makeStyles } from '@material-ui/core/styles';
import me from '../images/IMG_8571.jpeg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginBottom: theme.spacing(4)
    }
}))

export default function Profile() {
    const classes = useStyles();
    const [user, setUser] = useState({});
    const [updateMsg, setUpdateMsg] = useState("");
    const [firstName, setUpdatedFn] = useState("");
    const [lastName, setUpdatedLn] = useState("");
    const [password, setUpdatedPw] = useState("");
    const [selectedFile, setSelectedFile] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedin", {
            withCredentials: true,
        })
            .then(res => {

                console.log(res.data)
                console.log("fetched data")
                setUser(res.data)
                console.log("assigned state")

            })
            .catch(err => {
                console.log("error in useEffect Profile !")
                console.log(err)
                navigate('/login')
            })


    }, [])
    const updateUser = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/user/${user._id}/update`, {
            firstName,
            lastName,
            password
        }, { withCredentials: true })
            .then(res => {
                console.log("update successfull")
                setUpdateMsg("Successfully Updated!")
                setTimeout(() => {
                    navigate(0)
                }, 3000)
            })
            .catch(err => {
                console.log(err)
                console.log(err.response)
            })
    }

    const fileSelectedHandler = (e) => {
        console.log(e.target.files[0])
    }
    const fileUploadHandler = () => {

    }

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
        }, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div style={{ height: "100vh" }} >

            <div className="d-flex w-100 justify-content-between align-items-center p-5 ">
                <Link to="/"><img src={logo} className="w-25" alt="" /></Link>
                <Button onClick={logout} variant="contained" color="secondary" className="h-25">
                    Log Out
                </Button>
            </div>
            <div className="w-75 d-flex m-auto h-75">
                <div className="w-100 d-flex justify-content-center align-self-center mb-5 h-75">
                    <div className="d-inline-flex flex-column mr-5 " style={{ width: '20%', height: '70%' }}>
                        <div className="d-flex justify-content-center flex-column align-items-center border border-secondary rounded p-4 mb-5 text-center" style={{ height: '55%' }}>
                            <div className="image-upload">
                                <label htmlFor="file-input">
                                    <Avatar src={me} className={classes.large} style={{cursor: 'pointer'}} />
                                </label>
                                <input onChange={fileSelectedHandler} type="file" id="file-input" />
                            </div>
                            {
                                user.firstName && <strong> {user.firstName + ' ' + user.lastName}</strong>
                            }
                        </div>
                        <div className="border border-secondary rounded p-4 mt-2" style={{ height: '44%' }}>
                            <p><Link to="/profile">Edit Profile</Link> </p>
                            <p><Link to="/">Order Services</Link> </p>
                        </div>
                    </div>
                    <div className="ml-2  rounded p-4 d-inline-block" style={{ width: '70%', height: '70%' }}>
                        <h2>Edit Profile</h2>
                        <span>View and edit your personal info below</span>
                        <hr />
                        <p className="text-success">{updateMsg}</p>
                        <div className="d-flex flex-column justify-content-center align-items-center h-75">
                            <form onSubmit={updateUser}>

                                <div className="mt-3"><Input value={user.firstName} onChange={e => setUpdatedFn(e.target.value)} placeholder="New First Name" inputProps={{ 'aria-label': 'description' }} /></div>
                                <div className="mt-3"><Input value={user.lastName} onChange={e => setUpdatedLn(e.target.value)} placeholder="New Last Name" inputProps={{ 'aria-label': 'description' }} /></div>
                                <div className="mt-3"><Input onChange={e => setUpdatedPw(e.target.value)} type="password" placeholder="New Password" inputProps={{ 'aria-label': 'description' }} /></div>
                                <Button type="submit" className="mt-4" variant="contained" color="primary">
                                    Update
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}