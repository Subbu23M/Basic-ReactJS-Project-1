import React from 'react'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// External CSS
import './Main.scss';

// Now Store Properties with values in Array of Objects
const laptop = [

    {
        id:1,
        imageUrl : './Laptop.jpg',
        title : 'laptop for students',
        price : `25000$`
    },

    {
        id:2,
        imageUrl : './2.jpg',
        title : 'laptop for programmers',
        price : `20000$`
    },

    {
        id:3,
        imageUrl : './3.jpg',
        title : 'laptop for bloggers',
        price : `20000$`
    },

    {
        id:4,
        imageUrl : './4.jpg',
        title : 'laptop for trainers',
        price : `20000$`
    }

]
console.log(laptop);

// Parent Component
function ListOne() {

    // Iterate on each and every element in Array of Object.
    
    // Ananymous function
    const laptopDetails = laptop.map(function lapDet(lap) {

    console.log(lap);

    const {imageUrl,title,price} = lap;

        
        return(

            <section key={lap.id}>

                <article className='books'>

                    {/* row */}
                    <div className="row mx-auto bg-muted">

                        {/* col-1 */}
                        <div className="col-lg-3 col-sm-6 my-2">

                            <img src={imageUrl} className='img-fluid img-thumbnail' alt="Laptop" />

                            <h3 className='text-success text-capitalize text-center'>
                                {title}
                            </h3>

                            <h4 className='text-center text-capitalize text-warning'>
                                {price}
                            </h4>

                        </div>
                        {/* end of col-1 */}

                    </div>
                    {/* end of row */}

                </article>

            </section>

        )
        
    })
    
    return (
        
        <article>

            {/* We can pass properties with values for component instances. */}

            {laptopDetails}
            
        </article>

    )
}

export default ListOne

// const firstName = ['Subramanyam','Avika','Vishal'];
// console.log(firstName);

// The map() method creates a new array by performing a function on each array element.

// Ananymous function
// const newName = firstName.map(function dis(name) {

//     return <h2 className='text-primary'>{name}</h2>
    
// })