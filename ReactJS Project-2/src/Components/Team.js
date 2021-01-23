import React from 'react'
import People from './People';

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// External CSS
import "../Main.scss";

function Team() {
    return (
        <main>

            {/* Child Component Instance */}

            <Title/>

            <People/>

        </main>
    )
}

export default Team

// Child Components

// Arrow function

const Title = () =>{
    return(

        // Title

            // row
            <div className="row">

                {/* col */}
                <div className="col text-center">

                    <h3 className='text-capitalize display-5 text-secondary mb-0'>
                        team through functional components
                    </h3>

                    <div className="underline mx-auto bg-danger">
                    </div>

                    <p className='lead text-muted'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>

                </div>
                {/* end of col */}

            </div>
            // end of row

        // End of Title

    )
}