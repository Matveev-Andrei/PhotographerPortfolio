import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import me2 from '../images/IMG_8571.jpeg';
import Avatar from '@material-ui/core/Avatar';
import * as Icon from 'react-bootstrap-icons';
import logo from '../images/logo.PNG';
import acc from './.Any';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginBottom: theme.spacing(4)
    }
}))

const Contact = () => {

    const classes = useStyles();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedin", {
            withCredentials: true,
        })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
        console.log("fetched data")
        console.log("assigned state")

    }, [])
    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
        }, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);
                navigate(0);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="d-flex justify-content-center p-3 " style={{ backgroundColor: "#efe3cf", height: "100vh" }}>
            <nav className="d-flex align-items-center flex-column side-bar mt-4 mr-5 align-self-auto h-50">
                <Link to="/"><img className="w-100 mb-5" src={logo} alt="" /></Link>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/6" style={{ color: "#212529" }}>Destinations</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/2" style={{ color: "#212529" }}>Nature</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/4" style={{ color: "#212529" }}>Sierra</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/5" style={{ color: "#212529" }}>Retro Cam</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to={`/collection/${Math.floor(Math.random() * 8 + 11)}`} style={{ color: "#212529" }}>Random Collection</Link></p>
                </div>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/about" style={{ color: "#212529" }}>About</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/contact" style={{ color: "#212529" }}>Contact</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/services" style={{ color: "#212529" }}>Services</Link></p>
                </div>
                <div className="d-flex justify-content-center ml-3 mt-3">
                    <a href="https://www.linkedin.com/" target="_blank"><Icon.Linkedin className="mr-3" color="#0077b5" /></a>
                    <a href="https://www.instagram.com/mnmaction/" target="_blank"><Icon.Instagram className="mr-3" color="#f09433" /></a>
                    <a href="https://www.facebook.com/andrei.matveev.338" target="_blank"><Icon.Facebook className="mr-3" color="blue" /></a>
                </div>
            </nav>
            <main className=" d-flex  flex-row flex-wrap pt-4 w-100 ">
                <div style={{ height: '10%' }} className="d-flex w-100">
                    {
                        user.firstName ?
                            <div style={{ marginRight: '10%', marginTop: '2%' }} className="ml-auto d-flex pt-4">
                                <Link to="/profile"><Avatar src={me2} className={classes.large} /></Link>
                                <Link className="pt-3 ml-3" onClick={logout} to="/about">Logout</Link>
                            </div>
                            :
                            <div style={{ marginRight: '10%', marginTop: '2%' }} className=" ml-auto d-flex pt-4">
                                <Avatar src="/broken-image.jpg" className={classes.large} />
                                <a className="pt-3 ml-3" href="/login">Log In</a>
                            </div>
                    }
                </div>
                <div style={{height: '15%'}} className="d-flex justify-content-center w-100">
                    <h1 className="d-inline align-self-center font-weight-light mr-4">Contact</h1>
                    <hr className="w-75 d-inline m-0 align-self-center ml-1" style={{ border: "1px solid black" }} />
                </div>
                <div className=" d-flex justify-content-center h-75 flex-row flex-wrap mb-5 w-100 ">
                    <div className="mr-5 mt-5">
                        <p>
                            Thank you for your interest in Anne Lord Photography – A Northern Virginia Photographer.</p>
                        <p>
                            Please feel free to contact me with any questions at: <br />
                        </p>
                        <p><em><strong><a style={{ color: "#f50057" }} href="/">matveevdev@gmail.com</a></strong></em></p>
                        <p><em><strong><a style={{ color: "#f50057" }} href="/">(703) 435-5292</a> Office <br />
                            <a style={{ color: "#f50057" }} href="">(703) 994-7938 </a>Cell </strong></em> </p>
                        <p><strong>18564 Sandpiper Place <br /><br />Leesburg, VA 20176</strong> </p>
                    </div>
                    <div className="ml-5">
                        <iframe
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed/v1/place?key=${acc.gMaps}
                            &q=Anne+Lord+Photography,Leesburg+VA`}>
                        </iframe>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Contact;