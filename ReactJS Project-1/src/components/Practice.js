import React from 'react'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// functional components with Props.

function Practice() {

    return (
        <section>

            {/* col-1 */}
            <Details

                details = {

                    {   imgUrl : './Laptop.jpg',
                        name : 'Laptop for students',
                        price : 25000

                    }
                }
            />

            {/* col-2 */}
            <Details

                details = {

                    {   imgUrl : './2.jpg',
                        name : 'Laptop for Trainers',
                        price : 25000

                    }
                }
            />

            {/* col-3 */}
            <Details

                details = {

                    {   imgUrl : './3.jpg',
                        name : 'Laptop for bloggers',
                        price : 25000

                    }
                }
            />

            {/* col-4 */}
            <Details

                details = {

                    {   imgUrl : './4.jpg',
                        name : 'Laptop for employees',
                        price : 25000

                    }
                }
            />

        </section>
    )
}

export default Practice

// Nested Components

const Details = (props) => {
    console.log(props);
    return(

        <div>
            {/* 1 */}
            <article>

                {/* row */}
                <div className="row mx-auto bg-info">

                    {/* col-1 */}
                    <div className="col-lg-3 my-2">

                        <img src={props.details.imgUrl} className='img-fluid img-thumbnail' alt="Laptop"/>

                        <h2 className='text-capitalize text-warning text-center'>
                            {props.details.name}
                        </h2>

                        <p className='text-dark text-center'>
                            {props.details.price}
                        </p>

                    </div>
                                                
                    {/* end of col-1 */}
                    
                </div>
                {/* end of row */}
        
            </article>

        </div>
    )
}