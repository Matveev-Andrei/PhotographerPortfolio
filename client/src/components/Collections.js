import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import logo from '../images/logo.PNG';
import acc from './.Any';

const Collections = (props) => {
    const [images, setImages] = useState([]);

    console.log("starting collections element")
    useEffect(() => {
        axios.get(`https://api.unsplash.com/collections/${props.id}/photos?client_id=${acc.unsplash}`)
            .then((res) => {
                console.log("setting new images")
                setImages(res.data)

            })
            .catch((err) => console.log(err))
    }, [props.id])

    return (
        <div className="d-flex justify-content-center p-3 " style={{ backgroundColor: "#efe3cf", minHeight : '100vh'}}>
            <nav className="d-flex align-items-center flex-column side-bar mt-4 mr-5 align-self-auto h-50">
                <Link to="/"><img className="w-100 mb-5" src={logo} alt="" /></Link>
                <div className="mt-4">
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/6" style={{ color: "#212529" }}>Destinations</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/2" style={{ color: "#212529" }}>Nature</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/4" style={{ color: "#212529" }}>Sierra</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to="/collection/5" style={{ color: "#212529" }}>Retro Cam</Link></p>
                    <p className="text-black-50 border-bottom text-center m-3 "><Link to={`/collection/${Math.floor(Math.random() * 8 + 11 )}`} style={{ color: "#212529" }}>Random Collection</Link></p>
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
            <main className="m-auto d-flex flex-row flex-wrap pt-4 ">
                {
                    images.map((image, index) => (
                        <div key={index}>
                            <img className="m-4" src={image.urls.small} alt={image.urls.alt_description} />
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export default Collections;