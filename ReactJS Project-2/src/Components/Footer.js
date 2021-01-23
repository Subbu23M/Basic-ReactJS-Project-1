import React from 'react'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// External CSS
import "../Main.scss";

// Footer Icons

// import { FaTwitter } from "react-icons/fa";

import { FaCopyright } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";

// import { FaFacebook } from "react-icons/fa";

// import { FaGithub } from "react-icons/fa";

// import { FaArrowAltCircleRight } from "react-icons/fa";

// External CSS
import "../Main.scss";

// Parent Component

function Footer() {
    return (
        <div>

            {/* Child Component Instance */}

            <PartOne/>

        </div>
    )
}

export default Footer

// Child Component
const PartOne = () =>{
    return(

        <footer className='my-2 px-2 pt-1 text-center'>

            <p className='text-capitalize text-dark '>

                <FaCopyright className='m-2'/>
                sreshty media. all rights reserved

            </p>

            <p className='text-capitalize'>

                made with <FaHeart className='text-danger mb-1'/> in kadapa

            </p>

        </footer>

    )
}