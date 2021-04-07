import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons'
import logo from '../logo.PNG'


const Collections = (props) => {
    const [images, setImages] = useState([]);
    
    console.log("starting collections element")
    useEffect(() => {
        axios.get(`https://api.unsplash.com/collections/${props.id}/photos?client_id=6Y-8Vx4t2UBk9mdLKOV_nRJfn9axULuN0ingbXwYlv0`)
            .then((res) => {
                console.log("setting new images")
                setImages(res.data)
                
            })
            .catch((err) => console.log(err))
    }, [props.id])

    return (
        <div className="d-flex justify-content-center p-3 " style={{ backgroundColor: "#efe3cf" }}>
            <nav className="d-flex align-items-center flex-column side-bar mt-4 mr-5 align-self-auto h-50">
                <Link to="/"><img className="w-100 mb-5" src={logo} alt="" /></Link>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/6" style={{color: "#212529"}}>Destinations</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/2" style={{color: "#212529"}}>Nature</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/4" style={{color : "#212529"}}>Sierra</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/5" style={{color : "#212529"}}>Retro Cam</Link></p>
                </div>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 ">About</p>
                    <p className="text-black-50 border-bottom text-center m-3 ">Contact</p>
                    <p className="text-black-50 border-bottom text-center m-3 ">Services</p>
                </div>
                <div className="d-flex justify-content-center ml-3 mt-3">
                <a href="https://www.linkedin.com/" target="_blank"><Icon.Linkedin className="mr-3" color="#0077b5" /></a>
                <a href="https://www.instagram.com/mnmaction/" target="_blank"><Icon.Instagram className="mr-3" color="#f09433" /></a>
                <a href="https://www.facebook.com/andrei.matveev.338" target="_blank"><Icon.Facebook className="mr-3" color="blue" /></a>
                </div>
            </nav>
            <main className="m-auto d-flex flex-row flex-wrap pt-4 ">
                {
                    images.map((image, index) => (
                        <div key={index}>
                            <img  className="m-4" src={image.urls.small} alt="" />
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export default Collections;