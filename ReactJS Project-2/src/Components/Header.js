import React from 'react';

import Team from '../Components/Team'

import Map from '../Components/Map'

import Footer from './Footer';

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// External CSS
import "../Main.scss";

// Parent Component
function Header() {
    return (

        <div>

            <header>

                {/* Child Component Instances */}

                <Banner/>

                <Services/>

                <Team/>

                <Map/>

                <Footer/>
                
            </header>

        </div>
    )
}

export default Header

// Nested Components

// Arrow functions

const Banner = () => {
    return(

        // row
        <div className="row d-none d-sm-block">

            {/* col */}
            <div className="col-lg-12 text-white col-sm-6 height banner">

                <h2 className='text-capitalize text font-weight-bold display-4'>

                    best education

                    <br/>

                    <span>
                        template
                    </span>

                </h2>

                <p className='text-capitalize tex w-50 lead'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut deserunt quae molestiae reprehenderit expedita quia a incidunt ea assumenda sequi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vitae.
                </p>

                <div className="buttons px-4 d-flex justify-content-start align-items-center">

                    <button className='btn btn-primary btn-lg mx-5 text-capitalize text-white'>
                        start a journey
                    </button>

                    <button className='btn btn-outline-warning btn-lg text-capitalize text-white'>
                        get template now
                    </button>

                </div>

            </div>
            {/* end of col */}

        </div>
        // end of row

    )
}

const Services = () =>{
    return(

        <section id='service' className='py-5'>

            <div className="container">

                {/* row */}
                <div className="row">

                    {/* col-1 */}
                    <div className="col-sm-6 col-lg-12 my-2 text-center">

                        <p className='text-uppercase text-dark font-weight-bold'>
                            unleash the capability of your business.
                        </p>

                        <h2>

                            <span className='text-capitalize font-weight-bold'>
                                digital agency feels
                            </span>

                            <br/>

                            <span className='ital'>
                                pride in creating
                            </span>

                            <br/>

                            <span className='font-weight-bold'>
                                success stories
                            </span>

                        </h2>

                            <p className='w-auto display-5 text-capitalize py-5 text-muted d-inline'>
                                We are digital agency in kadapa, Andhra pradesh specialising in growing brands to drive bottom line results. We tell your story so you stand out from the crowd. Whether you’re a not-for-profit or growing business, you’re here because you recognise the impact marketing can have on new business opportunities. We listens, adapts and grows with you to craft those small details that give your brand a stand out personality in Kadapa,Andhra pradesh.
                            </p>

                    </div>
                    {/* end of col-1 */}

                </div>
                {/* end of row */}

            </div>

        </section>
        
    )

}