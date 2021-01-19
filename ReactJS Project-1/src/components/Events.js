import React from 'react'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

function Events() {

    // Arrow function
    const clickEvent = () => {
        console.log(`Hello,World!`);
    }

    return (

        <div>

            {/* Arrow function */}

            <h1 className='text-uppercase' onMouseOver={()=>{
                alert('Hello')
            }}>
                About Events
            </h1>

            <button type='button' className='btn btn-outline-warning btn-md text-capitalize text-dark mx-5' onClick={clickEvent}>

                <h4>
                    press here
                </h4>

            </button>
            
        </div>

    )
}

export default Events