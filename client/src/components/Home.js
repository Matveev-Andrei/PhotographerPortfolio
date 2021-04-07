import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons'
import logo from '../2.PNG'

const Home = () => {
    const [image, setImage] = useState({})
    

    useEffect(() => {
        axios.get("https://api.unsplash.com/collections/1/photos?client_id=6Y-8Vx4t2UBk9mdLKOV_nRJfn9axULuN0ingbXwYlv0")
            .then((res) => {
                console.log("fetched?")
                console.log(res.data)
                console.log(image)
                setImage(res.data[8].urls.regular)
                console.log(image)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div
            style={{
                backgroundImage: 'url("' + image + '")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "100vh",
                filter: "saturate(2)",
            }}>
            <header className="d-flex justify-content-between p-5">
                <img className="rounded" style={{ width: "10%" }} src={logo} alt="logo image" />
                <div className="d-flex justify-content-center">
                    <div>
                        <a href="https://www.linkedin.com/" target="_blank"><Icon.Linkedin className="mr-3" color="white" /></a>
                        <a href="https://www.instagram.com/mnmaction/" target="_blank"><Icon.Instagram className="mr-3" color="white" /></a>
                        <a href="https://www.facebook.com/andrei.matveev.338" target="_blank"><Icon.Facebook className="mr-3" color="white" /></a>
                    </div>
                    <ul>
                        
                        <a className="m-3 p-3 border border-white text-white text-decoration-none" href="tel:5714561234">(571) 456-1234</a>
                        <a className="m-3 p-3 border border-white text-white text-decoration-none" href="mailto:matveeddev@gmail.com">matveevdev@gmail.com</a>
                    </ul>
                </div>
            </header>
            <main className="d-flex m-5 justify-content-center p-5">
                <div className="m-5">
                    <div className="m-5">
                        <h4 className="text-center m-3 "><Link to="/collection/6" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Destinations</Link></h4>
                        <h4 className="text-center m-3 "><Link to="/collection/2" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Nature</Link></h4>
                        <h4 className="text-center m-3 "><Link to="/collection/4" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Sierra</Link></h4>
                        <h4 className="text-center m-3 "><Link to="/collection/5" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Retro Cam</Link></h4>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;