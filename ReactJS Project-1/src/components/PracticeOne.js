import React from 'react'

// External CSS
import './Practice.scss';

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

import Plant from '../assets/images/Product-1.jpg'

function PracticeOne() {
    return (

        <div>

            {/* Component Instances */}
            <First/>

        </div>

    )
}

export default PracticeOne

// Nested Components
const First = () =>{
    return(

        <div>

            {/* Component Instances */}

            <Second/>

            <Third/>
            
            <Fourth/>

        </div>

    )
}

// Arrow function
const Second = () => {
    return(

        <section>

            {/* row */}
            <div className="row">

                <div className="col">

                    <article>

                        <div className="card mx-3 my-2">

                            <img src={Plant} className='rounded-thumbnail' width='500' height='300' alt="Plant"/>

                        </div>

                    </article>

                </div>

            </div>
            {/* end of row */}

        </section>

    )
}

// Arrow function
const Third = () =>{
    return(

        <h2 className='text-center text-dark text-capitalize'>
            bonsai plant
        </h2>

    )
}

// Arrow function
const Fourth = () =>{
    return(

        <p className='lead mx-2 text-muted'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores unde earum harum vero consectetur pariatur sunt enim eligendi illum quisquam?
        </p>

    )
}