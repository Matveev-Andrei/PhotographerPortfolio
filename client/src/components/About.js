import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import * as Icon from 'react-bootstrap-icons'
import logo from '../images/logo.PNG';
import me from '../images/IMG_7978.jpeg'


const About = () => {

    return (
        <div className="d-flex justify-content-center p-3 " style={{ backgroundColor: "#efe3cf", height: "100vh" }}>
            <nav className="d-flex align-items-center flex-column side-bar mt-4 mr-5 align-self-auto h-50">
                <Link to="/"><img className="w-100 mb-5" src={logo} alt="" /></Link>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/6" style={{ color: "#212529" }}>Destinations</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/2" style={{ color: "#212529" }}>Nature</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/4" style={{ color: "#212529" }}>Sierra</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/5" style={{ color: "#212529" }}>Retro Cam</Link></p>
                </div>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/about" style={{color : "#212529"}}>About</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 ">Contact</p>
                    <p className="text-black-50 border-bottom text-center m-3 ">Services</p>
                </div>
                <div className="d-flex justify-content-center ml-3 mt-3">
                    <a href="https://www.linkedin.com/" target="_blank"><Icon.Linkedin className="mr-3" color="#0077b5" /></a>
                    <a href="https://www.instagram.com/mnmaction/" target="_blank"><Icon.Instagram className="mr-3" color="#f09433" /></a>
                    <a href="https://www.facebook.com/andrei.matveev.338" target="_blank"><Icon.Facebook className="mr-3" color="blue" /></a>
                </div>
            </nav>
            <main className=" d-flex  flex-row flex-wrap pt-4 w-100 ">
                <div className="d-flex justify-content-center h-25 w-100">
                    <h1 className="d-inline align-self-center font-weight-light mr-4">About</h1>
                    <hr className="w-75 d-inline m-0 align-self-center ml-1" style={{ border: "1px solid black" }} />
                </div>
                <div className=" d-flex justify-content-center flex-row flex-wrap mb-5 w-100 ">
                    <img src={me} alt="" className="w-50 mr-4" />
                    <div className="w-25 mr-5">
                    <h5>Andrei Matveev</h5>
                    <h6>
                    <br />
                    Andrei Matveev is a Moldovan-born multi-award winner American editorial, documentary, and advertising still+motion director based in Washington D.C ,  Loudoun County (VA), and Chisinau, Moldova.
                    <br /><br/>
                    Being only 25 and shooting professionally for a little over six years, Andrei has produced imagery for giants such as Forbes, National Geographic, Vanity Fair, LA Weekly, Volvo, Hyundai, The Guardian, Johns Hopkins University, the musical Hamilton, Der Spiegel, Almarai, Home Instead Senior Care, APS, among many others.
                    <br /><br/>
                    His rather fast ascending career has warranted Pedro the nomination to the "Top 10 Photographers of 2020" by PhotoPolitic. <br/>
                    Andrei has been referred to by some as a "wonder kid" & an "up and coming creative." He has been labeled with equal frequency as a smartass and teller of dad's jokes to which he
                    agrees and takes more pride than the former.
                    <br /><br/>
                    Ultimately, his humble upbringing by a widowed mother in countryside Moldova,  and the sense of still being a kid trap in this adult's world is what makes Andrei's work so fresh and real.
                    Living in Washington D.C for most of his adult life, Andrei has grown to become a kombucha & coffee snob! </h6>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;