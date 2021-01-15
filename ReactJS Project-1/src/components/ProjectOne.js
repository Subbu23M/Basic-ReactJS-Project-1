import React from 'react'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

import Photo from '../assets/images/Product-1.jpg'

// External CSS
import './Main.scss'

function ProjectOne() {
    return (
        <section>

            <div className="row mx-auto">

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

                <div className="col-lg-3 col-sm-6 my-2">

                    {/* Component Instances */}
                    <Plants/>

                </div>

            </div>

        </section>
    )
}

export default ProjectOne

// Nested Components

const Plants = () => {
    return(
        <article>

            {/* Component Instances */}

            <Image/>

            <Title/>

            <Price/>

        </article>
    )
}

const Image = () => {

    return <img src={Photo} alt="Photo" width='300' height='250'/>;
}

const Title = () => {
    return (
        <h2 className='text-success text-center my-1'>
            Bonsai Plant
        </h2>
    )
}

const Price = () => {
    return(
        <h2 className='text-danger text-center'>
            $20
        </h2>
    )
}