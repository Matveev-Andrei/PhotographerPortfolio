import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons'
import logo from '../images/2.PNG'
import acc from './.Any';

const Home = () => {
    const [image, setImage] = useState({})
    

    useEffect(() => {
        axios.get(`https://api.unsplash.com/collections/1/photos?client_id=${acc.unsplash}`)
            .then((res) => {
                console.log("fetched?")
                console.log(res.data)
                console.log(image)
                setImage(res.data[8].urls.regular)
                console.log(image)
            })
            .catch((err) => console.log(err))
    }, [])

    const hoverNav = (e) =>{
        console.log(e.target)
        e.target.style.color = 'black';
        e.target.style.backgroundColor = 'white';
        
    }
    const unHoverNav = (e) => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'transparent';
    }
    const hoverCategories = (e) => {
        e.target.style.borderBottom = "solid 1px white";
    }
    const unHoverCategories = (e) => {
        e.target.style.borderBottom = "solid 1px rgba(255,255,255,.2)";
    }
    
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
                        
                        <a onMouseLeave={(e) => unHoverNav(e)} onMouseEnter={(e) => hoverNav(e)} className="m-3 p-3 border border-white text-decoration-none" style={{color : 'white'}} href="tel:5714561234">(571) 456-1234</a>
                        <a onMouseLeave={(e) => unHoverNav(e)} onMouseEnter={(e) => hoverNav(e)} className="m-3 p-3 border border-white text-decoration-none" style={{color : 'white'}} href="mailto:matveevdev@gmail.com">matveevdev@gmail.com</a>
                    </ul>
                </div>
            </header>
            <main className="d-flex m-2 justify-content-center ">
                <div className="mb-3 pb-5">
                    <div className="mb-4">
                        <h4 className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/collection/6" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Destinations</Link></h4>
                        <h4 className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/collection/2" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Nature</Link></h4>
                        <h4 className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/collection/4" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Sierra</Link></h4>
                        <h4 className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/collection/5" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Retro Cam</Link></h4>
                    </div>
                    <hr className="w-100 m-1 align-self-center ml-1" style={{ border: "1px solid rgba(255,255,255,.2)" }}/>
                    <div className="mb-3">
                        <h4  className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/about" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>About</Link></h4>
                        <h4  className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/contact" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Contact</Link></h4>
                        <h4  className="text-center m-3 "><Link onMouseLeave={(e) => unHoverCategories(e)} onMouseEnter={(e) => hoverCategories(e)} to="/services" style={{color : "white", textDecoration: "none", borderBottom: "solid 1px rgba(255,255,255,.2)"}}>Services</Link></h4>                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;